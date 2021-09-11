from django.contrib import admin
from drf_spectacular.views import SpectacularJSONAPIView

from django.urls import path, include
from django_restful_admin import admin as api_admin
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
import debug_toolbar

from django.contrib.auth.models import Group, User, Permission
from django.contrib.admin.models import LogEntry
from utils.views import debug

api_admin.site.register(Group)
api_admin.site.register(User)
api_admin.site.register(Permission)
api_admin.site.register(LogEntry)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Debug Toolbar
    path('__debug__/', include(debug_toolbar.urls)),
    path('debug/', debug, name='debug'),

    # REST Admin
    path('api/admin/', api_admin.site.urls, name='admin'),

    # OpenAPI schema
    path('api/schema.json', SpectacularJSONAPIView.as_view(), name='schema'),

    # JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
