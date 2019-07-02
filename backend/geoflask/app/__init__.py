import os
from flask import Flask
from .. import views
from .geoInterface import GeoServer, GeoCache
from flask_cors import CORS
try:
    from instance.config import get_env
except ImportError:
    from config import get_env


def create_app(config_name = 'development'):
    app = Flask(__name__,instance_relative_config=True)
    CORS(app)
    env = get_env('development')
    app.config.from_object(env)

    from ..models import db, Login
    db.init_app(app)
    with app.app_context():
        db.create_all() 

    views.add_views(app)
    GeoServer()
    GeoCache()

    return app
