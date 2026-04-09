/* =============================================
   TRANSLATIONS
   ============================================= */

const translations = {
	ua: {
		'nav.concept': 'Концепція',
		'nav.gallery': 'Галерея',
		'nav.ecosystem': 'Партнерство',
		'nav.investment': 'Інвестиції',
		'hero.tagline': 'Private Alpine Style Residence',
		'about.label': 'Концепція',
		'about.title': 'Приватна alpine-style residence для тих, хто обирає тишу',
		'about.text1': 'TRESMONT — приватна alpine-style residence для тих, хто обирає тишу як привілей. 16 резиденцій-шале з цільного зрубу. Європейська alpine-архітектура, адаптована до ландшафту Карпат.',
		'about.text2': 'Це простір, де архітектура, природа та спосіб життя поєднуються в єдину стриману естетику. Створено для обраного кола власників, які цінують бездоганну якість та тишу.',
		'stat.chalets': 'резиденцій',
		'stat.area': 'площа кожного',
		'stat.unit.m': 'м',
		'stat.altitude': 'над рівнем моря',
		'gallery.label': 'Галерея',
		'gallery.title': 'Вишуканість у кожній деталі',
		'eco.label': 'Партнерство',
		'eco.title': 'Private Lifestyle Ecosystem',
		'eco.text': 'TRESMONT формується не лише як резиденційний проєкт, а як приватне середовище нового рівня. Клубна інфраструктура передбачає простір для життя, відпочинку, сервісу та статусних партнерств.',
		'eco.f1': 'Закритий клуб для резидентів',
		'eco.f2': 'Кінний клуб',
		'eco.f3': 'Вертолітний майданчик',
		'eco.f4': 'Авторський ресторан',
		'eco.f5': 'SPA & wellness-зона',
		'footer.label': 'Інвестиції',
		'footer.title': 'Надійна інвестиція у часи невизначеності',
		'footer.subtitle': 'Вартість та умови — за індивідуальним запитом',
		'footer.adv1': 'Повне право власності',
		'footer.adv2': 'Земельна ділянка 6–7 соток',
		'footer.adv3': 'Лише 16 резиденцій-шале',
		'footer.adv4': 'Високий потенціал доходності',
		'footer.adv5': 'П\'ятизірковий сервіс 24/7',
		'footer.presentation': 'Завантажити презентацію ↗',
		'footer.map': 'Буковель — мітка на карті ↗',
		'modal.title': 'Оберіть презентацію',
		'modal.restaurant': 'Ресторан',
		'modal.chalet': 'Шале',
	},
	en: {
		'nav.concept': 'Concept',
		'nav.gallery': 'Gallery',
		'nav.ecosystem': 'Partnership',
		'nav.investment': 'Investment',
		'hero.tagline': 'Private Alpine Style Residence',
		'about.label': 'Concept',
		'about.title': 'A private alpine-style residence for those who choose silence',
		'about.text1': 'TRESMONT is a private alpine-style residence for those who choose silence as a privilege. 16 chalet residences crafted from solid timber. European alpine architecture, adapted to the Carpathian landscape.',
		'about.text2': 'A space where architecture, nature, and lifestyle converge into one refined aesthetic. Created for a select circle of owners who value impeccable quality and quiet mountain living.',
		'stat.chalets': 'residences',
		'stat.area': 'area each',
		'stat.unit.m': 'm',
		'stat.altitude': 'above sea level',
		'gallery.label': 'Gallery',
		'gallery.title': 'Elegance in Every Detail',
		'eco.label': 'Partnership',
		'eco.title': 'Private Lifestyle Ecosystem',
		'eco.text': 'TRESMONT is more than a residential project — it is a private environment of a new caliber. Club infrastructure provides space for living, leisure, service, and distinguished partnerships.',
		'eco.f1': 'Private residents\' club',
		'eco.f2': 'Equestrian club',
		'eco.f3': 'Helicopter access',
		'eco.f4': 'Signature restaurant',
		'eco.f5': 'SPA & wellness zone',
		'footer.label': 'Investment',
		'footer.title': 'A Reliable Investment in Times of Uncertainty',
		'footer.subtitle': 'Pricing and terms — upon individual request',
		'footer.adv1': 'Full ownership rights',
		'footer.adv2': 'Land plot of 6–7 hundred m²',
		'footer.adv3': 'Only 16 chalet residences',
		'footer.adv4': 'High yield potential',
		'footer.adv5': 'Five-star service 24/7',
		'footer.presentation': 'Download presentation ↗',
		'footer.map': 'Bukovel — pin on map ↗',
		'modal.title': 'Choose a presentation',
		'modal.restaurant': 'Restaurant',
		'modal.chalet': 'Chalet',
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
	initPresentationModal();
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

	function setScrollLock(isLocked) {
		document.documentElement.classList.toggle('no-scroll', isLocked);
		document.body.classList.toggle('no-scroll', isLocked);
	}

	function toggle() {
		const isOpen = menu.classList.toggle('active');
		burger.classList.toggle('active', isOpen);
		setScrollLock(isOpen);
	}

	function close() {
		menu.classList.remove('active');
		burger.classList.remove('active');
		setScrollLock(false);
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

/* =============================================
   PRESENTATION MODAL
   ============================================= */

function initPresentationModal() {
	const btn = document.getElementById('openPresentation');
	const btnMobile = document.getElementById('openPresentationMobile');
	const modal = document.getElementById('presentationModal');
	if (!modal) return;

	const closeBtn = modal.querySelector('.modal__close');
	const backdrop = modal.querySelector('.modal__backdrop');
	const mobileMenu = document.getElementById('mobileMenu');
	const burger = document.getElementById('burger');

	function closeMobileMenu() {
		if (!mobileMenu) return;
		mobileMenu.classList.remove('active');
		if (burger) burger.classList.remove('active');
	}

	function open() {
		closeMobileMenu();
		modal.classList.add('active');
		document.documentElement.classList.add('no-scroll');
		document.body.classList.add('no-scroll');
	}

	function close() {
		modal.classList.remove('active');
		document.documentElement.classList.remove('no-scroll');
		document.body.classList.remove('no-scroll');
	}

	if (btn) btn.addEventListener('click', open);
	if (btnMobile) btnMobile.addEventListener('click', open);
	closeBtn.addEventListener('click', close);
	backdrop.addEventListener('click', close);
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal.classList.contains('active')) close();
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
