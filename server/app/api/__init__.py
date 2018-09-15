from .test import Test
from flask_restful import Api


def init_api(app):
    api = Api(app, prefix='/api')

    api.add_resource(Test, '/')
