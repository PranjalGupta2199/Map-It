## Overview

This application is divided into 4 parts: 

* Frontend (ReactJS + Jest)
* Geoserver (JAVA)
* GeoWebCache (JAVA)
* Backend (Flask + PyTest)

Geoserver is a software used to publish maps and GeoWebCache is used to seed layers from geoserver. Backend is developed as a service which will automate the process of seeding layers. Frontend provides a portal for viewing maps published on the geoserver.