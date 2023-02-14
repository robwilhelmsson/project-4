
from app import db
from models.base import BaseModel
from models.user import UserModel # pylint: disable=unused-import

class ThortModel(db.Model, BaseModel):
    __tablename__ = "thorts"

    content = db.Column(db.Text, nullable=False, unique=True)

    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)