![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python)&nbsp;
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)&nbsp;
![CSS3](https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=css3)&nbsp;
![Bootstrap](https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap)&nbsp;

# Лендинг - 4DeathClaw

Одностраничный лендинг Python Backend Developer с опытом работы больше 6 лет.

**Тема:** Developer Bootstrap Template (Dark Mode) от [Xiaoying Riley](https://github.com/xriley/developer-theme)

<br /> <br />


# Навигация
 - [Запуск статического сайта](#static_site)
 - [Локальная настройка Django (legacy)](#setting_up_a_project)
 - [Структура проекта](#project_structure)
<br /> <br />


<a name="static_site"></a>
## Запуск статического сайта

### Способ 1: Python HTTP Server (рекомендуется)

```bash
cd static_site
python3 -m http.server 8000
```

Откройте в браузере: `http://localhost:8000`

### Способ 2: VS Code Live Server

1. Установите расширение "Live Server" в VS Code
2. Откройте файл `static_site/index.html`
3. Нажмите "Go Live" в правом нижнем углу

### Возможности лендинга

- **Современная тема для разработчиков** - профессиональный темный дизайн
- **Dark Mode по умолчанию** - возможность переключения на светлую тему
- **Responsive дизайн** - адаптируется под любые устройства
- **Bootstrap 5** - современный фреймворк
- **Секции:**
  - Обо мне - история и мотивация
  - Ключевые проекты - топ-3 проекта с детальным описанием
  - Другие проекты - список остальных проектов
  - Опыт работы - больше 6 лет с детальным описанием позиций
  - Технологии - skill bars с уровнями владения
  - Образование и языки

<br /> <br />


<a name="setting_up_a_project"></a>
## Настройка Django (legacy)
 - Выберите версию Python: 3.11
 - `pip install -r requirements.txt` - установите зависимости
 - `py manage.py runserver` - Загрузить Django сервер
<br /> <br />


<a name="project_structure"></a>
# Структура проекта
    My_resume
    │
    ├── static_site/              # Новый статический лендинг
    │   ├── index.html
    │   ├── css/
    │   │   └── styles.css
    │   ├── js/
    │   │   └── scripts.js
    │   ├── assets/
    │   │   └── img/
    │   └── files/
    │
    ├── core_site/                # Django (legacy)
    │   ├── migrations/
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    │
    ├── static/                   # Django static files
    │   ├── assets/
    │   ├── css/
    │   ├── files/
    │   └── js/
    │
    ├── templates/                # Django templates
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
    ├── .gitignore
    ├── manage.py
    ├── README.md
    └── requirements.txt
<br /> <br />

## Контакты

- Telegram: [@anastasia_belish](https://t.me/anastasia_belish)
- Email: anastasia.rem.work@yandex.ru
- Телефон: +7 (982) 714-82-32
