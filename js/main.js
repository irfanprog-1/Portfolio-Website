/**
 * IRFAN PORTFOLIO - WORLD-CLASS CLIENT-CONVERTING INTERACTIONS
 * High-performance, 60fps animations & custom video player engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Audio Toggle Setup
  initAudioToggle();

  // 2. Mouse Glow Spotlight
  initMouseSpotlight();

  // 3. Hero Particle Canvas
  initHeroParticles();

  // 4. Scroll Progress & Navbar Scrolled State
  initScrollEffects();

  // 5. Mobile Navigation
  initMobileNav();

  // 6. Animated Count-Up Numbers
  initCountUp();

  // 7. Reveal On Scroll (Intersection Observer)
  initRevealAnimations();

  // 8. Video Players & Hover Previews
  initVideoPreviews();

  // 9. Fullscreen Lightbox Modal & Sleek Video Player
  initLightboxModal();

  // 10. Interactive Before / After Slider
  initBeforeAfterSlider();

  // 11. FAQ Accordion
  initFaqAccordion();

  // 12. Contact Form & Copy Email Tooltip
  initContactSystem();

  // 13. Magnetic Buttons
  initMagneticButtons();
});

/* ==========================================================================
   1. AUDIO TOGGLE
   ========================================================================== */
function initAudioToggle() {
  const audioBtn = document.getElementById('audioToggleBtn');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    const isEnabled = window.luxuryAudio.toggle();
    if (isEnabled) {
      audioBtn.classList.add('active');
      audioBtn.setAttribute('title', 'Sound Effects: ON');
    } else {
      audioBtn.classList.remove('active');
      audioBtn.setAttribute('title', 'Sound Effects: OFF');
    }
  });
}

/* ==========================================================================
   2. MOUSE SPOTLIGHT FOLLOWER
   ========================================================================== */
function initMouseSpotlight() {
  const glow = document.querySelector('.mouse-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });

  function renderGlow() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(renderGlow);
  }
  renderGlow();
}

/* ==========================================================================
   3. HERO PARTICLE CANVAS
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const particleCount = Math.min(width > 768 ? 60 : 25, 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
      const clampedAlpha = Math.max(0.1, Math.min(0.8, p.alpha));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 210, 255, ${clampedAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(0, 102, 255, 0.5)';
      ctx.fill();

      // Connect subtle constellation lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 102, 255, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   4. SCROLL PROGRESS & NAVBAR BLUR
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scrollProgressBar');
  const navbar = document.getElementById('mainNavbar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   5. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const sheet = document.getElementById('mobileNavSheet');
  const closeBtn = document.getElementById('mobileCloseBtn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !sheet) return;

  function openMenu() {
    sheet.classList.add('open');
    document.body.style.overflow = 'hidden';
    window.luxuryAudio.playClick();
  }

  function closeMenu() {
    sheet.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

/* ==========================================================================
   6. ANIMATED COUNT-UP NUMBERS
   ========================================================================== */
function initCountUp() {
  const counters = document.querySelectorAll('[data-counter-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = parseInt(el.getAttribute('data-counter-duration') || '1800', 10);
        
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // Easing: easeOutExpo
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(ease * targetVal);

          el.textContent = `${prefix}${current}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${prefix}${targetVal}${suffix}`;
          }
        };

        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach((counter) => observer.observe(counter));
}

/* ==========================================================================
   7. REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   8. VIDEO HOVER PREVIEWS & HERO AUDIO TOGGLE
   ========================================================================== */
function initVideoPreviews() {
  // Hero Video Mute / Unmute pill
  const heroPill = document.getElementById('heroSoundPill');
  const heroVideo = document.getElementById('heroVideo');

  if (heroPill && heroVideo) {
    heroPill.addEventListener('click', (e) => {
      e.stopPropagation();
      heroVideo.muted = !heroVideo.muted;
      const textSpan = heroPill.querySelector('span');
      if (heroVideo.muted) {
        textSpan.textContent = 'Unmute Sound';
        heroPill.classList.remove('active');
      } else {
        textSpan.textContent = 'Sound ON';
        heroPill.classList.add('active');
        window.luxuryAudio.playClick();
      }
    });
  }

  // Long form cards hover video preview
  const longformCards = document.querySelectorAll('.longform-card');
  longformCards.forEach((card) => {
    const video = card.querySelector('.longform-preview-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
      video.muted = true;
      video.play().catch(() => {});
      window.luxuryAudio.playHover();
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
      video.pause();
      video.currentTime = 0;
    });
  });

  // Short form cards hover
  const shortformCards = document.querySelectorAll('.shortform-card');
  shortformCards.forEach((card) => {
    const video = card.querySelector('.shortform-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
      window.luxuryAudio.playHover();
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

/* ==========================================================================
   9. FULLSCREEN LIGHTBOX MODAL & SLEEK VIDEO CONTROLLER
   ========================================================================== */
function initLightboxModal() {
  const modal = document.getElementById('videoLightboxModal');
  const video = document.getElementById('lightboxVideo');
  const title = document.getElementById('lightboxTitle');
  const category = document.getElementById('lightboxCategory');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  // Controls
  const playBtn = document.getElementById('modalPlayBtn');
  const muteBtn = document.getElementById('modalMuteBtn');
  const fullscreenBtn = document.getElementById('modalFullscreenBtn');
  const scrubberTrack = document.getElementById('modalScrubberTrack');
  const scrubberFill = document.getElementById('modalScrubberFill');
  const timeCurrent = document.getElementById('modalTimeCurrent');
  const timeDuration = document.getElementById('modalTimeDuration');

  if (!modal || !video) return;

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function openLightbox(src, itemTitle, itemCat, isVertical = false) {
    video.src = src;
    title.textContent = itemTitle || 'Featured Project';
    category.textContent = itemCat || 'Video Production';

    if (isVertical) {
      modal.classList.add('is-vertical');
    } else {
      modal.classList.remove('is-vertical');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      // Autoplay with sound might need muted start
      video.muted = true;
      video.play();
    });
    updatePlayButton();
    updateMuteButton();
    window.luxuryAudio.playClick();
  }

  function closeLightbox() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    video.pause();
    video.src = '';
  }

  // Global trigger function for cards
  window.openVideoLightbox = openLightbox;

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    }
  });

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updatePlayButton();
  }

  function updatePlayButton() {
    if (!playBtn) return;
    if (video.paused) {
      playBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
      `;
    } else {
      playBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </svg>
      `;
    }
  }

  function toggleMute() {
    video.muted = !video.muted;
    updateMuteButton();
  }

  function updateMuteButton() {
    if (!muteBtn) return;
    if (video.muted) {
      muteBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="1" y1="1" x2="23" y2="23"/>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
          <line x1="12" y1="19" x2="12" y2="23"/>
          <line x1="8" y1="23" x2="16" y2="23"/>
        </svg>
      `;
    } else {
      muteBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      `;
    }
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);

  video.addEventListener('timeupdate', () => {
    const cur = video.currentTime;
    const dur = video.duration || 0;
    if (timeCurrent) timeCurrent.textContent = formatTime(cur);
    if (timeDuration) timeDuration.textContent = formatTime(dur);
    if (scrubberFill && dur > 0) {
      scrubberFill.style.width = `${(cur / dur) * 100}%`;
    }
  });

  video.addEventListener('loadedmetadata', () => {
    if (timeDuration) timeDuration.textContent = formatTime(video.duration);
  });

  if (scrubberTrack) {
    scrubberTrack.addEventListener('click', (e) => {
      const rect = scrubberTrack.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      video.currentTime = clickPos * video.duration;
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (modal.requestFullscreen) modal.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // Trigger from Featured Showreel
  const featuredShowreel = document.getElementById('featuredShowreelCard');
  if (featuredShowreel) {
    featuredShowreel.addEventListener('click', () => {
      openLightbox(
        'videos/chatgpt-saas.mp4',
        'Featured Showreel — SaaS & Product Animation',
        'Motion Design & Commercial Storytelling'
      );
    });
  }
}

/* ==========================================================================
   10. INTERACTIVE BEFORE / AFTER SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('baSliderContainer');
  const afterWrap = document.getElementById('baAfterWrap');
  const handle = document.getElementById('baHandle');

  if (!container || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    afterWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   11. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
        window.luxuryAudio.playClick();
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================================
   12. CONTACT SYSTEM & COPY EMAIL TOOLTIP
   ========================================================================== */
function initContactSystem() {
  // Copy Email Button
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailVal = 'Irfan.initials1@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        const textSpan = copyBtn.querySelector('span');
        const origText = textSpan.textContent;
        textSpan.textContent = 'Copied!';
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = '#fff';
        window.luxuryAudio.playSuccess();

        setTimeout(() => {
          textSpan.textContent = origText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      });
    });
  }

  // Budget Pills Selection
  const budgetPills = document.querySelectorAll('.budget-pill');
  const budgetInput = document.getElementById('selectedBudget');

  budgetPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      budgetPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      if (budgetInput) {
        budgetInput.value = pill.getAttribute('data-budget');
      }
      window.luxuryAudio.playClick();
    });
  });

  // Form Submit Handler (Sends direct email notification to Irfan.initials1@gmail.com)
  const contactForm = document.getElementById('projectContactForm');
  const successOverlay = document.getElementById('contactSuccessOverlay');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const submitText = document.getElementById('submitBtnText');
  const successMailtoBtn = document.getElementById('successMailtoBtn');
  const successDesc = document.getElementById('successDesc');

  if (contactForm && successOverlay) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const projectType = document.getElementById('projectType').value;
      const budget = (budgetInput ? budgetInput.value : '$50 - $150') || '$50 - $150';
      const message = document.getElementById('projectDetails').value.trim();

      if (!name || !email) {
        alert('Please provide your name and email so Irfan can respond.');
        return;
      }

      // Visual feedback: Sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Sending to Irfan...';
      }

      const payload = {
        name: name,
        email: email,
        project_type: projectType,
        budget: budget,
        details: message || 'No extra notes provided',
        _subject: `🎬 New Portfolio Project Lead: ${name} (${budget})`,
        _template: 'table',
        _captcha: 'false'
      };

      // Construct backup mailto link
      const mailtoSubject = encodeURIComponent(`Project Inquiry: ${name} (${budget})`);
      const mailtoBody = encodeURIComponent(
        `Hi Irfan,\n\nI want to start a project with you:\n\n` +
        `• Name: ${name}\n` +
        `• Email: ${email}\n` +
        `• Project Type: ${projectType}\n` +
        `• Budget: ${budget}\n` +
        `• Details: ${message || 'N/A'}\n\n` +
        `Looking forward to hearing from you!`
      );
      const mailtoUrl = `mailto:Irfan.initials1@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      if (successMailtoBtn) {
        successMailtoBtn.href = mailtoUrl;
      }

      try {
        // Send email notification to Irfan's inbox via FormSubmit API
        const response = await fetch('https://formsubmit.co/ajax/Irfan.initials1@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          if (successDesc) {
            successDesc.innerHTML = `Your inquiry was successfully delivered to <strong>Irfan.initials1@gmail.com</strong>. Irfan will review your project details and reach out to <strong>${email}</strong> within 12 hours.`;
          }
        } else {
          // Fallback if API response is not OK
          if (successDesc) {
            successDesc.innerHTML = `Thank you, <strong>${name}</strong>! Your inquiry details are ready. You can also confirm via your email app below:`;
          }
          if (successMailtoBtn) successMailtoBtn.style.display = 'inline-flex';
        }
      } catch (err) {
        // Network or offline fallback
        if (successDesc) {
          successDesc.innerHTML = `Thank you, <strong>${name}</strong>! An email draft has been prepared for <strong>Irfan.initials1@gmail.com</strong>. Click below to confirm sending:`;
        }
        if (successMailtoBtn) successMailtoBtn.style.display = 'inline-flex';
      } finally {
        // Show luxury success animation
        successOverlay.classList.add('active');
        window.luxuryAudio.playSuccess();

        // Reset button and form
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitText) submitText.textContent = 'Start Your Project';
        }
        contactForm.reset();

        // Reset budget pill selection to default
        if (budgetPills.length > 0) {
          budgetPills.forEach((p, idx) => {
            if (idx === 0) p.classList.add('active');
            else p.classList.remove('active');
          });
        }
        if (budgetInput) budgetInput.value = '$50 - $150';
      }
    });

    if (successCloseBtn) {
      successCloseBtn.addEventListener('click', () => {
        successOverlay.classList.remove('active');
      });
    }
  }
}

/* ==========================================================================
   13. MAGNETIC BUTTONS
   ========================================================================== */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('.magnetic-btn');

  magneticElements.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}
