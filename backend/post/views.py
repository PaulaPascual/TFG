from django.shortcuts import render
from django.core.files.storage import FileSystemStorage

# Create your views here.

def upload(request):
    context = {}
    if request.method == 'POST':
        f = request.FILES['file']
        fs = FileSystemStorage()
        name = fs.save(f.name, f)
        context['url'] = fs.url(name)
        style = int(request.POST.get('style', 0))

    return render(request, 'upload.html', context)
