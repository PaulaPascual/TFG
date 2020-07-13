from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from evaluate import process_image
import json

# Create your views here.

def upload(request):
    context = {}
    if request.method == 'POST':
        f = request.FILES['file']
        fs = FileSystemStorage()
        name = fs.save(f.name, f)
        context['url'] = fs.url(name)
        style = int(request.POST.get('style', 0))

        model = 'checkpoint_ola'
        if style == 2:
            model = 'checkpoint_van'
        elif style == 3:
            model = 'checkpoint_guernica'

        out_name = process_image(f'media/{name}', model)
        return HttpResponse(json.dumps({'result_image': out_name}), content_type='application/json')

    return render(request, 'upload.html', context)
