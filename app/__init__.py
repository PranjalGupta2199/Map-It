import os
from flask import Flask
from geoflask.views import add_views
try:
    from instance.config import get_env
except ImportError:
    from config import get_env

def create_app():
    app = Flask(__name__,instance_relative_config=True)
    env = get_env('development')
    env().connect()
    app.config.from_object(env)
    add_views(app)

    return app
