from .index import index


def add_views(app):
    app.register_blueprint(index)