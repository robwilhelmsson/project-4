
from sqlalchemy.exc import SQLAlchemyError
from app import app, db
from models.thort import ThortModel
from models.user import UserModel

with app.app_context():
    try:
        print('Creating our database...')
        db.drop_all()
        db.create_all()

        print('Seeding the database!')

        user = UserModel(username="robwilhelmsson", email='rob@rob.com', password="Password123!", author="Rob Wilhelmsson")
        user.save()

        quote_one = ThortModel(content="A hydrated team is a high rated team.", author_id=user.id)
        quote_one.save()
        quote_two = ThortModel(content="Goggles for go, sunnies for show.", author_id=user.id)
        quote_two.save()
        quote_three = ThortModel(content="If you do it, then it's done.", author_id=user.id)
        quote_three.save()

        print("Database seeded!")

    except SQLAlchemyError as e:
        print("Error occured while creating database: ", e)