import requests as req
from flask import Flask, Blueprint,request,json
from flask_restful import Resource, Api
from ..app import geoInterface

preview_blueprint = Blueprint('preview', __name__)

server = geoInterface.GeoServer.link
cache = geoInterface.GeoServer.link
auth = geoInterface.GeoServer().get_auth()

@preview_blueprint.route('/preview', methods=['GET'])
def get():
    pass