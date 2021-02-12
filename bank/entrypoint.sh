#!/bin/bash

export DJANGO_SETTINGS_MODULE="bank.settings.prod"
python manage.py migrate
python manage.py loaddata fixtures/parsed.json
gunicorn bank.wsgi -b :8000
