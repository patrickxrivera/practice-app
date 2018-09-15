from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../client',
            template_folder='../client/public')


@app.route('/hello')
def hello():
    return jsonify({'hello': 'hi'})


if __name__ == '__main__':
    CORS(app)
    app.run()
