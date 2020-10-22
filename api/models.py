from django.db import models
from django.contrib.auth.models import User as MainUser


class User(MainUser):
    ''' 
        - groups
        - username
        - first_name
        - last_name
        - email
        - password

        - date_of_birth
        - city
        - specialization
    '''
    date_of_birth   = models.DateField(blank=False)
    city            = models.CharField(max_length=200, blank=True)
    specialization  = models.CharField(max_length=200, blank=True)


