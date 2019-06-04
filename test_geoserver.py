import os
import pytest
import requests
from geoflask.app import *
import geoserver

def test_instance():
    Obj1 = GeoServer()
    Obj2 = GeoServer()
    assert Obj1 is Obj2

def test_connection():
    link = GeoServer().server
    assert link is not None
