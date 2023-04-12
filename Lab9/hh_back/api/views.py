from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy

def company_list(request):
    products = Company.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def company_details(request, id):
    product = get_object_or_404(Company, id=id)
    data = {
        'name': product.name,
        'description': product.description,
        'city': product.city,
        'address': product.address,
    }
    return JsonResponse(data)
    #return JsonResponse({'pr_det': 'is_working'})

def vacancy_list(request):
    categories = Vacancy.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def vacancy_details(request, id):
    category = get_object_or_404(Vacancy, id=id)
    data = {
        'name': category.name,
        'description': category.description,
        'salary': category.salary,
        'company': category.company
    }
    return JsonResponse(data)
    #return JsonResponse({'cat_det': 'is_working'})

def vacancies_by_company(request, id):
    return JsonResponse({'vac_by_com': 'is_working'})

def vacancies_top_ten(request):
    return JsonResponse({'vacs_top_ten': 'is_working'})