document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.slider-container');
  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const paginationContainer = document.querySelector('.slider-pagination');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  if (!container || !track || slides.length === 0) return;

  let currentIndex = 0;
  let gap = 0;
  let maxIndex = 0;

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  function initSliderDimensions() {
    const computedStyle = window.getComputedStyle(track);
    gap = parseInt(computedStyle.gap) || 0;
    
    const containerWidth = container.offsetWidth;
    const slideWidth = slides[0].offsetWidth;
    
    const slidesPerView = Math.round(containerWidth / (slideWidth + gap)) || 1;
    maxIndex = Math.max(0, slides.length - slidesPerView);

    if (currentIndex > maxIndex) currentIndex = maxIndex;

    createPagination();
    goToSlide(currentIndex);
  }

  function createPagination() {
    paginationContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const bullet = document.createElement('div');
      bullet.classList.add('pagination-bullet');
      if (i === currentIndex) bullet.classList.add('active');
      bullet.addEventListener('click', () => goToSlide(i));
      paginationContainer.appendChild(bullet);
    }
  }

  function updatePagination() {
    const bullets = paginationContainer.querySelectorAll('.pagination-bullet');
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle('active', index === currentIndex);
    });
  }
  function updateButtonsState() {
    if (prevBtn && nextBtn) {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === maxIndex;
    }
  }

  function getStepWidth() {
    return slides[0].offsetWidth + gap;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    
    currentTranslate = -currentIndex * getStepWidth();
    prevTranslate = currentTranslate;
    
    track.style.transform = `translateX(${currentTranslate}px)`;
    
    updatePagination();
    updateButtonsState(); // Оновлюємо кнопки при кожному кроці
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        goToSlide(currentIndex + 1);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });
  }
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  function touchStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    track.style.transition = 'none';
  }

  function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const dragDistance = currentPosition - startPos;
    
    let targetTranslate = prevTranslate + dragDistance;
    const maxTranslate = -maxIndex * getStepWidth();
    
    if (targetTranslate > 0) {
      targetTranslate = dragDistance * 0.25;
    } else if (targetTranslate < maxTranslate) {
      targetTranslate = maxTranslate + (targetTranslate - maxTranslate) * 0.25;
    }

    track.style.transform = `translateX(${targetTranslate}px)`;
  }

  function touchEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';

    const matrix = new WebKitCSSMatrix(track.style.transform);
    const finalTranslate = matrix.m41; 
    const movedBy = finalTranslate - prevTranslate;
    
    const threshold = getStepWidth() * 0.2;

    if (movedBy < -threshold && currentIndex < maxIndex) {
      currentIndex++;
    } else if (movedBy > threshold && currentIndex > 0) {
      currentIndex--;
    }

    goToSlide(currentIndex);
  }

  slides.forEach(slide => {
    slide.addEventListener('touchstart', touchStart, { passive: true });
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove, { passive: true });

    slide.addEventListener('mousedown', touchStart);
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initSliderDimensions, 100);
  });

  initSliderDimensions();
});