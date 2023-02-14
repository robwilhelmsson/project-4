# to convert between python objects and sqlalchemy models.

from app import ma
from models.thort import ThortModel


class ThortSchema(ma.SQLAlchemyAutoSchema):

    class Meta:
        model = ThortModel
        load_instance = True
        include_fk = True