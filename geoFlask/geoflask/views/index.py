from flask import Blueprint

index = Blueprint('home',__name__,)

@index.route('/')
def view():
    return "Welcome to the Backend API of geoFlask"
        