from .pairs import Pairs
from flask_restful import Api


def init_api(app):
    api = Api(app)
    api.add_resource(Pairs, '/api/pair')
