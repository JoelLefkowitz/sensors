from randutils import random_string

from .base import *  # noqa

DEBUG = True
SECRET_KEY = random_string(20)
ALLOWED_HOSTS = ["*"]

INSTALLED_APPS += [
    "silk",
    "drf_yasg",
    "debug_toolbar",
    "django_extensions",
]

GRAPH_MODELS = {
    "all_applications": True,
    "group_models": True,
}

MIDDLEWARE += [
    "silk.middleware.SilkyMiddleware",
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

INTERNAL_IPS = [
    "127.0.0.1",
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "sqlite3",
    }
}
