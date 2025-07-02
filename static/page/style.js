  // Анимация появления секций при скролле
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Отслеживаем секцию "о нас"
observer.observe(document.querySelector('.about-content'));

// Отслеживаем секцию услуг
observer.observe(document.querySelector('.services-header'));
observer.observe(document.querySelector('.services-note'));

// Анимация карточек услуг с задержкой
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100); // Уменьшил задержку для быстроты
            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    serviceObserver.observe(card);
});

// Анимация счетчиков
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

// Запуск анимации счетчиков при появлении секции
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

statsObserver.observe(document.querySelector('.stats'));

// Функция вызова мастера
function callMaster() {
    // Создаем модальное окно или редирект на форму заказа
    alert('Форма заказа будет добавлена в следующей части!');
}

// Функция заказа услуги - показывает красивое модальное окно
function orderService(serviceName) {
const modal = document.getElementById('orderModal');
const serviceNameEl = document.getElementById('serviceName');

// Устанавливаем название услуги
serviceNameEl.textContent = serviceName;

// Показываем модальное окно
modal.classList.add('show');
document.body.style.overflow = 'hidden';
}

// Функция звонка
function makeCall() {
const phone = '+998942159555';
window.location.href = `tel:${phone}`;
closeModal();
}

// Функция закрытия модального окна
function closeModal() {
const modal = document.getElementById('orderModal');
modal.classList.remove('show');
document.body.style.overflow = '';
}

// Закрытие по клику вне модального окна
document.addEventListener('click', function(e) {
const modal = document.getElementById('orderModal');
if (e.target === modal) {
closeModal();
}
});

// Закрытие по клавише Escape
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeModal();
}
});

// // Плавный скролл для навигации
// document.querySelectorAll('.nav-menu a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// Плавный скролл для навигации
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Изменение фона навбара при скролле
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer для секции брендов
const brandsObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок брендов
const brandsHeader = document.querySelector('.brands-header');
if (brandsHeader) {
brandsObserver.observe(brandsHeader);
}



// Пауза анимации при наведении (опционально)
const brandTracks = document.querySelectorAll('.brands-track');
brandTracks.forEach(track => {
track.addEventListener('mouseenter', () => {
track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
track.style.animationPlayState = 'running';
});
});

// Intersection Observer для секции портфолио
const portfolioObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок портфолио
const portfolioHeader = document.querySelector('.portfolio-header');
if (portfolioHeader) {
portfolioObserver.observe(portfolioHeader);
}

// Анимация карточек портфолио с задержкой
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioItemsObserver = new IntersectionObserver(function(entries) {
entries.forEach((entry, index) => {
if (entry.isIntersecting) {
    setTimeout(() => {
        entry.target.classList.add('visible');
    }, index * 150);
    portfolioItemsObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -50px 0px'
});

portfolioItems.forEach(item => {
portfolioItemsObserver.observe(item);
});

// Intersection Observer для секции workflow
const workflowObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок workflow
const workflowHeader = document.querySelector('.workflow-header');
if (workflowHeader) {
workflowObserver.observe(workflowHeader);
}

// Отслеживаем CTA блок
const workflowCta = document.querySelector('.workflow-cta');
if (workflowCta) {
workflowObserver.observe(workflowCta);
}

// Анимация шагов workflow с задержкой
const workflowSteps = document.querySelectorAll('.workflow-step');
const workflowStepsObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    const stepNumber = parseInt(entry.target.getAttribute('data-step'));
    setTimeout(() => {
        entry.target.classList.add('visible');
    }, (stepNumber - 1) * 300); // Задержка по номеру шага
    workflowStepsObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -100px 0px'
});

workflowSteps.forEach(step => {
workflowStepsObserver.observe(step);
});

// Intersection Observer для секции преимуществ
const advantagesObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок преимуществ
const advantagesHeader = document.querySelector('.advantages-header');
if (advantagesHeader) {
advantagesObserver.observe(advantagesHeader);
}

// Отслеживаем статистику
const advantagesStats = document.querySelector('.advantages-stats');
if (advantagesStats) {
advantagesObserver.observe(advantagesStats);
}

// Анимация карточек преимуществ с задержкой
const advantageItems = document.querySelectorAll('.advantage-item');
const advantageItemsObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    const index = parseInt(entry.target.getAttribute('data-index'));
    setTimeout(() => {
        entry.target.classList.add('visible');
    }, (index - 1) * 100);
    advantageItemsObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -50px 0px'
});

advantageItems.forEach(item => {
advantageItemsObserver.observe(item);
});

// Intersection Observer для секции FAQ
const faqObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок FAQ
const faqHeader = document.querySelector('.faq-header');
if (faqHeader) {
faqObserver.observe(faqHeader);
}

// Отслеживаем контактный блок
const faqContact = document.querySelector('.faq-contact');
if (faqContact) {
faqObserver.observe(faqContact);
}

// Анимация FAQ items с задержкой
const faqItems = document.querySelectorAll('.faq-item');
const faqItemsObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    const index = parseInt(entry.target.getAttribute('data-index'));
    setTimeout(() => {
        entry.target.classList.add('visible');
    }, (index - 1) * 80);
    faqItemsObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2,
rootMargin: '0px 0px -50px 0px'
});

faqItems.forEach(item => {
faqItemsObserver.observe(item);
});

// Функциональность аккордеона FAQ
document.addEventListener('DOMContentLoaded', function() {
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
question.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Закрываем все открытые FAQ
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Переключаем текущий FAQ
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
});
});
});

// Intersection Observer для секции работ
const portfolioWorksObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем заголовок работ
const portfolioWorksHeader = document.querySelector('.portfolio-works-header');
if (portfolioWorksHeader) {
portfolioWorksObserver.observe(portfolioWorksHeader);
}

// Отслеживаем футер работ
const portfolioWorksFooter = document.querySelector('.portfolio-works-footer');
if (portfolioWorksFooter) {
portfolioWorksObserver.observe(portfolioWorksFooter);
}

// Анимация главной карточки работы (появление слева)
const workItemSingle = document.querySelector('.work-item-single');
if (workItemSingle) {
portfolioWorksObserver.observe(workItemSingle);
}

// Intersection Observer для секции контактов
const contactsObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
threshold: 0.3,
rootMargin: '0px 0px -50px 0px'
});

// Отслеживаем элементы контактов
const contactsHeader = document.querySelector('.contacts-header');
const contactFormSection = document.querySelector('.contact-form-section');
const contactInfoSection = document.querySelector('.contact-info-section');

if (contactsHeader) contactsObserver.observe(contactsHeader);
if (contactFormSection) contactsObserver.observe(contactFormSection);
if (contactInfoSection) contactsObserver.observe(contactInfoSection);

// Маска для телефона
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('clientPhone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            // Удаляем лишние цифры (максимум 12: 998 + 9 цифр)
            if (value.startsWith('998')) {
                value = value.slice(3);
            }
            value = value.slice(0, 9);

            let formattedValue = '+998';

            if (value.length > 0) {
                formattedValue += ' (' + value.slice(0, 2);
            }
            if (value.length >= 2) {
                formattedValue += ') ' + value.slice(2, 5);
            }
            if (value.length >= 5) {
                formattedValue += '-' + value.slice(5, 7);
            }
            if (value.length >= 7) {
                formattedValue += '-' + value.slice(7, 9);
            }

            e.target.value = formattedValue;
        });
    }
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.getElementById('repairForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Спасибо! Ваша заявка принята.');
            this.reset();
        } else {
            alert('Ошибка при отправке. Попробуйте ещё раз.');
        }
    });
});


function sendPhoneClick(phone) {
    fetch('/phone-click/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({phone: phone})
    });
}

// Функция для получения CSRF-токена
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
