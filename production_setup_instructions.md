# Production Setup Instructions for Flask Beautiful Website

## Prerequisites
- A GitHub repository containing your project code.
- A Render account (https://render.com) with access to your GitHub repo.
- Ensure your project has the following structure:
  - app/ (Flask app package)
  - instance/ (configuration and data files)
  - requirements.txt
  - wsgi.py
  - start_gunicorn.sh
  - render.yaml

## Steps to Deploy on Render

1. **Connect GitHub Repository**
   - Log in to Render.
   - Click "New" > "Web Service".
   - Connect your GitHub account and select your repository.

2. **Configure Service**
   - Name: `flask-beautiful-website` (or your preferred name)
   - Environment: Python
   - Branch: `main` (or your deployment branch)
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn -w 4 -b 0.0.0.0:10000 wsgi:app`
   - Environment Variables:
     - `SECRET_KEY`: Set a secure secret key for production.

3. **Deploy**
   - Click "Create Web Service".
   - Render will build and deploy your app automatically.
   - Monitor the build logs for any errors.

4. **Access Your App**
   - Once deployed, Render provides a URL to access your app.
   - Use this URL to test your deployed Flask app.

## Additional Tips

- Use the `render.yaml` file for Infrastructure as Code to automate deployments.
- Keep sensitive data like `SECRET_KEY` out of your codebase; use environment variables.
- For database or persistent storage, consider Render's managed databases or external services.
- Monitor logs and metrics via Render dashboard.

## Troubleshooting

- If deployment fails, check build logs for missing dependencies or errors.
- Ensure your `requirements.txt` is up to date.
- Verify that your app listens on the port provided by Render (default 10000).
- Use `gunicorn` as the production server, not Flask's built-in server.

## References

- [Render Flask Deployment Docs](https://render.com/docs/deploy-flask)
- [Gunicorn Documentation](https://gunicorn.org/)
- [Flask Deployment Options](https://flask.palletsprojects.com/en/latest/deploying/)
