from pickle import TRUE
import psycopg2
from flask import Flask, render_template, jsonify


# # app = Flask(__name__)
# # con = psycopg2.connect(database="WorldUnemployment_db", user="postgres", password="akinbola1984", host="127.0.0.1", port="5432")
# # cursor = con.cursor()

# # @app.route("/", methods=['post', 'get'])
# # def test():  
# #     cursor.execute("select * from unemployment_rate")
# #     result = cursor.fetchall()
# #     return render_template("test.html", data=result)



from flask import Flask, render_template 

app = Flask (__name__)

@app.route('/')
def Index():
    return render_template('Index.html')

@app.route('/Map')
def Map():
    return render_template('Map.html')

if __name__ == '__main__':
    app.run(debug=True)