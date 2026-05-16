# WSGI entrypoint for gunicorn / Render
# Export the Flask application object expected by WSGI servers.
from app import app as application
