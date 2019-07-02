import os
import sys

class Config(object):
    """Parent configuration class."""
    POSTGRES = {
        'user': 'pranjal',
        'pw': 'password',
        'db': 'pranjal',
        'host': 'localhost',
        'port': '5432',
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

def get_env(config_name='development'):
    return DevelopmentConfig()

