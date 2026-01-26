![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python)&nbsp;
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=PostgreSQL)&nbsp;

## *MY RESUME* 
Сайт для моего резюме и демонстраций Pet-проектов
<br /> <br />


# Навигация
 - [Локальная настройка проекта](#setting_up_a_project)
 - [Полезные команды](#useful_commands)
 - [Структура проекта](#project_structure)
<br /> <br />


<a name="setting_up_a_project"></a> 
## Настройка проекта
 - Выберите версию Python: 3.11
 - `pip install -r requirements.txt` - установите зависимости
<br /> <br />


<a name="useful_commands"></a> 
## Полезные команды
### Windows
#### Для Django
 - `py manage.py runserver` - Загрузить сервер
 - `python manage.py makemigrations` - Создать миграции
 - `python manage.py migrate` - Провести миграции

#### Остальное
 - `pip freeze > requirements.txt` - Сохранить список зависимостей в файл requirements.txt
 - `pip uninstall -y -r requirements.txt` - Удалить все зависимости
 - `pip install -r requirements.txt` - Установить зависимости
<br /> <br />


<a name="project_structure"></a> 
# Структура проекта
    My_resume
    │
    ├── core_site/
    │   ├── migrations/
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    │
    ├── static/
    │   ├── assets/
    │   ├── css/
    │   ├── files/
    │   └── js/
    │
    ├── templates/
    │   ├── base.html
    │   ├── index.html
    │   └── main.html
    │
    ├── website_resume/
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    │
    ├── .env
    ├── .gitignore
    ├── .python-version
    ├── manage.py
    ├── railway.json
    ├── README.md
    └── requirements.txt
<br /> <br />
