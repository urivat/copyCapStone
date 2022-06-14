from django.urls import path
from word import views

urlpatterns = [
    path('all/', views.get_all_words),
    path('' , views.user_words),
    path('<int:pk>/update/', views.get_word_details),
    path('<int:pk>/' , views.get_word_details),
]