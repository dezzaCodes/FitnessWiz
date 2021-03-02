from flask import Flask, request, json, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        request_data = json.loads(request.data)
        workouts = request_data['content']
        print(workouts)
    return {
        'name': 'hellow world'
    }


if __name__ == '__main__':
    app.run(debug=True)