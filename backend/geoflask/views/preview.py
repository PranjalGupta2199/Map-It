import requests as req
import json
from flask import Flask, Blueprint,request,json
from ..app import geoInterface
import os

preview_blueprint = Blueprint('preview', __name__)

server = geoInterface.GeoServer.link
cache = geoInterface.GeoCache.link
authserver= geoInterface.GeoServer().get_auth()
authcache = geoInterface.GeoCache().get_auth()

@preview_blueprint.route('/preview', methods=['GET'])
def get():
    link = cache + ('/rest/layers')
    param = request.args.get('layer')
    r = req.get(link, auth=authcache)
    layerList = r.text.replace('"', '').replace("[", '').replace(']', '').split(',')

    resp = {
        'source' : 'server',
        'link' : server[:server.find('/rest')] + ('/wms'),
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
        else:
            add(resp)
    return json.dumps(resp)

def add(response):
    layer = response['layer']
    server_link = response['source']
    wkdir = os.getcwd() + ('/geoflask/views/add_xml.txt')
    
    link = cache + ('/rest/layers/{}.xml'.format(layer))
    headers = {"Content-type": "text/xml"} 
    with open(wkdir, 'r') as f :
        data = f.read().format(layer, server_link, layer)
    r = req.put(url=link,auth=authcache,  data=data, headers=headers)
    seed(layer)
    

def seed(layer):
    link = cache + ('/rest/seed/{}.xml'.format(layer))
    #print (req.get(cache + ('/rest/seed/{}.json'.format(layer)),auth=authcache).text)
    wkdir = os.getcwd() + ('/geoflask/views/seed_xml.txt')
    with open(wkdir, 'r') as f:
        seedRequest = f.read().format(layer)
    headers = {"Content-type": "text/xml"} 
    r = req.post(url=link, auth=authcache, headers=headers, data=seedRequest)