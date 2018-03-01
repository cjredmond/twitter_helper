from django.shortcuts import render
from django.views.generic import TemplateView
from textblob import TextBlob
import re

def clean_tweet(tweet):
        return ' '.join(re.sub("(@[A-Za-z0-9]+|([^0-9A-Za-z \t])|(\w+:\/\/\S+))", " ", tweet).split())

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
