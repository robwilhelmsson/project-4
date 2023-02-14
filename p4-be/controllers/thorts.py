from http import HTTPStatus
from marshmallow.exceptions import ValidationError

from flask import Blueprint, request
from middleware.secure_route import secure_route
from models.thort import ThortModel
from models.user import UserModel


from serializers.thort import ThortSchema
from serializers.user import UserSchema

thort_schema = ThortSchema()
user_schema = UserSchema()


router = Blueprint("thorts", __name__)


# ? GET USERS
@router.route("/users", methods=["GET"])
def get_users():
    users = UserModel.query.all()
    print(users)
    return user_schema.jsonify(users, many=True)


# ? SIGNUP
@router.route("/signup", methods=["POST"])
def signup():
    user_dictionary = request.json
    try:
        user = user_schema.load(user_dictionary)
        user.save()
    except ValidationError as e:
        return {"errors": e.messages, "messsages": "Something went wrong"}
    return user_schema.jsonify(user), HTTPStatus.OK


# ? LOGIN
@router.route("/login", methods=["POST"])
def login():
    user_dictionary = request.json
    user = UserModel.query.filter_by(email=user_dictionary["email"]).first()
    if not user:
        return {
            "message": "Your email or password was incorrect."
        }, HTTPStatus.UNAUTHORIZED
    if not user.validate_password(user_dictionary["password"]):
        return {
            "message": "Your email or password was incorrect."
        }, HTTPStatus.UNAUTHORIZED
    token = user.generate_token()
    return {"token": token, "message": "Welcome back!"}



# ? GET THORTS
@router.route("/thorts", methods=["GET"])
def get_thorts():
    thorts = ThortModel.query.all()
    print(thorts)
    return thort_schema.jsonify(thorts, many=True)


# ? GET ONE THORT
@router.route("/thorts/<int:thort_id>", methods=["GET"])
def get_single_thort(thort_id):
    thort = ThortModel.query.get(thort_id)
    return thort_schema.jsonify(thort)


# ? CREATE THORT
@router.route("/thorts", methods=["POST"])
@secure_route
def create_thort():
    thort_dictionary = request.json
    try:
        thort = thort_schema.load(thort_dictionary)
        thort.save()
    except ValidationError as e:
        return {"errors": e.messages, "message": "Something went wrong"}
    return thort_schema.jsonify(thort)
