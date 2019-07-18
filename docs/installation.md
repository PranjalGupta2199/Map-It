## Installation

Please follow all the steps given in under the installation section in table of contents. 


## Running the application

To start the application run the following commands:
(Make sure you're at the root directory of the project.)

```shell
    cd frontend/
    npm start 
```

This will start the react server. To start the flask server, make sure that your that your geoserver, geowebcache and postgres database is up and running. 
Then open a new terminal and run the following commands: 

```shell
    cd backend/
    pipenv shell 
    python run.py
```