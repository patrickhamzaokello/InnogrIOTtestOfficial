from django.shortcuts import render

# Create your views here.
from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse
from .models import Whatsapp

@twilio_view
def whatsapp(request):
    
    msg = request.POST.get('Body','')
    phone_no = request.POST.get('From','')
    reply = "Hello %s, how are you today?" % (phone_no)
    resp = MessagingResponse()
    
    try:
        # save in db
        Whatsapp.objects.create(
            title=msg,
            phone=phone_no
        )
        print('%s saved' % (phone_no,))
    except:
        print('%s already exists' % (phone_no,))

    # Create reply
    msg = msg.lower()

    resp.message(reply)
    
    return resp

def normal(request):
    
    return render(request, 'messenging/sms.html')
