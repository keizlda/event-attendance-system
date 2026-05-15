FROM python:3.11

WORKDIR /app

COPY . .

RUN pip install django djangorestframework djoser djangorestframework-simplejwt django-cors-headers

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]