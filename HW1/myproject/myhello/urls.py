from django.urls import path
from . import views
#urlpatterns = [
 #   path('', views.myIndex, name='index'),
#]
urlpatterns = [
   path('courselist',views.courselist,name='courselist'),
   path('addcourse',views.addcourse,name='addcourse'),
]
