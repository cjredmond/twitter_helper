from django.shortcuts import render
from django.views.generic import TemplateView
from textblob import TextBlob
import re
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

def clean_tweet(tweet):
        return ' '.join(re.sub("(@[A-Za-z0-9]+|([^0-9A-Za-z \t])|(\w+:\/\/\S+))", " ", tweet).split())

@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'GET':
        tweet = request.GET['tweet']
        analysis = TextBlob(clean_tweet(tweet))
        return Response({"message": 'GET',
                         "tweet": tweet,
                         "backwards": tweet[::-1],
                         "rating": round(analysis.sentiment.polarity,2),
                         "subjectivity": round(analysis.sentiment.subjectivity,2)})


    return Response({"message": "NOT A POST", "tweet": request.GET['tweet']})




class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self):
        context = super().get_context_data()
        context['rating'] = 'None'
        if self.request.GET:
            data = self.request.GET
            tweet = data['tweetreact']
            print(tweet)
            analysis = TextBlob(clean_tweet(tweet))
            context['rating'] = analysis.sentiment.polarity
        return context

# class TestAPIView(viewsets.ViewSet):
#     serializer_class = serializers.TaskSerializer
#
#     def list(self, request):
#         serialzer = serializers.TaskSerializer(
#         instance=tasks.values(), many=True)
#         return Response(serializer.data)
