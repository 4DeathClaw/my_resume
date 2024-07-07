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
    ├── api/
    │   ├── app.py
    │   └── middlewares.py
    │
    ├── data_processing/
    │   ├── database.py
    │   ├── degree_info.py
    │   ├── get_applicants.py
    │   ├── get_data.py
    │   └── push_data.py
    │
    ├── parsing/
    │   ├── parsers/
    │   │   ├── bachelors_degree.py
    │   │   ├── master_degree.py
    │   │   └── specialty_degree.py
    │   ├── pom/ 
    │   │   ├── base_page.py
    │   │   ├── locators.py
    │   │   └── page_object.py
    │   └── temporary_files/
    │
    ├── .gitignore
    ├── main.py
    ├── make_table.py
    ├── README.md
    ├── requirements.txt
    ├── schaduler.py
    └── settings.py
<br /> <br />
