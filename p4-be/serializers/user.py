
import re
from marshmallow import fields, ValidationError
from app import ma
from models.user import UserModel


def validate_password(password):
    if len(password) < 8:
        raise ValidationError("Must contain 8 characters")
    if re.search("[A-Z]", password) is None:
        raise ValidationError("Must contain capital letter")

def validate_email(email):
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if re.fullmatch(pattern, email) is None:
        raise ValidationError("Invalid email")
    return email


class UserSchema(ma.SQLAlchemyAutoSchema):
    password = fields.String(required=True)
    email = fields.String(required=True)

    class Meta:
        model = UserModel
        load_instance = True
        exclude = ("password_hash",)
        load_only = ("email", "password")
