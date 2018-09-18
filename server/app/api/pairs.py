from flask_restful import Resource, reqparse
import random

THIS = ['Facebook Marketplace', 'Spotify', 'Onnit',
        'Database Abstraction Layer', 'Mapreduce Query']
THAT = ['bald people', 'nootropics', 'ballerinas', 'sumo wrestlers', 'hungarians']


class Pairs(Resource):
    parser = reqparse.RequestParser()

    def get(self):
        return {'this': self._get_word(THIS), 'that': self._get_word(THAT)}

    @staticmethod
    def _get_word(words):
        return random.choice(words)
