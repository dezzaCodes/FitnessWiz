from flask import Flask, request, json, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQL_ALCHEMY_DATABASE_URI'] = 'postgressql://dezza:password@localhost/exercises'

# class Exercise(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = 
#     muscles = 
#     sets = 
#     reps = 
#     weights = 

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        request_data = json.loads(request.data)
        workouts = request_data['content']
        print(workouts)
    return {
        'name': 'hellow world'
    }

@app.route('/exercise', methods=['GET', 'POST'])
def exercise():
    if request.method == 'POST':
        request_data = json.loads(request.data)
        workouts = request_data['content']
        print(workouts)
    return {
        'name': 'hellow world'
    }


if __name__ == '__main__':
    app.run(debug=True)