from django.shortcuts import render
from django.core.files.storage import FileSystemStorage

# Create your views here.

def upload(request):
    if request.method ==  'POST':
        upload_file = request.FILES['document']
        print(upload_file.name)
        print(upload_file.size)
        fs = FileSystemStorage()
        fs.save(upload_file.name, upload_file)
    return render(request, 'upload.html')
