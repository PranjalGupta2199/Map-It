from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

class Login(db.Model):
    email = db.Column(db.String(100), primary_key = True)
    password = db.Column(db.String(200))
    def __init__(self, email, password):
        self.email = email
        self.password = password