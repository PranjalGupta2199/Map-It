from geoserver.catalog import Catalog as gsconfig
import requests
from requests.exceptions import ConnectionError, ConnectTimeout
import sys


class GeoServer(object):
    server = "http://localhost:8080/geoserver/rest"
    username = None
    password = None
    _instance = None

    def __init__(self,link="None",user="admin", pwd="geoserver"):
        if link is not None: 
            server = link
        __class__.username = user
        __class__.password = pwd
        
        self.catalog = None
        self.connect()

        GeoServer._instance = self
        GeoServer.check()

    def __new__(cls):
        if __class__._instance is None:
            __class__._instance = object.__new__(cls)
        return __class__._instance    

    def connect(self):
        if self.catalog is None:
            self.catalog = gsconfig(__class__.server,\
                username = __class__.username,\
                password = __class__.password)

    @classmethod
    def check(self):
        try:
            response = requests.get(__class__.server)
        except  ConnectionError:
            print ("Connection Error.")
            sys.exit(0)
        except ConnectTimeout:
            print ("Connection Timed Out.")
            sys.exit(0)
    
    def get_auth(self):
        return (__class__.username, __class__.password)
