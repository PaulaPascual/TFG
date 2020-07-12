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

        img = load_img(f'media/{name}')
        # prediction = model.predict(…)

        # Guardamos la imagen

        result_image_name = ''

        return HttpResponse(json.dumps({'result_image': fs.url(name=result_image_name)}), content_type='application/json')
    return render(request, 'upload.html', context)
