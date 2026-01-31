// Translations
const translations = {
    ru: {
        // Header
        darkMode: "Dark Mode",
        language: "English",
        contact: "Связаться",

        // Profile
        position: "Python Backend Developer | Опыт больше 6 лет",

        // Sections
        about: "Обо мне",
        keyProjects: "Ключевые проекты",
        otherProjects: "Другие проекты",
        experience: "Опыт работы",
        technologies: "Технологии",
        education: "Образование",
        languages: "Языки",

        // About section
        aboutText1: "<strong>Python Backend Developer</strong> с опытом работы <strong>больше 6 лет</strong>, специализирующийся на высоконагруженных микросервисах, e-commerce решениях и парсинге данных.",
        aboutText2: "Перед поступлением в университет начала интересоваться программированием — направлением разработки. Поскольку backend можно вполне изучить самостоятельно, я занималась изучением этого направления в областях AQA, Web и парсинга. Также меня интересует направление ИИ, так как будущее за ними. Увлекаюсь темой алгоритмической торговли — хочу в будущем написать нейросеть, анализирующую рынок.",
        aboutText3: "За время работы занималась проектированием backend-архитектуры с нуля, оптимизацией производительности API, автоматизацией CI/CD процессов и построением систем мониторинга. Обожаю улучшать рабочие процессы в команде и помогать младшим сотрудникам с решением сложных вопросов.",

        // Key Projects
        project1Title: "SaaS-платформа парсинга и мониторинга данных",
        project1Desc1: "Разработка и поддержка SaaS-платформы для парсинга и мониторинга данных из <strong>80+ внешних источников</strong> (маркетплейсы, сайты поставщиков). Платформа используется несколькими внутренними командами (аналитика, BI, отдел парсинга) как единая точка управления и наблюдения за сбором данных.",
        project1Role: "<strong>Моя роль:</strong> Backend-архитектура, разработка и поддержка микросервисов, работа с production, code review.",
        project1Tech: "<strong>Технологии:</strong> Django, FastAPI, PostgreSQL, ClickHouse, Kafka, RabbitMQ, Celery, CI/CD",
        project1Results: "<strong>Результаты:</strong>",
        project1Result1: "Ускорение API на 35%",
        project1Result2: "Стабильность сбора данных ~95%",
        project1Result3: "Платформа используется 3 командами",

        project2Title: "Система мониторинга и тестирования парсеров",
        project2Desc: "Разработка сервиса для автоматического тестирования парсеров с уведомлениями через Telegram и push. Система сразу подсвечивает проблемные места в коде.",
        project2Result: "<strong>Результат:</strong> Сократила время восстановления (MTTR) с недели до 1-2 дней.",
        project2Stack: "<strong>Стек:</strong> Python, Django, pytest, Telegram Bot API, CI/CD",

        project3Title: "Система сбора данных (парсинг 80+ источников)",
        project3Desc: "Проектирование и реализация системы парсинга данных о ценах и товарных остатках. Использование асинхронных воркеров, системы ротации прокси, семафоров и rate limiting.",
        project3Stack: "<strong>Стек:</strong> Python, Selenium, Playwright, BeautifulSoup4, Camoufox, Botasaurus, asyncio",

        // Other projects
        otherProject1Title: "Сервис контроля качества данных",
        otherProject1Desc: "Разработка системы автоматической валидации данных из сотен источников. Django + DRF + Celery для обработки больших объемов данных с 20+ столбцами характеристик товаров.",

        otherProject2Title: "Платформа аналитических дашбордов",
        otherProject2Desc: "Создание платформы для визуализации и анализа данных. Django + FastAPI + PostgreSQL для обработки и агрегации больших объемов данных с интеграцией BI-систем.",

        otherProject3Title: "Telegram-бот для студентов",
        otherProject3Desc: "Разработка бота на aiogram с Django webapp для напоминаний о дедлайнах и событиях. Интеграция с университетскими системами (Moodle API).",

        otherProject4Title: "Платформа для квизов и презентаций",
        otherProject4Desc: "Веб-приложение на Django для проведения интерактивных квизов. Преподаватели загружают презентации и создают квизы на основе содержимого для обучения.",

        otherProject5Title: "API для интеграции между отделами",
        otherProject5Desc: "Проектирование и разработка с нуля API на FastAPI для обмена данными между отделами организации. Руководство командой из 2 разработчиков. Система аутентификации и управления правами доступа.",

        // Experience
        totalExp: "<strong>Общий опыт:</strong> больше 6 лет в коммерческой разработке",

        exp1Title: "Python Backend Developer - <span class='place'>E-Commerce</span> <span class='year'>(~2.5 года)</span>",
        exp1Desc: "Работа с высоконагруженными микросервисами и SaaS-платформой для парсинга данных из 80+ источников.",
        exp1Duties: "<strong>Ключевые обязанности:</strong>",
        exp1Duty1: "Разработка и поддержка высоконагруженных микросервисов (12+ сервисов)",
        exp1Duty2: "Проектирование backend-архитектуры и микросервисной экосистемы",
        exp1Duty3: "Работа с асинхронным взаимодействием через Kafka и RabbitMQ",
        exp1Duty4: "Внедрение CI/CD для автоматизации деплоев",
        exp1Duty5: "Code review и менторинг младших разработчиков",
        exp1Achievements: "<strong>Достижения:</strong> Ускорение API на 35%, снижение MTTR в 2 раза, разработка асинхронного фреймворка",

        exp2Title: "Python Backend Developer - <span class='place'>Retail</span> <span class='year'>(~1.5 года)</span>",
        exp2Desc: "Работа в крупной ритейл-компании с фокусом на сбор и обработку данных из сотен источников.",
        exp2Duties: "<strong>Обязанности:</strong> Разработка сервисов парсинга и ETL, создание API, проектирование БД, реализация очередей задач, оптимизация асинхронных сервисов.",
        exp2Achievements: "<strong>Достижения:</strong> Реализовала систему сбора данных из 70+ источников, оптимизировала время обработки на 40%",

        exp3Title: "Python Backend Developer - <span class='place'>Education</span> <span class='year'>(~2 года)</span>",
        exp3Desc: "Начало карьеры в университетском центре аналитики. Получила первую практику создания архитектуры систем с нуля.",
        exp3Duties: "<strong>Обязанности:</strong> Разработка на Django и FastAPI, интеграция с внутренними системами, проектирование БД, автоматизация ETL-процессов.",
        exp3Achievements: "<strong>Достижения:</strong> Создала ETL-сервис для 5+ систем, повысила покрытие тестами с 40% до 80%, спроектировала API для обмена данными",

        // Skills
        skillsIntro: "Основной стек технологий, с которыми работаю на постоянной основе:",
        expertLevel: "Expert",
        advancedLevel: "Advanced",

        // Education
        educationTitle: "Прикладная информатика",
        educationSpec: "Алгоритмы искусственного интеллекта <span class='year'>(2024)</span>",
        educationUni: "Уральский федеральный университет",

        // Languages
        russian: "Русский:",
        russianLevel: "Родной",
        english: "Английский:",
        englishLevel: "B2 - Средне-продвинутый",

        // Contact
        location: "Местоположение:",
        locationValue: "Москва, Россия",
        email: "Email:",
        telegram: "Telegram:",
        phone: "Телефон:",

        // Footer
        footerText: "Designed by <a href='https://themes.3rdwavemedia.com' target='_blank'>Xiaoying Riley</a> | Adapted by 4DeathClaw"
    },
    en: {
        // Header
        darkMode: "Dark Mode",
        language: "Русский",
        contact: "Contact",

        // Profile
        position: "Python Backend Developer | 6+ years of experience",

        // Sections
        about: "About Me",
        keyProjects: "Key Projects",
        otherProjects: "Other Projects",
        experience: "Work Experience",
        technologies: "Technologies",
        education: "Education",
        languages: "Languages",

        // About section
        aboutText1: "<strong>Python Backend Developer</strong> with <strong>6+ years of experience</strong>, specializing in high-load microservices, e-commerce solutions, and web scraping.",
        aboutText2: "Before entering university, I became interested in programming and software development. Since backend development can be self-taught, I focused on studying AQA, Web, and scraping. I'm also interested in AI, as it represents the future. I'm passionate about algorithmic trading and want to develop a neural network for market analysis in the future.",
        aboutText3: "Throughout my career, I've been involved in designing backend architecture from scratch, optimizing API performance, automating CI/CD processes, and building monitoring systems. I love improving team workflows and helping junior developers solve complex problems.",

        // Key Projects
        project1Title: "SaaS Platform for Data Parsing and Monitoring",
        project1Desc1: "Development and maintenance of a SaaS platform for parsing and monitoring data from <strong>80+ external sources</strong> (marketplaces, supplier websites). The platform is used by several internal teams (analytics, BI, parsing department) as a single point for managing and monitoring data collection.",
        project1Role: "<strong>My role:</strong> Backend architecture, microservices development and maintenance, production work, code review.",
        project1Tech: "<strong>Technologies:</strong> Django, FastAPI, PostgreSQL, ClickHouse, Kafka, RabbitMQ, Celery, CI/CD",
        project1Results: "<strong>Results:</strong>",
        project1Result1: "35% API performance improvement",
        project1Result2: "~95% data collection stability",
        project1Result3: "Platform used by 3 teams",

        project2Title: "Parser Monitoring and Testing System",
        project2Desc: "Development of a service for automatic parser testing with Telegram and push notifications. The system immediately highlights problematic code areas.",
        project2Result: "<strong>Result:</strong> Reduced Mean Time To Recovery (MTTR) from a week to 1-2 days.",
        project2Stack: "<strong>Stack:</strong> Python, Django, pytest, Telegram Bot API, CI/CD",

        project3Title: "Data Collection System (parsing 80+ sources)",
        project3Desc: "Design and implementation of a data parsing system for prices and inventory. Using async workers, proxy rotation system, semaphores, and rate limiting.",
        project3Stack: "<strong>Stack:</strong> Python, Selenium, Playwright, BeautifulSoup4, Camoufox, Botasaurus, asyncio",

        // Other projects
        otherProject1Title: "Data Quality Control Service",
        otherProject1Desc: "Development of an automatic data validation system from hundreds of sources. Django + DRF + Celery for processing large volumes of data with 20+ product characteristic columns.",

        otherProject2Title: "Analytics Dashboard Platform",
        otherProject2Desc: "Creation of a platform for data visualization and analysis. Django + FastAPI + PostgreSQL for processing and aggregating large volumes of data with BI system integration.",

        otherProject3Title: "Telegram Bot for Students",
        otherProject3Desc: "Development of a bot using aiogram with Django webapp for deadline and event reminders. Integration with university systems (Moodle API).",

        otherProject4Title: "Quiz and Presentation Platform",
        otherProject4Desc: "Web application on Django for conducting interactive quizzes. Teachers upload presentations and create quizzes based on content for educational purposes.",

        otherProject5Title: "API for Inter-Department Integration",
        otherProject5Desc: "Design and development of FastAPI from scratch for data exchange between organization departments. Team leadership of 2 developers. Authentication system and access rights management.",

        // Experience
        totalExp: "<strong>Total experience:</strong> 6+ years in commercial development",

        exp1Title: "Python Backend Developer - <span class='place'>E-Commerce</span> <span class='year'>(~2.5 years)</span>",
        exp1Desc: "Working with high-load microservices and SaaS platform for parsing data from 80+ sources.",
        exp1Duties: "<strong>Key responsibilities:</strong>",
        exp1Duty1: "Development and maintenance of high-load microservices (12+ services)",
        exp1Duty2: "Backend architecture and microservice ecosystem design",
        exp1Duty3: "Working with async communication via Kafka and RabbitMQ",
        exp1Duty4: "CI/CD implementation for deployment automation",
        exp1Duty5: "Code review and mentoring junior developers",
        exp1Achievements: "<strong>Achievements:</strong> 35% API speedup, 2x MTTR reduction, async framework development",

        exp2Title: "Python Backend Developer - <span class='place'>Retail</span> <span class='year'>(~1.5 years)</span>",
        exp2Desc: "Working in a large retail company focused on collecting and processing data from hundreds of sources.",
        exp2Duties: "<strong>Responsibilities:</strong> Development of parsing and ETL services, API creation, database design, task queue implementation, async services optimization.",
        exp2Achievements: "<strong>Achievements:</strong> Implemented data collection system from 70+ sources, optimized processing time by 40%",

        exp3Title: "Python Backend Developer - <span class='place'>Education</span> <span class='year'>(~2 years)</span>",
        exp3Desc: "Career start at university analytics center. First experience creating system architecture from scratch.",
        exp3Duties: "<strong>Responsibilities:</strong> Django and FastAPI development, internal system integration, database design, ETL process automation.",
        exp3Achievements: "<strong>Achievements:</strong> Created ETL service for 5+ systems, increased test coverage from 40% to 80%, designed API for data exchange",

        // Skills
        skillsIntro: "Main technology stack I work with on a regular basis:",
        expertLevel: "Expert",
        advancedLevel: "Advanced",

        // Education
        educationTitle: "Applied Computer Science",
        educationSpec: "Artificial Intelligence Algorithms <span class='year'>(2024)</span>",
        educationUni: "Ural Federal University",

        // Languages
        russian: "Russian:",
        russianLevel: "Native",
        english: "English:",
        englishLevel: "B2 - Upper-Intermediate",

        // Contact
        location: "Location:",
        locationValue: "Moscow, Russia",
        email: "Email:",
        telegram: "Telegram:",
        phone: "Phone:",

        // Footer
        footerText: "Designed by <a href='https://themes.3rdwavemedia.com' target='_blank'>Xiaoying Riley</a> | Adapted by 4DeathClaw"
    }
};

// Current language
let currentLang = 'ru';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check saved preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru';
    const langSwitch = document.getElementById('langSwitch');

    // Set initial state
    if (savedLang === 'en') {
        langSwitch.checked = true;
        changeLanguage('en');
    } else {
        langSwitch.checked = false;
        changeLanguage('ru');
    }

    // Add event listener
    langSwitch.addEventListener('change', function() {
        if (this.checked) {
            changeLanguage('en');
        } else {
            changeLanguage('ru');
        }
    });
});
