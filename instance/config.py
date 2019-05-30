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


class TestingConfig(Config):
    """Configurations for Testing, with a separate test database."""
    TESTING = True
    DEBUG = True

class StagingConfig(Config):
    """Configurations for Staging."""
    DEBUG = True


class ProductionConfig(Config):
    """Configurations for Production."""
    DEBUG = False
    TESTING = False


def get_env(config_name):
    try:
        return app_config[config_name]
    except KeyError:
        return app_config['development']

app_config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'staging': StagingConfig,
    'production': ProductionConfig,
}
