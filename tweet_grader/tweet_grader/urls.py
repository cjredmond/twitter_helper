from django.contrib import admin
from django.urls import path
from playground.views import IndexView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', IndexView.as_view(), name='index_view')
]
