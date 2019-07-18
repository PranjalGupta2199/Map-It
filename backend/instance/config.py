import os
import sys

class Config(object):
    """Parent configuration class."""
    POSTGRES = {
	    'user': 'pranjal',
	    'pw': 'password',
	    'db': 'pranjal',
	    'host': 'localhost',
	    'port': '15432',
    }
    DEBUG = False
    CSRF_ENABLED = True
    SECRET = os.getenv('SECRET')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = "postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s" % POSTGRES
    CORS_HEADERS = 'Content-Type'

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

