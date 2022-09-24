import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,send_file,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

import sys
print(sys.path)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///static/assets/data/unemployment.db"

db = SQLAlchemy(app)

# from .models import census
try:
    # Assume we're a sub-module in a package.
    from .models import *
except ImportError:
     from models import *


@app.route("/")
def home():
    return render_template("index.html")

