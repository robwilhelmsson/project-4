
from app import db
from models.base import BaseModel


class ThortModel(db.Model, BaseModel):
    __tablename__ = "thorts"

    content = db.Column(db.Text, nullable=False, unique=True)
    rating = db.Column(db.Integer, nullable=True)