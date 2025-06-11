  // Translations
  const translations = {
    ru: {
        nav: {
            home: "Главная",
            services: "Услуги",
            pricing: "Цены",
            testimonials: "Как мы работаем",
            contacts: "Контакты"
        },
        hero: {
            title: "Профессиональный ремонт холодильников и бытовой техники",
            description: "Мы предлагаем качественный ремонт любой сложности с гарантией. Наши мастера приедут к вам в течение 1 часа и починят вашу технику быстро и надежно.",
            callMaster: "Вызвать мастера",
            call: "Позвонить",
            stats: {
                experience: "Лет опыта",
                clients: "Довольных клиентов",
                guarantee: "Гарантия качества"
            }
        },
        services: {
            title: "Наши услуги",
            desc: "Ремонтируем любую бытовую технику быстро, качественно и с гарантией!",
            cards: [
                {
                    title: "Ремонт холодильников",
                    desc: "Профессиональный ремонт любых моделей холодильников на дому.",
                    img: "https://cdn-icons-png.flaticon.com/512/2740/2740948.png"
                },
                {
                    title: "Ремонт стиральных машин",
                    desc: "Быстро устраним любые поломки стиральных машин всех брендов.",
                    img: "https://static.vecteezy.com/system/resources/thumbnails/045/831/963/small_2x/washing-machine-isolated-on-transparent-background-png.png"
                },
                {
                    title: "Ремонт посудомоечных машин",
                    desc: "Качественный ремонт посудомоечных машин с гарантией результата.",
                    img: "https://static.vecteezy.com/system/resources/previews/048/759/744/non_2x/dishwasher-dish-storage-on-transparent-background-png.png"
                },
                {
                    title: "Ремонт кондиционеров",
                    desc: "Установка и ремонт кондиционеров любых марок.",
                    img: "https://static.vecteezy.com/system/resources/previews/012/909/758/non_2x/air-conditioner-appliance-free-png.png"
                }
            ]
        },
        advantages: {
            title: "Наши преимущества",
            desc: "Почему выбирают нас",
            cards: [
                {
                    title: "Быстрый выезд",
                    desc: "Мастер приедет к вам в течение 1 часа после заявки.",
                    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                },
                {
                    title: "Опытные мастера",
                    desc: "Только квалифицированные специалисты с опытом от 5 лет.",
                    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                },
                {
                    title: "Оригинальные запчасти",
                    desc: "Используем только оригинальные и проверенные комплектующие.",
                    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
                },
                {
                    title: "Гарантия на работы",
                    desc: "Официальная гарантия на все виды работ и услуги.",
                    img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                }
            ]
        },
        process: {
            title: "Как мы работаем",
            desc: "Пошаговый процесс работы",
            steps: [
                {
                    title: "Оформление заявки",
                    desc: "Оставьте заявку на сайте или позвоните нам. Наш менеджер свяжется с вами в течение 15 минут."
                },
                {
                    title: "Диагностика",
                    desc: "Мастер приедет и проведет бесплатную диагностику вашей техники на месте."
                },
                {
                    title: "Ремонт",
                    desc: "После согласования стоимости мастер выполнит ремонт быстро и качественно."
                },
                {
                    title: "Гарантия",
                    desc: "Мы предоставляем гарантию до 12 месяцев на все виды работ и запчасти."
                }
            ]
        },
        pricing: {
            title: "Цены на услуги",
            desc: "Стоимость ремонта бытовой техники",
            basic: "Базовый ремонт",
            complex: "Сложный ремонт",
            popular: "Популярно",
            orderButton: "Заказать ремонт",
            cards: [
                {
                    title: "Ремонт холодильников",
                    basicPrice: "от 200.000UZS",
                    complexPrice: "от 700.000UZS",
                    features: [
                        "Выезд мастера",
                        "Диагностика",
                        "Замена комплектующих",
                        "Гарантия 6 месяцев"
                    ]
                },
                {
                    title: "Ремонт стиральных машин",
                    basicPrice: "от 150.000UZS",
                    complexPrice: "от 550.000UZS",
                    features: [
                        "Выезд мастера",
                        "Диагностика",
                        "Замена комплектующих",
                        "Гарантия 6 месяцев"
                    ]
                },
                {
                    title: "Ремонт посудомоечных машин",
                    basicPrice: "от 150.000UZS",
                    complexPrice: "от 550.000UZS",
                    features: [
                        "Выезд мастера",
                        "Диагностика",
                        "Замена комплектующих",
                        "Гарантия 12 месяцев"
                    ]
                },
                {
                    title: "Ремонт кондиционеров",
                    basicPrice: "от 250.000UZS",
                    complexPrice: "от 750.000UZS",
                    features: [
                        "Выезд мастера",
                        "Диагностика",
                        "Заправка фреоном",
                        "Гарантия 6 месяцев"
                    ]
                }
            ]
        },
        contact: {
            title: "Контакты",
            desc: "Свяжитесь с нами для получения консультации",
            phone: {
                title: "Телефон",
                number1: "+998 94 949 70 73",
                number2: "+998 94 949 70 73"
            },
            email: {
                title: "Email",
                address: "info@remontpro.uz"
            },
            address: {
                title: "Адрес",
                text: "г. Ташкент, ул. Примерная, 123"
            },
            form: {
                name: "Ваше имя",
                phone: "Номер телефона",
                message: "Сообщение",
                submit: "Отправить заявку"
            }
        }
    },
    uz: {
        nav: {
            home: "Bosh sahifa",
            services: "Xizmatlar",
            pricing: "Narxlar",
            testimonials: "Qanday ishlaymiz",
            contacts: "Aloqa"
        },
        hero: {
            title: "Sovutgichlar va maishiy texnikani professional ta'mirlash",
            description: "Biz har qanday murakkablikdagi sifatli ta'mirlashni kafolat bilan taklif qilamiz. Bizning ustalar 1 soat ichida sizga kelib, texnikangizni tez va ishonchli ta'mirlaydilar.",
            callMaster: "Ustani chaqirish",
            call: "Qo'ng'iroq qilish",
            stats: {
                experience: "Yillik tajriba",
                clients: "Mamnun mijozlar",
                guarantee: "Sifat kafolati"
            }
        },
        services: {
            title: "Bizning xizmatlarimiz",
            desc: "Har qanday maishiy texnikani tez va sifatli ta'mirlaymiz, kafolat bilan!",
            cards: [
                {
                    title: "Sovutgichlarni ta'mirlash",
                    desc: "Har qanday modeldagi sovutgichlarni professional ta'mirlash.",
                    img: "https://cdn-icons-png.flaticon.com/512/2740/2740948.png"
                },
                {
                    title: "Kir yuvish mashinalarini ta'mirlash",
                    desc: "Istalgan brenddagi kir yuvish mashinalarini tez va sifatli ta'mirlash.",
                    img: "https://static.vecteezy.com/system/resources/thumbnails/045/831/963/small_2x/washing-machine-isolated-on-transparent-background-png.png"
                },
                {
                    title: "Idish yuvish mashinalarini ta'mirlash",
                    desc: "Idish yuvish mashinalarini kafolat bilan ta'mirlash.",
                    img: "https://static.vecteezy.com/system/resources/previews/048/759/744/non_2x/dishwasher-dish-storage-on-transparent-background-png.png"
                },
                {
                    title: "Konditsionerlarni ta'mirlash",
                    desc: "Har qanday markadagi konditsionerlarni o'rnatish va ta'mirlash.",
                    img: "https://static.vecteezy.com/system/resources/previews/012/909/758/non_2x/air-conditioner-appliance-free-png.png"
                }
            ]
        },
        advantages: {
            title: "Bizning afzalliklarimiz",
            desc: "Nima uchun bizni tanlashadi",
            cards: [
                {
                    title: "Tez yetib borish",
                    desc: "Usta buyurtmadan so'ng 1 soat ichida yetib boradi.",
                    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                },
                {
                    title: "Tajribali ustalar",
                    desc: "Faqat 5 yildan ortiq tajribaga ega mutaxassislar.",
                    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                },
                {
                    title: "Original ehtiyot qismlar",
                    desc: "Faqat original va ishonchli qismlardan foydalanamiz.",
                    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
                },
                {
                    title: "Ishlarga kafolat",
                    desc: "Barcha xizmatlar va ishlar uchun rasmiy kafolat.",
                    img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                }
            ]
        },
        process: {
            title: "Biz qanday ishlaymiz",
            desc: "Ish jarayoni bosqichlari",
            steps: [
                {
                    title: "Buyurtma berish",
                    desc: "Saytda buyurtma qoldiring yoki bizga qo'ng'iroq qiling. Menejerimiz 15 daqiqa ichida siz bilan bog'lanadi."
                },
                {
                    title: "Diagnostika",
                    desc: "Usta keladi va texnikangizni bepul diagnostika qiladi."
                },
                {
                    title: "Ta'mirlash",
                    desc: "Narxni kelishib olganingizdan so'ng, usta ta'mirlashni tez va sifatli amalga oshiradi."
                },
                {
                    title: "Kafolat",
                    desc: "Barcha ishlar va ehtiyot qismlar uchun 12 oygacha kafolat beramiz."
                }
            ]
        },
        pricing: {
            title: "Xizmatlar narxi",
            desc: "Maishiy texnikani ta'mirlash narxlari",
            basic: "Oddiy ta'mirlash",
            complex: "Murakkab ta'mirlash",
            popular: "Ommabop",
            orderButton: "Ta'mirlashga buyurtma berish",
            cards: [
                {
                    title: "Sovutgichlarni ta'mirlash",
                    basicPrice: "200.000 dan",
                    complexPrice: "700.000 dan",
                    features: [
                        "Ustaning tashrifi",
                        "Diagnostika",
                        "Ehtiyot qismlarni almashtirish",
                        "6 oylik kafolat"
                    ]
                },
                {
                    title: "Kir yuvish mashinalarini ta'mirlash",
                    basicPrice: "150.000 dan",
                    complexPrice: "550.000 dan",
                    features: [
                        "Ustaning tashrifi",
                        "Diagnostika",
                        "Ehtiyot qismlarni almashtirish",
                        "6 oylik kafolat"
                    ]
                },
                {
                    title: "Idish yuvish mashinalarini ta'mirlash",
                    basicPrice: "150.000 dan",
                    complexPrice: "550.000 dan",
                    features: [
                        "Ustaning tashrifi",
                        "Diagnostika",
                        "Ehtiyot qismlarni almashtirish",
                        "12 oylik kafolat"
                    ]
                },
                {
                    title: "Konditsionerlarni ta'mirlash",
                    basicPrice: "250.000 dan",
                    complexPrice: "750.000 dan",
                    features: [
                        "Ustaning tashrifi",
                        "Diagnostika",
                        "Freon bilan to'ldirish",
                        "6 oylik kafolat"
                    ]
                }
            ]
        },
        contact: {
            title: "Aloqa",
            desc: "Maslahat olish uchun biz bilan bog'laning",
            phone: {
                title: "Telefon",
                number1: "+998 90 123 45 67",
                number2: "+998 90 123 45 68"
            },
            email: {
                title: "Email",
                address: "info@remontpro.uz"
            },
            address: {
                title: "Manzil",
                text: "Toshkent sh., Namuna ko'chasi, 123"
            },
            form: {
                name: "Ismingiz",
                phone: "Telefon raqamingiz",
                message: "Xabar",
                submit: "So'rov yuborish"
            }
        }
    }
};

// Theme Switcher
const themeSwitch = document.querySelector('.rt-theme-switch');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeSwitch.classList.add('dark');
}

// Theme switch click handler
themeSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    body.classList.toggle('dark-theme');
    themeSwitch.classList.toggle('dark');
    
    // Save theme preference
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Language Switcher
const langSwitch = document.querySelector('.rt-lang-switch');

// Check for saved language preference
const savedLang = localStorage.getItem('language') || 'ru';
if (savedLang === 'uz') {
    langSwitch.classList.add('uz');
    updateLanguage('uz');
}

// Language switch click handler
langSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isUz = langSwitch.classList.toggle('uz');
    const newLang = isUz ? 'uz' : 'ru';
    updateLanguage(newLang);
    localStorage.setItem('language', newLang);
});

// Update language function
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update navigation
    document.querySelectorAll('.rt-nav__link').forEach((link, index) => {
        const keys = ['home', 'services', 'pricing', 'testimonials', 'contacts'];
        link.textContent = t.nav[keys[index]];
    });
    // Update mobile navigation
    document.querySelectorAll('.rt-mobile-menu__link').forEach((link, index) => {
        const keys = ['home', 'services', 'pricing', 'testimonials', 'contacts'];
        link.textContent = t.nav[keys[index]];
    });

    // Update hero section
    document.querySelector('.rt-hero__title').textContent = t.hero.title;
    document.querySelector('.rt-hero__description').textContent = t.hero.description;
    document.querySelector('#hero-call-master').textContent = t.hero.callMaster;
    document.querySelector('.rt-button--secondary').textContent = t.hero.call;

    // Update stats
    const statLabels = document.querySelectorAll('.rt-stat__label');
    statLabels[0].textContent = t.hero.stats.experience;
    statLabels[1].textContent = t.hero.stats.clients;
    statLabels[2].textContent = t.hero.stats.guarantee;

    // Update document language
    document.documentElement.lang = lang;

    // Update mobile lang switch button text
    const mobileLangSwitchBtn = document.getElementById('mobileLangSwitch');
    if (mobileLangSwitchBtn) {
        mobileLangSwitchBtn.textContent = lang === 'ru' ? 'Сменить на узбекский' : 'Сменить на русский';
    }

    // Update services section
    document.getElementById('services-title').textContent = t.services.title;
    document.getElementById('services-desc').textContent = t.services.desc;
    t.services.cards.forEach((card, i) => {
        document.getElementById('service-title-' + (i+1)).textContent = card.title;
        document.getElementById('service-desc-' + (i+1)).textContent = card.desc;
        document.getElementById('service-img-' + (i+1)).src = card.img;
        document.getElementById('service-img-' + (i+1)).alt = card.title;
    });

    // Update advantages section
    document.getElementById('advantages-title').textContent = t.advantages.title;
    document.getElementById('advantages-desc').textContent = t.advantages.desc;
    t.advantages.cards.forEach((card, i) => {
        document.getElementById('adv-title-' + (i+1)).textContent = card.title;
        document.getElementById('adv-desc-' + (i+1)).textContent = card.desc;
        document.getElementById('adv-img-' + (i+1)).src = card.img;
        document.getElementById('adv-img-' + (i+1)).alt = card.title;
    });
    
    // Update process section
    document.getElementById('process-title').textContent = t.process.title;
    document.getElementById('process-desc').textContent = t.process.desc;
    t.process.steps.forEach((step, i) => {
        document.getElementById('process-title-' + (i+1)).textContent = step.title;
        document.getElementById('process-desc-' + (i+1)).textContent = step.desc;
    });
    
    // Update pricing section
    document.getElementById('pricing-title').textContent = t.pricing.title;
    document.getElementById('pricing-desc').textContent = t.pricing.desc;
    document.getElementById('pricing-basic').textContent = t.pricing.basic;
    document.getElementById('pricing-complex').textContent = t.pricing.complex;
    document.getElementById('pricing-popular').textContent = t.pricing.popular;
    
    // Update pricing cards
    t.pricing.cards.forEach((card, i) => {
        document.getElementById('pricing-card-title-' + (i+1)).textContent = card.title;
        document.getElementById('pricing-amount-' + (i+1) + '-basic').textContent = card.basicPrice;
        document.getElementById('pricing-amount-' + (i+1) + '-complex').textContent = card.complexPrice;
        
        // Update features for each card
        card.features.forEach((feature, j) => {
            document.getElementById('pricing-feature-' + (i+1) + '-' + (j+1)).textContent = feature;
        });
        
        // Update buttons
        document.getElementById('pricing-button-' + (i+1)).textContent = t.pricing.orderButton;
    });

    // Update contact section
    const tContact = translations[lang].contact;
    document.getElementById('contact-title').textContent = tContact.title;
    document.getElementById('contact-desc').textContent = tContact.desc;
    
    // Update contact cards
    document.getElementById('contact-phone-title').textContent = tContact.phone.title;
    document.getElementById('contact-phone-1').textContent = tContact.phone.number1;
    document.getElementById('contact-phone-2').textContent = tContact.phone.number2;
    
    document.getElementById('contact-email-title').textContent = tContact.email.title;
    document.getElementById('contact-email').textContent = tContact.email.address;
    
    document.getElementById('contact-address-title').textContent = tContact.address.title;
    document.getElementById('contact-address').textContent = tContact.address.text;
    
    // Update form
    document.getElementById('contact-form-name').textContent = tContact.form.name;
    document.getElementById('contact-form-phone').textContent = tContact.form.phone;
    document.getElementById('contact-form-message').textContent = tContact.form.message;
    document.getElementById('contact-form-submit').textContent = tContact.form.submit;
}

// Header scroll effect
const header = document.querySelector('.rt-header');
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('.rt-nav__link, .rt-mobile-menu__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });
});

// Mobile Menu
const burger = document.querySelector('.rt-burger');
const mobileMenu = document.querySelector('.rt-mobile-menu');
const closeMenu = document.querySelector('.rt-mobile-menu__close');
const mobileLinks = document.querySelectorAll('.rt-mobile-menu__link');

function toggleMenu() {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

// Mobile theme switcher
const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');
if (mobileThemeSwitch) {
    mobileThemeSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('dark-theme');
        themeSwitch.classList.toggle('dark');
        // Синхронизируем с десктопной кнопкой
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
}
// Mobile lang switcher
const mobileLangSwitch = document.getElementById('mobileLangSwitch');
if (mobileLangSwitch) {
    mobileLangSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        // Получаем десктопный переключатель
        const langSwitch = document.querySelector('.rt-lang-switch');
        const isUz = langSwitch.classList.toggle('uz');
        const newLang = isUz ? 'uz' : 'ru';
        updateLanguage(newLang);
        localStorage.setItem('language', newLang);
        // Обновляем текст на кнопке
        mobileLangSwitch.textContent = newLang === 'ru' ? 'Сменить на узбекский' : 'Сменить на русский';
    });
}

// При инициализации выставить правильный текст на mobileLangSwitch
const mobileLangSwitchBtn = document.getElementById('mobileLangSwitch');
if (mobileLangSwitchBtn) {
    mobileLangSwitchBtn.textContent = savedLang === 'ru' ? 'Сменить на узбекский' : 'Сменить на русский';
}

// Pricing toggle functionality
const pricingToggle = document.getElementById('pricingToggle');
if (pricingToggle) {
    pricingToggle.addEventListener('change', function() {
        const basicPrices = document.querySelectorAll('.rt-pricing-card__amount.basic');
        const complexPrices = document.querySelectorAll('.rt-pricing-card__amount.complex');
        
        if (this.checked) {
            basicPrices.forEach(el => el.style.display = 'none');
            complexPrices.forEach(el => el.style.display = 'block');
        } else {
            basicPrices.forEach(el => el.style.display = 'block');
            complexPrices.forEach(el => el.style.display = 'none');
        }
    });
}



// Remove animation-related code
document.querySelectorAll('.rt-service-card').forEach(card => {
    card.removeAttribute('data-animation');
});

document.querySelectorAll('.rt-adv-card').forEach(card => {
    card.removeAttribute('data-animation');
});

// Phone Numbers Rotation (Mobile Only)
(function() {
    const phoneDisplay = document.querySelector('.rt-phone-display');
    if (!phoneDisplay) return;
    const numbers = phoneDisplay.querySelectorAll('.rt-phone-display__number');
    if (numbers.length < 2) return;
    let currentIndex = 0;
    let interval = null;

    function showNumber(index) {
        numbers.forEach((el, i) => {
            if (i === index) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    function startRotation() {
        if (window.innerWidth <= 992) {
            showNumber(currentIndex);
            if (!interval) {
                interval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % numbers.length;
                    showNumber(currentIndex);
                }, 3000);
            }
        } else {
            clearInterval(interval);
            interval = null;
            numbers.forEach(el => el.classList.add('active'));
        }
    }

    window.addEventListener('resize', startRotation);
    startRotation();
})();