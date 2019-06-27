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
            currSeed = eval(req.get(cache + ('/rest/seed/{}.json'.format(param)),\
                auth=authcache).text)
            if (len(currSeed['long-array-array']) == 0):
                resp['source'] = 'cache'
                resp['link'] = cache
                break
            else:
                print ('Seeding currently in progress')
                continue
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
    server_link = response['link']
    print (server_link)
    wkdir = os.getcwd() + ('/geoflask/views/add_xml.txt')
    
    link = cache + ('/rest/layers/{}.xml'.format(layer))
    headers = {"Content-type": "text/xml"} 
    with open(wkdir, 'r') as f :
        data = f.read().format(layer, server_link, layer)
    r = req.put(url=link,auth=authcache,  data=data, headers=headers)
    seed(layer)
    

def seed(layer):
    link = cache + ('/rest/seed/{}.xml'.format(layer))
    wkdir = os.getcwd() + ('/geoflask/views/seed_xml.txt')
    with open(wkdir, 'r') as f:
        seedRequest = f.read().format(layer)
    headers = {"Content-type": "text/xml"} 
    r = req.post(url=link, auth=authcache, headers=headers, data=seedRequest)