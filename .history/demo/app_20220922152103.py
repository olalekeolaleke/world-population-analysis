# import necessary libraries
# from models import create_classes
import os
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, or_
from sqlalchemy.ext.automap import automap_base

import pickle

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

engine = create_engine("sqlite:///:memory:/world_unemployment")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
print(Base.classes.keys())

# Movies = Base.classes.movies
# Actors = Base.classes.actors

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=pickle.TRUE)