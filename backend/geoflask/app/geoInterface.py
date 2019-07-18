from geoserver.catalog import Catalog as gsconfig
import requests
from requests.exceptions import ConnectionError, ConnectTimeout
import sys


class GeoServer(object):
    link = "http://localhost:8080/geoserver/rest"
    username = None
    password = None
    _instance = None

    def __init__(self,user="admin", pwd="geoserver"):
        __class__.username = user
        __class__.password = pwd
        
        self.connect()

        GeoServer._instance = self

    def __new__(cls):
        if __class__._instance is None:
            __class__._instance = object.__new__(cls)
        return __class__._instance    

    def get_auth(self):
        return (__class__.username, __class__.password)


class GeoCache(object):
    link = "http://localhost:8080/geowebcache"
    username = None
    password = None
    _instance = None

    def __init__(self,user="geowebcache", pwd="secured"):
        __class__.username = user
        __class__.password = pwd
            
        GeoServer._instance = self

    def __new__(cls):
        if __class__._instance is None:
            __class__._instance = object.__new__(cls)
        return __class__._instance    

    def get_auth(self):
        return (__class__.username, __class__.password)
