from flask import Blueprint, Flask
from flask_cors import CORS, cross_origin
import json, bcrypt
from flask import Flask, jsonify, request, abort, flash, url_for, redirect, render_template
from ..models import db, Login
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import exists
from sqlalchemy.exc import IntegrityError

login_blueprint = Blueprint("login", __name__)

@login_blueprint.route('/login', methods=['POST'])
@cross_origin() 
def login():
	if not request.json:
		abort(400)
	login_email = request.get_json()['email']
	login_password = request.get_json()['password']
	email_exist = db.session.query(exists().where(Login.email == login_email)).scalar()
	if not email_exist:
		return json.dumps({'login' : 'user_not_registered', 'email' : login_email})
	else:
		database_password = db.session.query(Login.password).filter_by(email=login_email).scalar()
		if bcrypt.checkpw(login_password.encode('utf-8'), database_password.encode('utf-8')): 
			return json.dumps({'login' : 'successful', 'email' : login_email})
		else:
			return json.dumps({'login' : 'password_incorrect', 'email' : login_email}) 
