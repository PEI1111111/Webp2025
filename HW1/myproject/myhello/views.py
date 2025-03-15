#from redjango.http import HttpResponse
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.views import APIView


# Create your views here.
# def myIndex(request):
#    my_name = request.GET.get('name',"CGU")
#     return HttpResponse("Hello"+my_name)
# class HelloAPiView(APIView):
#     def get(self, request):
#         my_name = request.GET.get('name', None)
#         if my_name:
#             retValue = {}
#             retValue['date'] = "Hello" + my_name
#             return Response(retValue,status=status.HTTP_200_OK)
#         else:
#             return Response(
#                 {"res":"parameter: name is None"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )

from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Course
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Course

logger = logging.getLogger('django')

@api_view(['GET'])
def courselist(request):
    if request.method == 'GET':
        courses = Course.objects.all()
        course_list = list(courses.values())
    return JsonResponse(course_list, safe=False)

@api_view(['POST'])
def addcourse(request):
    department = request.data.get('Department', '')
    course_title = request.data.get('CourseTitle', '')
    instructor = request.data.get('Instructor', '')

    if not department or not course_title or not instructor:
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    Course.objects.create(Department=department, CourseTitle=course_title, Instructor=instructor)
    return Response({"message": "Course added successfully"}, status=status.HTTP_201_CREATED)
