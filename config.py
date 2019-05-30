import os
import sys
import requests as req
from requests.exceptions import ConnectionError, ConnectTimeout

class Config(object):
    """Parent configuration class."""
    DEBUG = False
    CSRF_ENABLED = True
    SECRET = os.getenv('SECRET')
    GEOSERVER = "http://localhost:8080/geoserver/rest"

    def __init__(self, *args, **kwargs):
        self.connect()

    def connect(self):
        try:
            response = req.get(__class__.GEOSERVER)
        except  ConnectionError:
            print ("Connection Error.")
            sys.exit(1)
        except ConnectTimeout:
            print ("Connection Timed Out.")
            sys.exit(1)

class DevelopmentConfig(Config):
    """Configurations for Development."""
    DEBUG = True

def get_env(config_name='development'):
    return DevelopmentConfig()
