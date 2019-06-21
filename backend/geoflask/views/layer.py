import requests as req
from flask import Flask, Blueprint,request
from flask_restful import Resource, Api
from ..app import geoInterface

server = geoInterface.GeoServer.server
auth = geoInterface.GeoServer().get_auth()
layer = Blueprint("layer", __name__)


@layer.route('/layer', methods=['GET'])
def get():
    name = request.args.get('name')
    if name is None:
        layerLink = server + ('/layers')
    else :
        layerLink = server + ('/layers/{}'.format(name))

    resp = req.get(url=layerLink, auth=auth)
    
    return resp.text
