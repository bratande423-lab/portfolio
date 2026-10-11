// ==========================================================================
// Farrux Aliyev Portfolio - Interaktiv JavaScript & Aloqa Formasi Boshqaruvi
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dinamik joriy yilni yangilash
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobil menyuni ochish va yopish
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });

    // Havola bosilganda mobil menyuni avtomatik yopish
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) {
          menuIcon.classList.remove('fa-xmark');
          menuIcon.classList.add('fa-bars');
        }
      });
    });
  }

  // 3. Navbar scroll hodisasini kuzatish
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('navbar-scrolled');
    } else {
      navbar?.classList.remove('navbar-scrolled');
    }
  });

  // 4. Aloqa formasini xavfsiz va chiroyli qayta ishlash
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name')?.value.trim();
      const contact = document.getElementById('contact-input')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !contact) {
        showStatus('Iltimos, ismingiz va aloqa ma’lumotini to‘liq kiriting.', 'error');
        return;
      }

      // Tugmani yuklanish holatiga o'tkazish
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="fa-solid fa-circle-notch fa-spin text-sm"></i>
        <span>Yuborilmoqda...</span>
      `;

      // Simulyatsiya (Haqiqiy loyihada Telegram Bot API yoki Formspree API ulanishi mumkin)
      setTimeout(() => {
        showStatus(`Katta rahmat, ${name}! Xabaringiz muvaffaqiyatli qabul qilindi. Tez orada siz bilan bog‘lanaman.`, 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 900);
    });
  }

  function showStatus(text, type) {
    if (!formStatus) return;
    formStatus.classList.remove('hidden', 'bg-rose-500/10', 'text-rose-400', 'border-rose-500/20', 'bg-emerald-500/10', 'text-emerald-400', 'border-emerald-500/20');
    formStatus.classList.add('border');

    if (type === 'error') {
      formStatus.classList.add('bg-rose-500/10', 'text-rose-400', 'border-rose-500/20');
    } else {
      formStatus.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border-emerald-500/20');
    }

    formStatus.textContent = text;
  }
});
