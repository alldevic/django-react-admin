from django.views.decorators.clickjacking import xframe_options_exempt
from django.http.response import HttpResponse


@xframe_options_exempt
def debug(request):
    return HttpResponse("<body></body>")
