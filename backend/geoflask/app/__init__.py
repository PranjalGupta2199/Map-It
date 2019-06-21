import os
from flask import Flask
from .. import views
from .geoInterface import GeoServer, GeoCache
try:
    from instance.config import get_env
except ImportError:
    from config import get_env

def create_app(config_name = 'development'):
    app = Flask(__name__,instance_relative_config=True)
    env = get_env('development')
    app.config.from_object(env)
    views.add_views(app)
    GeoServer()
    GeoCache()

    return app
