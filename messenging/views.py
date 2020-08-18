from django.shortcuts import render

# Create your views here.
from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse

@twilio_view
def sms(request):
    
    return render(request, 'messenging/sms.html')

@twilio_view
def whatsapp(request):
    msg = request.POST.get('Body','')
    phone_no = request.POST.get('From','')
    
    reply = "Hello %s, how are you today?" % (phone_no)

    resp = MessagingResponse()

    # Create reply

    msg = msg.lower()

    resp.message(reply)
    return resp
