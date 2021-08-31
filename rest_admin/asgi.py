import os

from django.core.asgi import get_asgi_application
from django.contrib.staticfiles.handlers import ASGIStaticFilesHandler

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rest_admin.settings')

application = ASGIStaticFilesHandler(get_asgi_application())
