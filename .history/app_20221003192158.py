from pickle import TRUE
import psycopg2
from flask import Flask, render_template 







app = Flask (__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/')
def Index():
    return render_template('index.html')

@app.route('/Map')
def Map():
    return render_template('map.html')

if __name__ == '__main__':
    app.run(debug=True)