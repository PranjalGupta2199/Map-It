import os
from flask import Flask
try:
    from instance.config import get_env
except ImportError:
    from config import get_env

def create_app():
    app = Flask(__name__,instance_relative_config=True)
    env = get_env('development')
    app.config.from_object(env)

    return app