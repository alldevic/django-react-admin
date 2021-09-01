# from django.contrib import admin
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView
)
from django.urls import path, include
from django_restful_admin import admin as api_admin
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
import debug_toolbar
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth.models import Group, User

api_admin.site.register(Group)
api_admin.site.register(User)


urlpatterns = [
    # path('admin/', admin.site.urls),
    # Debug Toolbar
    path('__debug__/',
         include(debug_toolbar.urls)),
    # REST Admin
    path('api/admin/',
         api_admin.site.urls, name='admin'),

    # OpenAPI schema
    path('api/schema/',
         SpectacularAPIView.as_view(), name='schema'),

    # Optional UI:
    path('api/schema/swagger-ui/',
         SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/',
         SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # JWT
    path('api/token/',
         TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),

    # DRF Token Auth
    path("api/token-auth/",
         ObtainAuthToken.as_view(), name='token_auth'),
]
