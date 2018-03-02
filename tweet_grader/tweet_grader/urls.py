from django.contrib import admin
from django.urls import path
from playground.views import IndexView, hello_world

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name='index_view'),
    path('test/', hello_world, name='hello_world')
]
