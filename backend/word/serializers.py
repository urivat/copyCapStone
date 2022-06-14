from rest_framework import serializers
from .models import Word

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ['id' ,'name', 'definition' , 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)