from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_exempt


@xframe_options_exempt
def debug(request):
    return render(request, 'debug.html')
