from pickle import TRUE
import psycopg2
from flask import Flask, render_template


app = Flask(__name__)
# con = psycopg2.connect(database="wrld_population_db", user="postgres", password="akinbola1984", host="127.0.0.1", port="5432")
# cursor = con.cursor()

@app.route("/")
def home():  
    # cursor.execute("select * from world_population")
    # result = cursor.fetchall()
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=TRUE)
   