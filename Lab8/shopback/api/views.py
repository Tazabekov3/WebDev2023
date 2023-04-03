from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_details(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
    }
    return JsonResponse(data)
    #return JsonResponse({'pr_det': 'is_working'})

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_details(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        'name': category.name,
    }
    return JsonResponse(data)
    #return JsonResponse({'cat_det': 'is_working'})

def products_by_category(request, id):
    return JsonResponse({'pr_by_cat': 'is_working'})