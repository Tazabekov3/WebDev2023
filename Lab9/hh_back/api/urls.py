from django.urls import path, re_path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_details),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_details),
    path('companies/<int:id>/vacancies/', views.vacancies_by_company),
    path('vacancies/top_ten/', views.vacancies_top_ten)
]