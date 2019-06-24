import requests as req
from flask import Flask, Blueprint,request,json
from ..app import geoInterface

layer = Blueprint("layer", __name__)

server = geoInterface.GeoServer.link
auth = geoInterface.GeoServer().get_auth()

@layer.route('/layer', methods=['GET'])
def get():
    name = request.args.get('name')
    if name is None:
        layerLink = server + ('/layers')
    else :
        layerLink = server + ('/layers/{}'.format(name))

    resp = req.get(url=layerLink, auth=auth)

    return resp.text
