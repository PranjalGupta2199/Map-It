from flask import Flask, Blueprint
from flask_restful import Resource, Api
from geoflask.app.geoInterface import GeoServer
from flask import json

workspace_blueprint = Blueprint("workspace", __name__)

@workspace_blueprint.route('/workspace', methods=['GET'])
def get(name=None): 
    print (type(GeoServer().get_workspace()[0]))
    return "Hello World"