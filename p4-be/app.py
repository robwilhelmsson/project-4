from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.environment import db_URI

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = db_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ? Import controllers so I can register
# ? and prefix with /api
from controllers import thorts

# ? Register the router with our flask app.
app.register_blueprint(thorts.router, url_prefix="/api")