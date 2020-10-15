from django.db import models
from django.contrib.auth.models import User as MainUser


class Task(models.Model):
    title = models.CharField(max_length=50)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class User(MainUser):
    ''' 
        first_name
        last_name
        email
        password
    '''

    date_of_birth = models.DateField(blank=False)


