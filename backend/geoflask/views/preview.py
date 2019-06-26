import requests as req
import json
from flask import Flask, Blueprint,request,json
from ..app import geoInterface
import xml.etree.ElementTree as ET

preview_blueprint = Blueprint('preview', __name__)

server = geoInterface.GeoServer.link
cache = geoInterface.GeoCache.link
authserver= geoInterface.GeoServer().get_auth()
authcache = geoInterface.GeoCache().get_auth()

@preview_blueprint.route('/preview', methods=['GET'])
def get():
    link = cache + ('/rest/layers')
    param = request.args.get('layer')
    print (param)
    r = req.get(link, auth=authcache)
    layerList = r.text.replace('"', '').replace("[", '').replace(']', '').split(',')
    print (layerList)

    resp = {
        'source' : 'server',
        'link' : server[:server.find('/rest')],
        'layer' : param,
    }

    for layers in layerList:
        if (layers == param):
            resp['source'] = 'cache'
            resp['link'] = cache
            break
    else :
        link = server + ('/layers/{}'.format(param))
        r = req.get(link, auth=authserver)
        if (r.status_code == 404):
            resp['source'] = 'Not Found'
            resp['link'] = "Not Found"
    return json.dumps(resp)
