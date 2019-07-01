import requests as req
from flask import Flask, Blueprint,request,json
from ..app import geoInterface


workspace_blueprint = Blueprint("workspace", __name__)

server = geoInterface.GeoServer.link
auth = geoInterface.GeoServer().get_auth()

@workspace_blueprint.route('/workspace', methods=['GET'])
def get(): 
    name = request.args.get('workspace')
    if name is None :
        link = server + ('/workspaces')
    else :
        link = server + ('/workspaces/{}'.format(name))
    
    resp =  req.get(url=link, auth=auth).json()
    
    try: 
        return json.jsonify(resp['workspaces']['workspace'])
    except:
        return json.jsonify(resp)
