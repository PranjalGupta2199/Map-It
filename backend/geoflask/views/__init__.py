from flask import Flask, Blueprint
from flask_restful import Resource, Api
from .index import index
from .workspace import workspace_blueprint
from .layer import layer

app = Flask(__name__)
api = Api(app)

def add_views(app):
    app.register_blueprint(index)
    app.register_blueprint(workspace_blueprint)
    app.register_blueprint(layer)