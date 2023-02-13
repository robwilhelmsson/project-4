
from sqlalchemy.exc import SQLAlchemyError
from app import app, db
from models.thort import ThortModel

with app.app_context():
    try:
        print('Creating our database...')
        db.drop_all()
        db.create_all()

        print('Seeding the database!')

        quote_one = ThortModel(content="Whatever you are, be a good one.", rating=6)
        quote_one.save()
        quote_two = ThortModel(content="Act as if what you do makes a difference.", rating=8)
        quote_two.save()
        quote_three = ThortModel(content="The only real mistake is the one from which we learn nothing", rating=4)
        quote_three.save()

        print("Database seeded!")

    except SQLAlchemyError as e:
        print("Error occured while creating database: ", e)