#!flask/bin/python
from flask import Flask, jsonify, request, abort, flash, url_for, redirect, render_template
import json, bcrypt
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import exists
from sqlalchemy.exc import IntegrityError

POSTGRES = {
	    'user': 'pranjal',
	    'pw': 'password',
	    'db': 'pranjal',
	    'host': 'localhost',
	    'port': '5432',
    }   

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
db = SQLAlchemy(app)


class Login(db.Model):
    email = db.Column(db.String(100), primary_key = True)
    password = db.Column(db.String(200))
    def __init__(self, email, password):
        self.email = email
        self.password = password

@app.route('/', methods=['POST'])
@cross_origin() 
def foo():
	if not request.json:
		abort(400)
	login_email = request.get_json()['email']
	login_password = request.get_json()['password']
	email_exist = db.session.query(exists().where(login.email == login_email)).scalar()
	if not email_exist:
		return json.dumps({'login' : 'user_not_registered', 'email' : login_email})
	else:
		database_password = db.session.query(login.password).filter_by(email=login_email).scalar()
		if bcrypt.checkpw(login_password.encode('utf-8'), database_password.encode('utf-8')): 
			return json.dumps({'login' : 'successful', 'email' : login_email})
		else:
			return json.dumps({'login' : 'password_incorrect', 'email' : login_email}) 
	
if __name__ == '__main__':
	db.create_all()
	passwd = b'admin'
	student = Login("admin@bisag.com", bcrypt.hashpw(passwd, bcrypt.gensalt()).decode("utf-8"))
	db.session.add(student)
	try:
	    db.session.commit()
	except IntegrityError:
	    print ("Commit Error")
	    db.session.close() 
	app.run(debug=True)
