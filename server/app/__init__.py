from flask_cors import CORS
from flask import Flask
from app.api import init_api


def create_app():
    app = Flask(__name__)

    CORS(app)

    init_api(app)

    # shell context for flask cli
    @app.shell_context_processor
    def ctx():
        return {'app': app, 'db': db}

    return app
