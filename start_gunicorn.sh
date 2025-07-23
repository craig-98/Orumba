#!/bin/bash
# Start Gunicorn with 4 workers binding to localhost:8000
gunicorn -w 4 -b 127.0.0.1:8000 wsgi:app
