/* =============================================
   TRANSLATIONS
   ============================================= */

const translations = {
	ua: {
		'nav.concept': 'Концепція',
		'nav.gallery': 'Галерея',
		'nav.investment': 'Інвестиції',
		'hero.tagline': 'Ultra-Luxury інвестиційні шале в Буковелі',
		'about.label': 'Концепція',
		'about.title': 'Перший закритий клуб ultra-luxury класу',
		'about.text1': 'TRESMONT — перший у Буковелі закритий клуб ultra-luxury класу, що об\'єднує лише 14 резиденцій-шале. Класичний альпійський стиль із цільного зрубу, натхненний атмосферою Куршевеля, Церматта та Шамоні.',
		'about.text2': 'Проєкт створено для обраного кола власників, які цінують бездоганну якість, сервіс найвищого рівня та престижне, по-справжньому унікальне оточення.',
		'stat.chalets': 'шале',
		'stat.area': 'площа кожного',
		'stat.unit.m': 'м',
		'stat.altitude': 'над рівнем моря',
		'gallery.label': 'Галерея',
		'gallery.title': 'Вишуканість у кожній деталі',
		'footer.title': 'Надійна інвестиція у часи невизначеності',
		'footer.subtitle': 'Вартість та умови — за індивідуальним запитом',
		'footer.adv1': 'Повне право власності',
		'footer.adv2': 'Земельна ділянка 6–7 соток',
		'footer.adv3': 'Лише 14 шале, 5 у продажу',
		'footer.adv4': 'Високий потенціал доходності',
		'footer.adv5': 'П\'ятизірковий сервіс 24/7',
		'footer.presentation': 'Завантажити презентацію ↗',
		'footer.map': 'Буковель — мітка на карті ↗',
	},
	en: {
		'nav.concept': 'Concept',
		'nav.gallery': 'Gallery',
		'nav.investment': 'Investment',
		'hero.tagline': 'Ultra-Luxury Investment Chalets in Bukovel',
		'about.label': 'Concept',
		'about.title': 'The First Ultra-Luxury Private Club',
		'about.text1': 'TRESMONT is the first ultra-luxury private club in Bukovel, uniting just 14 chalet residences. Classic Alpine style crafted from solid timber, inspired by the atmosphere of Courchevel, Zermatt, and Chamonix.',
		'about.text2': 'Created for a select circle of owners who value impeccable quality, the highest level of service, and a truly unique, prestigious environment.',
		'stat.chalets': 'chalets',
		'stat.area': 'area each',
		'stat.unit.m': 'm',
		'stat.altitude': 'above sea level',
		'gallery.label': 'Gallery',
		'gallery.title': 'Elegance in Every Detail',
		'footer.title': 'A Reliable Investment in Times of Uncertainty',
		'footer.subtitle': 'Pricing and terms — upon individual request',
		'footer.adv1': 'Full ownership rights',
		'footer.adv2': 'Land plot of 6–7 hundred m²',
		'footer.adv3': 'Only 14 chalets, 5 available',
		'footer.adv4': 'High yield potential',
		'footer.adv5': 'Five-star service 24/7',
		'footer.presentation': 'Download presentation ↗',
		'footer.map': 'Bukovel — pin on map ↗',
	}
};

let currentLang = 'ua';

/* =============================================
   INIT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
	initPreloader();
	initHeader();
	initMobileMenu();
	initLangToggle();
	initGallery();
	initScrollReveal();
	initSmoothScroll();
	initHeroParallax();
});

/* =============================================
   PRELOADER
   ============================================= */

function initPreloader() {
	window.addEventListener('load', () => {
		setTimeout(() => {
			const preloader = document.getElementById('preloader');
			if (preloader) preloader.classList.add('hidden');
		}, 400);
	});
}

/* =============================================
   HEADER
   ============================================= */

function initHeader() {
	const header = document.getElementById('header');
	const sections = document.querySelectorAll('[id]:is(section, footer)');
	const navLinks = document.querySelectorAll('.nav-link');

	function onScroll() {
		const scrollY = window.scrollY;

		if (scrollY > 50) {
			header.classList.add('header--scrolled');
		} else {
			header.classList.remove('header--scrolled');
		}

		const headerH = header.offsetHeight;
		let activeId = '';

		sections.forEach(section => {
			const top = section.offsetTop - headerH - 100;
			const bottom = top + section.offsetHeight;
			if (scrollY >= top && scrollY < bottom) {
				activeId = section.id;
			}
		});

		navLinks.forEach(link => {
			const href = link.getAttribute('href').replace('#', '');
			link.classList.toggle('active', href === activeId);
		});
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

/* =============================================
   MOBILE MENU
   ============================================= */

function initMobileMenu() {
	const burger = document.getElementById('burger');
	const menu = document.getElementById('mobileMenu');
	const links = menu.querySelectorAll('a');

	function toggle() {
		const isOpen = menu.classList.toggle('active');
		burger.classList.toggle('active', isOpen);
		document.body.style.overflow = isOpen ? 'hidden' : '';
	}

	function close() {
		menu.classList.remove('active');
		burger.classList.remove('active');
		document.body.style.overflow = '';
	}

	burger.addEventListener('click', toggle);
	links.forEach(link => link.addEventListener('click', close));
}

/* =============================================
   LANGUAGE TOGGLE
   ============================================= */

function initLangToggle() {
	const toggles = document.querySelectorAll('#langSwitch, #langSwitchMobile');

	toggles.forEach(toggle => {
		toggle.addEventListener('click', () => {
			currentLang = currentLang === 'ua' ? 'en' : 'ua';
			applyLanguage(currentLang);
		});
	});
}

function applyLanguage(lang) {
	document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.dataset.i18n;
		if (translations[lang] && translations[lang][key]) {
			el.textContent = translations[lang][key];
		}
	});

	document.querySelectorAll('.lang-switch__opt').forEach(opt => {
		opt.classList.toggle('active', opt.dataset.lang === lang);
	});
}

/* =============================================
   GALLERY SLIDER
   ============================================= */

function initGallery() {
	if (typeof Swiper === 'undefined') return;

	new Swiper('.gallery-slider', {
		slidesPerView: 'auto',
		spaceBetween: 16,
		grabCursor: true,
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 2800,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
			}
		}
	});
}

/* =============================================
   SCROLL REVEAL + COUNTERS
   ============================================= */

function initScrollReveal() {
	const revealElements = document.querySelectorAll('.reveal');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');

				const counters = entry.target.querySelectorAll('[data-counter]');
				counters.forEach(el => animateCounter(el));

				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.12,
		rootMargin: '0px 0px -40px 0px'
	});

	revealElements.forEach(el => observer.observe(el));
}

function animateCounter(el) {
	const target = parseInt(el.dataset.counter, 10);
	if (isNaN(target)) return;

	const duration = 1600;
	const start = performance.now();

	function update(now) {
		const elapsed = now - start;
		const progress = Math.min(elapsed / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		el.textContent = Math.round(target * eased);
		if (progress < 1) requestAnimationFrame(update);
	}

	requestAnimationFrame(update);
}

/* =============================================
   SMOOTH SCROLL
   ============================================= */

function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			if (href === '#') return;

			const target = document.querySelector(href);
			if (!target) return;

			e.preventDefault();

			const header = document.getElementById('header');
			const offset = header ? header.offsetHeight : 0;
			const top = target.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({ top, behavior: 'smooth' });
		});
	});
}

/* =============================================
   HERO PARALLAX
   ============================================= */

function initHeroParallax() {
	const hero = document.querySelector('.hero');
	const bg = document.querySelector('.hero__bg');
	if (!hero || !bg) return;

	let ticking = false;

	window.addEventListener('scroll', () => {
		if (!ticking) {
			requestAnimationFrame(() => {
				const scrollY = window.scrollY;
				const heroH = hero.offsetHeight;
				if (scrollY < heroH) {
					bg.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
				}
				ticking = false;
			});
			ticking = true;
		}
	}, { passive: true });
}
