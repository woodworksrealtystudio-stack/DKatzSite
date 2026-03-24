document.addEventListener('DOMContentLoaded', () => {

  // ===================== SHARED COMPONENTS =====================

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function navLinkClass(href) {
    return href === currentPage ? ' class="active"' : '';
  }

  const navbarHTML = `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">
        <img src="assets/logo-transparent.png" alt="D.F. Katz Law Firm">
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html"${navLinkClass('index.html')}>Home</a></li>
        <li><a href="about.html"${navLinkClass('about.html')}>About</a></li>
        <li class="nav-dropdown">
          <a href="practice-areas.html" class="dropdown-trigger${currentPage === 'practice-areas.html' || currentPage === 'criminal-defense.html' || currentPage === 'business-privacy.html' ? ' active' : ''}">Practice Areas <i data-lucide="chevron-down" class="dropdown-chevron"></i></a>
          <ul class="dropdown-menu">
            <li><a href="practice-areas.html"${navLinkClass('practice-areas.html')}>Overview</a></li>
            <li><a href="criminal-defense.html"${navLinkClass('criminal-defense.html')}>Criminal Defense</a></li>
            <li><a href="business-privacy.html"${navLinkClass('business-privacy.html')}>Business &amp; Privacy</a></li>
          </ul>
        </li>
        <li><a href="contact.html"${navLinkClass('contact.html')}>Contact</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Toggle navigation" id="navToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">The D.F. Katz <span>Law Firm</span></div>
          <p>Sophisticated legal counsel for technology, privacy, and criminal defense in Atlanta, Georgia.</p>
        </div>
        <div class="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="practice-areas.html">Practice Areas</a></li>
            <li><a href="criminal-defense.html">Criminal Defense</a></li>
            <li><a href="business-privacy.html">Business &amp; Privacy</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>Atlanta, Georgia</p>
          <div class="footer-social">
            <a href="https://x.com/KatzFDavid" target="_blank" rel="noopener" aria-label="X (Twitter)"><i data-lucide="twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 The D.F. Katz Law Firm, LLC. All rights reserved.</p>
        <p class="legal-disclaimer">Attorney Advertising. Prior results do not guarantee a similar outcome. This website does not create an attorney-client relationship.</p>
      </div>
    </div>
  </footer>`;

  const backToTopHTML = `
  <button class="back-to-top" id="backToTop" aria-label="Back to top">
    <i data-lucide="arrow-up"></i>
  </button>`;

  // Inject shared components
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) {
    navPlaceholder.insertAdjacentHTML('afterend', navbarHTML);
    navPlaceholder.remove();
  }

  if (footerPlaceholder) {
    footerPlaceholder.insertAdjacentHTML('afterend', footerHTML);
    footerPlaceholder.remove();
  }

  document.body.insertAdjacentHTML('beforeend', backToTopHTML);

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // ===================== MOBILE NAV TOGGLE =====================

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ===================== DROPDOWN MENU =====================

  const dropdownTriggers = document.querySelectorAll('.nav-dropdown');
  dropdownTriggers.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    }
  });

  // ===================== NAVBAR SCROLL EFFECT =====================

  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;
  let scrollTimeout;

  const handleScroll = () => {
    if (!navbar) return;

    const currentScrollY = window.scrollY;

    // Show navbar when scrolling up or at the top
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      navbar.classList.remove('hidden');
      clearTimeout(scrollTimeout);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Hide navbar when scrolling down
      navbar.classList.add('hidden');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        navbar.classList.remove('hidden');
      }, 2000);
    }

    lastScrollY = currentScrollY;

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Back to top click
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================== SCROLL ANIMATIONS =====================

  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .hero-animate');

  if (animatedElements.length > 0) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      animatedElements.forEach(el => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      animatedElements.forEach(el => observer.observe(el));
    }
  }

  // Hero staggered animation
  const heroElements = document.querySelectorAll('.hero-stagger');
  if (heroElements.length > 0) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heroElements.forEach((el, i) => {
      if (prefersReducedMotion) {
        el.classList.add('visible');
      } else {
        setTimeout(() => el.classList.add('visible'), 200 + i * 150);
      }
    });
  }

  // ===================== ANALOG CLOCK =====================

  const clockHour = document.querySelector('.clock-hour');
  const clockMinute = document.querySelector('.clock-minute');
  const clockSecond = document.querySelector('.clock-second');

  if (clockHour && clockMinute && clockSecond) {
    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours() % 12;

    const secDeg = s * 6;
    const minDeg = m * 6 + s * 0.1;
    const hrDeg = h * 30 + m * 0.5;

    clockSecond.style.animation = 'none';
    clockMinute.style.animation = 'none';
    clockHour.style.animation = 'none';

    void clockSecond.offsetHeight;

    clockSecond.style.transform = `rotate(${secDeg}deg)`;
    clockMinute.style.transform = `rotate(${minDeg}deg)`;
    clockHour.style.transform = `rotate(${hrDeg}deg)`;

    requestAnimationFrame(() => {
      clockSecond.style.animation = `clockRotate 60s steps(60, end) ${-s}s infinite`;
      clockMinute.style.animation = `clockRotate 3600s linear ${-(m * 60 + s)}s infinite`;
      clockHour.style.animation = `clockRotate 43200s linear ${-(h * 3600 + m * 60 + s)}s infinite`;
    });
  }

  // ===================== CONTACT FORM VALIDATION =====================

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      let isValid = true;

      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      clearErrors();

      if (!name.value.trim()) {
        showError(name);
        isValid = false;
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        showError(email);
        isValid = false;
      }

      if (!message.value.trim()) {
        showError(message);
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  function showError(input) {
    const group = input.closest('.form-group');
    if (group) group.classList.add('error');
  }

  function clearErrors() {
    document.querySelectorAll('.form-group.error').forEach(group => {
      group.classList.remove('error');
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

});
