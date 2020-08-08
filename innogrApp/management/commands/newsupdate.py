from django.core.management.base import BaseCommand
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import requests
import json
from innogrApp.models import NewsArticle
class Command(BaseCommand):
    help = "collect news articles"
    # define logic of command
    def handle(self, *args, **options):
        # collect google news articles
        news_url = "https://news.google.com/rss?hl=en-UG&gl=UG&ceid=UG:en"
        # news_url = "file:///home/hafise/Desktop/Offline%20sites/googlenewsrss.xml"
        res = requests.get(news_url)
        xml_page = res.content
        soup_page = BeautifulSoup(xml_page, "xml")
        news_list = soup_page.findAll("item")
        for news in news_list:
            newstitle = news.title.text
            newslink = news.link.text
            newspubDate = news.pubDate.text
            # check if link in db
            try:
                # save in db
                NewsArticle.objects.create(
                    title=newstitle,
                    link=newslink,
                    newsdate=newspubDate
                )
                print('%s added' % (newstitle,))
            except:
                print('%s already exists' % (newstitle,))
        self.stdout.write( 'Current News Pulling job complete' )
