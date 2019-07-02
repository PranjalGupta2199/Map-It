from flask import Flask, Blueprint
from flask_restful import Resource, Api
from .index import index
from .workspace import workspace_blueprint
from .layer import layer
from .preview import preview_blueprint
from .login import login_blueprint

app = Flask(__name__)
api = Api(app)

def add_views(app):
    app.register_blueprint(index)
    app.register_blueprint(workspace_blueprint)
    app.register_blueprint(layer)
    app.register_blueprint(preview_blueprint)
    app.register_blueprint(login_blueprint)