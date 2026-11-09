'use strict';

const standardSizes = ['XS', 'S', 'M', 'L', 'XL'];
const chestGuide = 'Ориентир по обхвату груди: XS 84–89 см, S 90–95 см, M 96–101 см, L 102–107 см, XL 108–113 см.';
const waistGuide = 'Ориентир по обхвату талии: XS 64–69 см, S 70–75 см, M 76–81 см, L 82–87 см, XL 88–93 см.';

const products = [
  {
    id: 'shell', name: 'Куртка «Контур»', price: 12900, type: 'top',
    color: 'Мандарин', stage: '#c9baf0', tile: '#e1d6f6',
    features: [
      ['Ткань', 'Рипстоп, 100% нейлон', 36, 60],
      ['Капюшон', 'Регулируемый', 63, 17],
    ],
    sizes: standardSizes,
    description: 'Свободная куртка с высоким капюшоном и глубокими карманами на молниях. Матовый рипстоп держит форму, под курткой остаётся место для флиса.',
    guide: chestGuide,
  },
  {
    id: 'fleece', name: 'Флис «Иней»', price: 7400, type: 'top',
    color: 'Васильковый', stage: '#d5e0bb', tile: '#dbe4cb',
    features: [
      ['Ткань', 'Флис, 100% полиэстер', 30, 63],
      ['Плотность', '320 г/м²', 74, 48],
    ],
    sizes: standardSizes,
    description: 'Объёмный флис с высоким воротником, короткой молнией и карманом на груди. Мягкая фактура и свободный рукав позволяют носить его отдельным слоем.',
    guide: chestGuide,
  },
  {
    id: 'trousers', name: 'Брюки «Шаг»', price: 8600, type: 'bottom',
    color: 'Графит', stage: '#edc5ad', tile: '#efd8c8',
    features: [
      ['Ткань', 'Твил, 98% хлопок, 2% эластан', 37, 50],
      ['Посадка', 'Встроенный ремень', 54, 7],
    ],
    sizes: standardSizes,
    description: 'Брюки из плотного хлопкового твила с объёмом в колене и сужением к низу. Встроенный ремень регулирует посадку, боковой карман освобождает руки.',
    guide: waistGuide,
  },
  {
    id: 'raincoat', name: 'Плащ «Ливень»', price: 15800, type: 'top',
    color: 'Ежевичный', tile: '#e7dced', sizes: standardSizes, guide: chestGuide,
    description: 'Длинный плащ из матового нейлона с просторным капюшоном. Широкая планка прикрывает застёжку, а глубокие карманы спрятаны в боковых швах.',
  },
  {
    id: 'vest', name: 'Жилет «Вектор»', price: 6900, type: 'top',
    color: 'Тёмная олива', tile: '#e1e4d5', sizes: standardSizes, guide: chestGuide,
    description: 'Свободный жилет из плотной ткани с молнией и плоскими карманами. Широкие проймы позволяют надеть его поверх худи.',
  },
  {
    id: 'overshirt', name: 'Рубашка «Квартал»', price: 6800, type: 'top',
    color: 'Мох', tile: '#e5eadf', sizes: standardSizes, guide: chestGuide,
    description: 'Плотная хлопковая рубашка с прямым воротником и двумя карманами с клапанами. Носите застёгнутой или поверх лонгслива.',
  },
  {
    id: 'hoodie', name: 'Худи «Сумерки»', price: 7900, type: 'top',
    color: 'Бордовый', tile: '#ecdfe1', sizes: standardSizes, guide: chestGuide,
    description: 'Худи из плотного хлопкового трикотажа с мягкой изнанкой. Объёмный капюшон, спущенное плечо и карман спереди.',
  },
  {
    id: 'longsleeve', name: 'Лонгслив «Слой»', price: 4200, type: 'top',
    color: 'Овсяный', tile: '#ebe6d9', sizes: standardSizes, guide: chestGuide,
    description: 'Лонгслив из плотного хлопкового джерси. Прямой крой и тонкая окантовка горловины делают его удобным нижним слоем.',
  },
  {
    id: 'chinos', name: 'Брюки «Переулок»', price: 8300, type: 'bottom',
    color: 'Табачный', tile: '#eadcca', sizes: standardSizes, guide: waistGuide,
    description: 'Прямые брюки из хлопкового твила со складками у пояса, шлёвками и косыми карманами. Свободная посадка по бедру.',
  },
  {
    id: 'shorts', name: 'Шорты «Вираж»', price: 5600, type: 'bottom',
    color: 'Стальной синий', tile: '#dde4ed', sizes: standardSizes, guide: waistGuide,
    description: 'Прямые шорты до колена из плотного нейлона. Встроенный ремень регулирует талию, два кармана закрываются на молнию.',
  },
  {
    id: 'beanie', name: 'Шапка «Линия»', price: 2800, type: 'accessory',
    color: 'Охра', tile: '#f4e9d3', sizes: ['Единый'],
    description: 'Короткая шапка из шерстяной смеси с широкой манжетой. Эластичная вязка в рубчик держит форму.',
    guide: 'Подходит на обхват головы 54–60 см.',
  },
  {
    id: 'sling', name: 'Сумка «Маршрут»', price: 4900, type: 'accessory',
    color: 'Чернильный синий', tile: '#dedfec', sizes: ['Единый'],
    description: 'Компактная сумка через плечо из плотного канваса. Регулируемая стропа, карман на молнии и мягкий корпус.',
    guide: 'Размер сумки 28 × 16 × 7 см. Длина стропы регулируется от 65 до 115 см.',
  },
];

const byId = id => products.find(product => product.id === id);
const capsule = ['shell', 'fleece', 'trousers'].map(byId);
const imagePath = (product, small = false) => 'assets/' + product.id + (small ? '-small' : '') + '.webp';
const money = value => value.toLocaleString('ru-RU') + ' ₽';
const select = selector => document.querySelector(selector);
const icon = name => '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

const hero = select('.hero');
const citySequence = select('.city-sequence');
const cityChapter = select('.city-chapter');
const cityBackdrop = select('.city-depth');
const cityImage = cityBackdrop.querySelector('img');
const cityTimeline = typeof ScrollTimeline === 'function' && 'rangeStart' in Animation.prototype
  ? new ScrollTimeline({ source: document.scrollingElement, axis: 'block' })
  : null;
const frames = select('.hero-frames');
const heroButton = select('#hero-product');
const float = select('.hero-float');
const wires = select('.hero-wires');
const anchors = select('.hero-anchors');
const wirePaths = [...wires.querySelectorAll('path')];
const wireDots = [...wires.querySelectorAll('circle')];
const featureCards = [...hero.querySelectorAll('.hero-feature')];
const anchorPoints = [...hero.querySelectorAll('.hero-anchor')];
const compactHero = matchMedia('(max-width: 600px)');
const story = select('.story-window');
const zipperScene = select('.zipper-story');
const zipperArt = zipperScene.querySelector('.zipper-art');
const zipperCopy = zipperScene.querySelector('.zipper-copy');
const zipperPhoto = zipperArt.querySelector('.zipper-fabric');
const zipperLining = zipperArt.querySelector('.zipper-lining');
const zipperPull = zipperArt.querySelector('.zipper-pull');
const zipperCanvas = zipperArt.querySelector('.zipper-surface');
const status = select('#status');
const pictures = new Map();
let currentIndex = 0;
let requestedIndex = 0;
let transitionVersion = 0;
const initialItem = frames.firstElementChild;
let activeFrame = initialItem;
let slideTransition;
const initialImageReady = initialItem.decode();
hero.classList.add('is-loading');
updateFeatures(capsule[0]);
initialImageReady.then(() => {
  if (activeFrame !== initialItem) return;
  initialItem.classList.add('is-current');
  hero.classList.remove('is-loading');
  const entrance = initialItem.getAnimations().find(animation => animation.animationName === 'item-in');
  const finish = () => {
    initialItem.classList.remove('is-current');
    revealWires(initialItem);
  };
  if (entrance) entrance.finished.then(finish, finish);
  else finish();
}).catch(() => {});

function updateFeatures(product) {
  hero.classList.remove('has-wires');
  product.features.forEach(([label, value, x, y], index) => {
    featureCards[index].querySelector('dt').textContent = label;
    featureCards[index].querySelector('dd').textContent = value;
    anchorPoints[index].style.setProperty('--point-x', x + '%');
    anchorPoints[index].style.setProperty('--point-y', y + '%');
  });
}

function revealWires(image) {
  document.fonts.ready.then(() => {
    if (activeFrame !== image || !image.naturalWidth) return;
    updateWireGeometry();
    hero.classList.add('has-wires');
    scheduleWires();
  });
}

function loadSlide(index) {
  if (!pictures.has(index)) {
    const image = new Image(900, 900);
    image.className = 'hero-item';
    image.alt = '';
    image.draggable = false;
    image.decoding = 'async';
    image.src = imagePath(capsule[index]);
    pictures.set(index, image.decode().then(() => image).catch(error => {
      pictures.delete(index);
      throw error;
    }));
  }
  return pictures.get(index);
}

function settleSlide() {
  if (!slideTransition) return;
  const { outgoing, animations } = slideTransition;
  slideTransition = null;
  outgoing.remove();
  animations.forEach(animation => animation.cancel());
}

async function slide(direction) {
  requestedIndex = (requestedIndex + direction + capsule.length) % capsule.length;
  const index = requestedIndex;
  const version = ++transitionVersion;
  if (index === currentIndex) return;
  let next;
  try {
    next = (await loadSlide(index)).cloneNode();
    await next.decode();
  } catch {
    if (version === transitionVersion) {
      requestedIndex = currentIndex;
      status.textContent = 'Фото не загрузилось. Попробуйте переключить ещё раз.';
    }
    return;
  }
  if (version !== transitionVersion) return;
  settleSlide();
  const old = activeFrame;
  old.classList.remove('is-current');
  const product = capsule[index];
  currentIndex = index;
  activeFrame = next;
  frames.append(next);
  hero.classList.remove('is-loading');
  citySequence.style.setProperty('--stage', product.stage);
  updateFeatures(product);
  heroButton.dataset.product = product.id;
  heroButton.innerHTML = product.name + ' ' + icon('diag');
  select('#hero-price').textContent = money(product.price);
  const count = select('#hero-count');
  count.firstChild.nodeValue = String(index + 1).padStart(2, '0') + ' ';
  count.setAttribute('aria-label', 'Вещь ' + (index + 1) + ' из ' + capsule.length);

  if (reduceMotion.matches) {
    old.remove();
    revealWires(next);
    return;
  }
  const ease = 'cubic-bezier(.22,1,.36,1)';
  const outgoing = old.animate(
    [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(' + (-direction * 19) + '%) translateY(4%) rotate(' + (-direction * 6) + 'deg) scale(.91)' }],
    { duration: 400, easing: ease, fill: 'forwards' }
  );
  const incoming = next.animate(
    [{ opacity: .74, transform: 'translateX(' + (direction * 17) + '%) translateY(8%) rotate(' + (direction * 5) + 'deg) scale(.92)' }, { opacity: 1, transform: 'none' }],
    { duration: 640, easing: ease }
  );
  const transition = { outgoing: old, animations: [outgoing, incoming] };
  slideTransition = transition;
  Promise.allSettled(transition.animations.map(animation => animation.finished)).then(() => {
    if (slideTransition !== transition) return;
    settleSlide();
    revealWires(next);
  });
}

select('#previous').addEventListener('click', () => slide(-1));
select('#next').addEventListener('click', () => slide(1));
hero.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  slide(event.key === 'ArrowRight' ? 1 : -1);
});
let touchStart;
hero.addEventListener('touchstart', event => {
  if (event.touches.length === 1 && !event.target.closest('button, a')) {
    const point = event.touches[0];
    touchStart = [point.clientX, point.clientY];
  }
}, { passive: true });
hero.addEventListener('touchcancel', () => { touchStart = null; });
hero.addEventListener('touchend', event => {
  if (!touchStart) return;
  const point = event.changedTouches[0];
  const dx = point.clientX - touchStart[0];
  const dy = point.clientY - touchStart[1];
  touchStart = null;
  if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy) * 1.4) slide(dx < 0 ? 1 : -1);
}, { passive: true });
window.addEventListener('load', () => {
  if (navigator.connection?.saveData) return;
  const preloadSlides = () => capsule.forEach((_, index) => {
    if (index !== 0) loadSlide(index).catch(() => {});
  });
  if ('requestIdleCallback' in window) requestIdleCallback(preloadSlides, { timeout: 1200 });
  else setTimeout(preloadSlides, 500);
}, { once: true });

const grid = select('#products');
grid.innerHTML = products.map(product => `
  <article class="product-card" data-type="${product.type}" style="--tile:${product.tile}">
    <button class="product-open" type="button" data-product="${product.id}" aria-haspopup="dialog">
      <span class="product-picture">
        <img data-src="${imagePath(product, true)}" alt="" width="480" height="480" decoding="async" fetchpriority="low">
        <span class="circle product-arrow">${icon('diag')}</span>
      </span>
      <span class="product-caption"><span>${product.name}</span><span class="price">${money(product.price)}</span></span>
      <span class="product-color">${product.color}</span>
    </button>
  </article>
`).join('');

const cards = [...grid.children];
const mediaObserver = new IntersectionObserver((entries, observer) => {
  for (const { target: element, isIntersecting } of entries) {
    if (!isIntersecting) continue;
    observer.unobserve(element);
    const images = [...element.querySelectorAll('img[data-src]')];
    for (const image of images) image.src = image.dataset.src;
    if (element === zipperScene) {
      Promise.allSettled(images.map(image => image.decode())).then(() => {
        zipperReady = zipperPhoto.naturalWidth > 0 && zipperPull.naturalWidth > 0;
        scheduleScroll();
      });
    } else {
      const [image] = images;
      image.decode().then(() => image.classList.add('is-loaded')).catch(() => {});
    }
  }
}, { rootMargin: '380px 0px' });
cards.forEach(card => mediaObserver.observe(card));
mediaObserver.observe(zipperScene);
const cardObserver = new IntersectionObserver(entries => {
  for (const { target, isIntersecting } of entries) {
    if (!isIntersecting) continue;
    target.classList.add('has-arrived');
    cardObserver.unobserve(target);
  }
});
cards.forEach(card => cardObserver.observe(card));

const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  for (const option of filters) option.setAttribute('aria-pressed', String(option === button));
  for (const card of cards) card.hidden = button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter;
}));

const target = { x: 0, y: 0 };
const position = { x: 0, y: 0 };
let pointerFrame = 0;
let scrollFrame = 0;
let heroVisible = true;
let cityVisible = true;
let cityStart = 0;
let cityAnimations = [];
let storyVisible = false;
let zipperVisible = false;
let zipperReady = false;
let zipperContext;
let zipperLayout;
let wireFrame = 0;
let followingFloat = false;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function scheduleWires() {
  if (heroVisible && !wireFrame && hero.classList.contains('has-wires')) {
    wireFrame = requestAnimationFrame(paintWires);
  }
}
function paintWires() {
  wireFrame = 0;
  if (!heroVisible || !hero.classList.contains('has-wires')) return;
  updateWireGeometry();
  if (followingFloat) scheduleWires();
}
function updateWireGeometry() {
  const base = wires.getBoundingClientRect();
  const notes = featureCards.map(card => card.getBoundingClientRect());
  const points = anchorPoints.map(point => point.getBoundingClientRect());
  const compact = compactHero.matches;
  points.forEach((point, index) => {
    const note = notes[index];
    const x = point.left - base.left;
    const y = point.top - base.top;
    const startX = (compact ? note.left + note.width / 2 : index === 0 ? note.right : note.left) - base.left;
    const startY = (compact ? note.top : note.top + note.height / 2) - base.top;
    const distanceX = x - startX;
    const outX = startX + distanceX * (index === 0 ? .68 : .48);
    const inX = x - distanceX * (index === 0 ? .13 : .48);
    const bendY = (y - startY) * .44;
    const curve = compact
      ? `C ${startX} ${startY + bendY} ${x} ${y - bendY} ${x} ${y}`
      : `C ${outX} ${startY} ${inX} ${y} ${x} ${y}`;
    wirePaths[index].setAttribute('d', `M ${startX} ${startY} ${curve}`);
    wireDots[index].setAttribute('cx', x);
    wireDots[index].setAttribute('cy', y);
  });
}
float.addEventListener('animationstart', event => {
  if (event.animationName !== 'float') return;
  followingFloat = true;
  scheduleWires();
});
for (const eventName of ['animationend', 'animationcancel']) {
  float.addEventListener(eventName, event => {
    if (event.animationName !== 'float') return;
    followingFloat = false;
    scheduleWires();
  });
}
const featureObserver = new ResizeObserver(entries => {
  for (const { target: element, contentRect } of entries) {
    if (element === float) anchors.style.width = Math.min(contentRect.width, contentRect.height) + 'px';
  }
  scheduleWires();
});
featureObserver.observe(hero);
featureObserver.observe(float);
featureCards.forEach(card => featureObserver.observe(card));

function paintPointer() {
  pointerFrame = 0;
  const k = .14;
  position.x += (target.x - position.x) * k;
  position.y += (target.y - position.y) * k;
  const values = {
    '--x': position.x * 22 + 'px',
    '--y': position.y * 18 + 'px',
    '--tilt': position.x * 3 - position.y * 1.4 + 'deg',
    '--shade-x': position.x * 10 + 'px',
    '--shade-y': position.y * 4 + 'px',
    '--shade-scale': 1 - Math.abs(position.y) * .1,
  };
  for (const [key, value] of Object.entries(values)) hero.style.setProperty(key, value);
  scheduleWires();
  if (Math.abs(target.x - position.x) + Math.abs(target.y - position.y) > .003) schedulePointer();
}
function schedulePointer() {
  if (heroVisible && !pointerFrame && !reduceMotion.matches) pointerFrame = requestAnimationFrame(paintPointer);
}
hero.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch' || !finePointer.matches || reduceMotion.matches) return;
  const bounds = hero.getBoundingClientRect();
  target.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
  target.y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
  schedulePointer();
}, { passive: true });
hero.addEventListener('pointerleave', () => {
  target.x = target.y = 0;
  schedulePointer();
});

function cityTrack(element, keyframes, length) {
  const timing = cityTimeline
    ? { timeline: cityTimeline, rangeStart: cityStart + 'px', rangeEnd: (cityStart + length) + 'px' }
    : { duration: length };
  const animation = element.animate(keyframes, { fill: 'both', ...timing });
  if (!cityTimeline) animation.pause();
  return { animation, length };
}
function syncCityScroll() {
  const distance = window.scrollY - cityStart;
  for (const { animation, length } of cityAnimations) {
    animation.currentTime = clamp(distance, 0, length);
  }
}
function measureCity() {
  for (const { animation } of cityAnimations) animation.cancel();
  cityAnimations = [];
  if (reduceMotion.matches || !cityImage.naturalWidth) {
    citySequence.classList.remove('has-city-motion');
    return;
  }

  const frame = citySequence.getBoundingClientRect();
  const heroBox = hero.getBoundingClientRect();
  const chapterHeight = cityChapter.offsetHeight;
  const photoHeight = Math.max(frame.height, Math.ceil(frame.width * cityImage.naturalHeight / cityImage.naturalWidth));
  const radius = getComputedStyle(citySequence).getPropertyValue('--city-radius').trim();
  const closed = `inset(0px ${heroBox.left - frame.left}px 0px round ${radius})`;
  const open = 'inset(0px 0px 0px round 0px)';
  const closeStart = heroBox.height + chapterHeight * .11;
  const frameLength = closeStart + chapterHeight * .56;
  const edgeEase = 'cubic-bezier(.42,0,.58,1)';
  cityStart = Math.max(0, frame.top + window.scrollY - 60);

  citySequence.style.setProperty('--city-photo-height', photoHeight + 'px');
  citySequence.classList.add('has-city-motion');
  cityAnimations = [
    cityTrack(cityBackdrop, [
      { clipPath: closed, offset: 0, easing: edgeEase },
      { clipPath: open, offset: heroBox.height * .39 / frameLength },
      { clipPath: open, offset: closeStart / frameLength, easing: edgeEase },
      { clipPath: closed, offset: 1 },
    ], frameLength),
    cityTrack(cityImage, [
      { transform: `translate3d(0,${heroBox.height * .57}px,0) scale(1)`, easing: 'cubic-bezier(.24,.31,.65,.88)' },
      { transform: `translate3d(0,${frame.height - photoHeight * 1.085}px,0) scale(1.085)` },
    ], heroBox.height * .78 + chapterHeight * .15),
  ];
  if (!cityTimeline) syncCityScroll();
}

function measureZipper() {
  const cssWidth = zipperArt.clientWidth;
  const cssHeight = zipperArt.clientHeight;
  if (!cssWidth || !cssHeight) return;
  const maxDensity = compactHero.matches ? 1 : 1.35;
  const density = Math.min(devicePixelRatio, maxDensity, Math.sqrt(520000 / (cssWidth * cssHeight)));
  const width = zipperCanvas.width = Math.round(cssWidth * density);
  const height = zipperCanvas.height = Math.round(cssHeight * density);
  const scale = Math.max(width / zipperPhoto.naturalWidth, height / zipperPhoto.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const photo = document.createElement('canvas');
  photo.width = width;
  photo.height = height;
  photo.getContext('2d', { alpha: false }).drawImage(zipperPhoto,
    (zipperPhoto.naturalWidth - sourceWidth) / 2, (zipperPhoto.naturalHeight - sourceHeight) / 2,
    sourceWidth, sourceHeight, 0, 0, width, height);
  const start = cssHeight * .22;
  const copyLimit = zipperCopy.offsetTop - zipperArt.offsetTop - zipperPull.offsetHeight * .84 - 12;
  const end = compactHero.matches ? clamp(copyLimit, start + 20, cssHeight * .79) : cssHeight * .83;
  return {
    width, height, cssHeight, start, end, photo,
    rowHeight: Math.max(3, Math.ceil(height / 150)),
  };
}

function paintZipper(progress) {
  if (!zipperReady) return;
  if (zipperContext === undefined) zipperContext = zipperCanvas.getContext('2d', { alpha: false });
  if (!zipperContext) return;
  zipperLayout ??= measureZipper();
  if (!zipperLayout || zipperLayout.progress === progress) return;
  zipperLayout.progress = progress;
  const { width, height, cssHeight, start, end, photo, rowHeight } = zipperLayout;
  const ctx = zipperContext;
  const middle = width / 2;
  const slider = start + (end - start) * progress;
  const joined = Math.round(slider * height / cssHeight);
  zipperArt.style.setProperty('--zip-y', (slider - start) + 'px');

  if (progress === 0) {
    ctx.drawImage(photo, 0, 0);
  } else {
    ctx.fillStyle = '#292231';
    ctx.fillRect(width * .25, 0, width * .5, joined);
    if (zipperLining.naturalWidth) {
      ctx.globalAlpha = .58;
      ctx.drawImage(zipperLining, 12, 32, 65, 170 * joined / height, width * .25, 0, width * .5, joined);
      ctx.globalAlpha = 1;
    }

    // Each scan band reshapes the same photo from the outer edge to the teeth.
    // Below the slider the original, closed seam continues in one piece.
    const opening = width * .195 * progress;
    for (let y = 0; y < joined; y += rowHeight) {
      const band = Math.min(rowHeight, joined - y);
      const distance = (joined - y - band / 2) / joined;
      const spread = opening * Math.pow(distance, 1.38);
      const left = middle - spread * (.94 + distance * .07);
      const right = middle + spread * (1.06 - distance * .08);
      ctx.drawImage(photo, 0, y, middle, band, 0, y, left, band);
      ctx.drawImage(photo, middle, y, middle, band, right, y, width - right, band);
    }
    ctx.drawImage(photo, 0, joined, width, height - joined, 0, joined, width, height - joined);
  }
  if (zipperCanvas.hidden) zipperCanvas.hidden = false;
}

function paintScroll() {
  scrollFrame = 0;
  if (reduceMotion.matches) return;
  const height = window.innerHeight;
  if (!cityTimeline && cityVisible) syncCityScroll();
  if (heroVisible) {
    const bounds = hero.getBoundingClientRect();
    const progress = clamp(-bounds.top / bounds.height, 0, 1);
    hero.style.setProperty('--type-y', -progress * 34 + 'px');
    hero.style.setProperty('--item-y', progress * 54 + 'px');
    scheduleWires();
  }
  if (storyVisible) {
    const bounds = story.getBoundingClientRect();
    const approach = clamp((height - bounds.top) / Math.min(height * .57, bounds.height * .74), 0, 1);
    const travel = clamp((height - bounds.top) / (height + bounds.height), 0, 1);
    story.style.setProperty('--crop', (1 - approach) * 5.5 + '%');
    story.style.setProperty('--photo-y', (travel - .5) * Math.min(110, bounds.height * .17) + 'px');
    story.style.setProperty('--story-y', (1 - approach) * 28 + 'px');
  }
  if (zipperVisible) {
    const bounds = zipperScene.getBoundingClientRect();
    const progress = clamp((height * .82 - bounds.top) / (height * .48 + bounds.height * .25), 0, 1);
    paintZipper(progress);
  }
}
function scheduleScroll() {
  if ((heroVisible || storyVisible || zipperVisible || (!cityTimeline && cityVisible)) && !scrollFrame && !reduceMotion.matches) {
    scrollFrame = requestAnimationFrame(paintScroll);
  }
}
const sceneObserver = new IntersectionObserver(entries => {
  for (const { target: element, isIntersecting } of entries) {
    if (element === hero) {
      heroVisible = isIntersecting;
      hero.classList.toggle('is-away', !isIntersecting);
      if (isIntersecting) {
        schedulePointer();
        scheduleWires();
      }
    } else if (element === citySequence) {
      cityVisible = isIntersecting;
    } else if (element === zipperScene) {
      zipperVisible = isIntersecting;
    } else {
      storyVisible = isIntersecting;
      if (!isIntersecting) story.style.removeProperty('--crop');
    }
  }
  scheduleScroll();
});
sceneObserver.observe(hero);
sceneObserver.observe(citySequence);
sceneObserver.observe(story);
sceneObserver.observe(zipperScene);
const zipperResizeObserver = new ResizeObserver(() => {
  zipperLayout = null;
  scheduleScroll();
});
zipperResizeObserver.observe(zipperArt);
zipperResizeObserver.observe(zipperCopy);
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', scheduleScroll, { passive: true });
const cityResizeObserver = new ResizeObserver(measureCity);
cityResizeObserver.observe(citySequence);
cityResizeObserver.observe(hero);
cityResizeObserver.observe(cityChapter);
cityImage.addEventListener('load', measureCity);
const materials = select('.city-materials');
const materialObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  observer.disconnect();
  for (const image of materials.querySelectorAll('img[data-src]')) image.src = image.dataset.src;
}, { rootMargin: '120px' });
initialImageReady.catch(() => {}).then(() => materialObserver.observe(materials));
reduceMotion.addEventListener('change', () => {
  settleSlide();
  activeFrame.classList.remove('is-current');
  if (reduceMotion.matches) {
    revealWires(activeFrame);
  }
  measureCity();
  scheduleWires();
  scheduleScroll();
  schedulePointer();
});

const productDialog = select('#product-dialog');
const cartDialog = select('#cart-dialog');
const cartContent = select('#cart-content');
const sizeForm = select('#size-form');
const cartKey = 'prosloy-cart-v1';
let cart = readCart();
let activeProduct;
let lastTrigger;
let didOrder = false;

function readCart() {
  try {
    const data = JSON.parse(localStorage.getItem(cartKey));
    if (!Array.isArray(data)) return [];
    return data.filter(row => row && byId(row.id)?.sizes.includes(row.size) && Number.isInteger(row.qty) && row.qty >= 1 && row.qty <= 99);
  } catch {
    return [];
  }
}

function persistCart() {
  try { localStorage.setItem(cartKey, JSON.stringify(cart)); } catch { /* The active session still has its cart. */ }
  select('[data-cart-count]').textContent = cart.reduce((total, row) => total + row.qty, 0);
}
persistCart();

function showProduct(product, trigger) {
  lastTrigger = trigger;
  activeProduct = product;
  const image = select('#detail-image img');
  image.src = imagePath(product);
  image.alt = product.name + ', ' + product.color.toLowerCase();
  select('#detail-image').style.setProperty('--tile', product.tile);
  select('#product-title').textContent = product.name;
  select('#detail-price').textContent = money(product.price);
  select('#detail-description').textContent = product.description;
  select('#detail-color').textContent = 'Цвет: ' + product.color;
  select('#size-guide').textContent = product.guide;
  productDialog.querySelector('details').open = false;
  select('#sizes').innerHTML = product.sizes.map(size =>
    '<label><input type="radio" name="size" value="' + size + '" required' + (product.sizes.length === 1 ? ' checked' : '') + '><span>' + size + '</span></label>'
  ).join('');
  productDialog.showModal();
  productDialog.scrollTop = 0;
}

function renderCart() {
  const summary = select('#cart-footer');
  summary.hidden = !cart.length;
  if (didOrder) {
    cartContent.innerHTML = `<div class="cart-message">${icon('check')}<h3 tabindex="-1">Демозаказ готов</h3><p>Оформление завершено. Списаний и доставки по этому заказу не будет.</p><button class="pill pill-dark" type="button" data-close>Продолжить просмотр ${icon('right')}</button></div>`;
    return;
  }
  if (!cart.length) {
    cartContent.innerHTML = `<div class="cart-message"><h3>Пока пусто</h3><p>Выберите вещь из коллекции и укажите размер.</p><a class="pill pill-dark" href="#collection" data-close>К коллекции ${icon('right')}</a></div>`;
    return;
  }
  cartContent.innerHTML = cart.map((row, index) => {
    const product = byId(row.id);
    return `<article class="cart-row">
      <img src="${imagePath(product, true)}" alt="" width="76" height="76" style="--tile:${product.tile}">
      <div>
        <h3>${product.name}</h3><p>Размер ${row.size}</p>
        <div class="qty" role="group" aria-label="Количество, ${product.name}, ${row.size}">
          <button type="button" data-row="${index}" data-delta="-1" aria-label="${row.qty === 1 ? 'Убрать из корзины' : 'Уменьшить количество'}">${icon(row.qty === 1 ? 'close' : 'minus')}</button>
          <span>${row.qty}</span>
          <button type="button" data-row="${index}" data-delta="1" aria-label="Увеличить количество" ${row.qty >= 99 ? 'disabled' : ''}>${icon('plus')}</button>
        </div>
      </div>
      <p class="line-price">${money(product.price * row.qty)}</p>
    </article>`;
  }).join('');
  select('#cart-total').textContent = money(cart.reduce((total, row) => total + byId(row.id).price * row.qty, 0));
}

function showCart() {
  didOrder = false;
  renderCart();
  cartDialog.showModal();
  cartContent.scrollTop = 0;
}

document.addEventListener('click', event => {
  const product = event.target.closest('[data-product]');
  const openCart = event.target.closest('[data-open-cart]');
  const close = event.target.closest('[data-close]');
  const quantity = event.target.closest('[data-delta]');
  if (product) showProduct(byId(product.dataset.product), product);
  if (openCart) {
    lastTrigger = openCart;
    showCart();
  }
  if (close) close.closest('dialog').close();
  if (quantity) {
    const index = Number(quantity.dataset.row);
    const change = Number(quantity.dataset.delta);
    const row = cart[index];
    row.qty += change;
    if (row.qty <= 0) cart.splice(index, 1);
    persistCart();
    const scroll = cartContent.scrollTop;
    renderCart();
    cartContent.scrollTop = scroll;
    const sameButton = cartContent.querySelector('[data-row="' + index + '"][data-delta="' + change + '"]:not(:disabled)');
    const fallback = cartContent.querySelector('button:not(:disabled), a') || cartDialog.querySelector('[data-close]');
    (sameButton || fallback).focus({ preventScroll: true });
    status.textContent = cart.length ? 'Итого ' + select('#cart-total').textContent : 'Корзина пуста';
  }
});

for (const dialog of [productDialog, cartDialog]) {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (!productDialog.open && !cartDialog.open && lastTrigger?.isConnected) {
      lastTrigger.focus({ preventScroll: true });
    }
  });
}
sizeForm.addEventListener('submit', event => {
  event.preventDefault();
  const size = new FormData(sizeForm).get('size');
  if (!activeProduct.sizes.includes(size)) return;
  const row = cart.find(item => item.id === activeProduct.id && item.size === size);
  if (row) row.qty = Math.min(99, row.qty + 1);
  else cart.push({ id: activeProduct.id, size, qty: 1 });
  persistCart();
  productDialog.close();
  showCart();
  status.textContent = activeProduct.name + ' в корзине';
});
select('#checkout').addEventListener('click', () => {
  if (!cart.length) return;
  cart = [];
  didOrder = true;
  persistCart();
  renderCart();
  cartContent.querySelector('h3').focus({ preventScroll: true });
});
window.addEventListener('storage', event => {
  if (event.key !== cartKey && event.key !== null) return;
  cart = readCart();
  persistCart();
  if (cartDialog.open && !didOrder) renderCart();
});
