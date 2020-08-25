from django.shortcuts import render

# Create your views here.
from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse
from .models import Whatsapp


@twilio_view
def whatsapp(request):
    
    msg = request.POST.get('Body','')
    phone_no = request.POST.get('From','')
    phone_no  = phone_no[9:]
    reply = "Hello %s, Your Question has been Recieved! We shall get Back to you" % (phone_no)
    resp = MessagingResponse()
        
    # save in db
    b = Whatsapp(title=msg , phone=phone_no)
    b.save()
    
    print('%s saved' % (phone_no,))

    # Create reply
    msg = msg.lower()

    resp.message(reply)
    
    return resp

def normal(request):
    
    return render(request, 'messenging/sms.html')
