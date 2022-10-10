const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
  let height = headerEl.getBoundingClientRect().height;
  console.log(height);
  // 线下划的距离 - header本身的高度 超过800显示
  if (window.pageYOffset - height > 800) {
  }
});

const glide = new Glide('.glide');
const captionsEl = document.querySelectorAll('.slide-caption');

glide.on(['mount.after', 'run.after'], () => {
  const caption = captionsEl[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    delay: anime.stagger(400, {
      start: 300,
    }),
    translateY: [anime.stagger([40, 10]), 0],
  });
});
glide.on('run.before', () => {
  document.querySelectorAll('.slide-caption > *').forEach((el) => {
    el.style.opacity = 0;
  });
});
glide.mount();

const isotope = new Isotope('.cases', {
  layoutMode: 'fitRows',
  itemSelector: '.case-item',
});

const filterBtns = document.querySelector('.filter-btns');
filterBtns.addEventListener('click', (e) => {
  const { target } = e;
  const filterOption = target.getAttribute('data-filter');
  console.log(filterOption);
  if (filterOption) {
    document
      .querySelectorAll('.filter-btn.active')
      .forEach((v) => v.classList.remove('active'));
    target.classList.add('active');
    isotope.arrange({
      filter: filterOption,
    });
  }
});
