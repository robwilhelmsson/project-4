
from flask import Blueprint


from models.thort_data import thorts_db

router = Blueprint('thorts', __name__)

# ? Get all my thorts
@router.route("/thorts", methods=["GET"])
def get_thorts():
    return thorts_db