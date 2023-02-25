
from os import environ
# import load_env, this function loads an env file from a path.
from dotenv import load_dotenv

# Here we get a filepath from either the ENV_FILE passed through, or .env as a default. 
ENVIRONMENT_FILE = environ.get('ENV_FILE') or '.env'

# Here we are passing through the env file to load from. override=True means the env file will override .env, if .env exists. 
load_dotenv(ENVIRONMENT_FILE, override=True)

# Now, environ.get will retrieve variables from the file we provided.
db_URI = environ.get('DB_URI')
secret = environ.get('SECRET')