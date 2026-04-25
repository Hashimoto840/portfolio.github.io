"use strict";

const openBtn = document.querySelector('.ham-open');
const nav = document.querySelector('.ham-nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

openBtn.addEventListener('click', () => {
    const isActive = nav.classList.toggle('active');
    overlay.classList.toggle('active');
    openBtn.classList.toggle('active');

    if (isActive) {
        // メニューを開いたとき
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
        // メニューを閉じたとき
        body.style.overflow = '';
        body.style.paddingRight = '';
    }
});

//マウスストーカー
const stalker = document.getElementById('mouse-stalker');
let hovFlag = false;

window.addEventListener('pointermove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });
}

// //フェードイン
// window.addEventListener('pageshow', () => {
//   document.body.classList.remove('is-hide');
//   document.body.classList.add('is-show');
// });

// //フェードアウト
// document.addEventListener('click', (e) => {
//   const link = e.target.closest('a');

//   if (!link) return;
//   if (link.target === '_blank') return;

//   const href = link.getAttribute('href');
//   if (!href || href.startsWith('#')) return;

//   e.preventDefault();

//   document.body.classList.remove('is-show');
//   document.body.classList.add('is-hide');

//   setTimeout(() => {
//     window.location.href = link.href;
//   }, 450);
// });

// フェードイン
window.addEventListener('pageshow', () => {
  document.body.classList.remove('is-hide');
  document.body.classList.add('is-show');
});

// フェードアウト
document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // ① 同一ページ内リンクはフェードなし
  if (link.hash && link.pathname === location.pathname) {
  return;
}

  // ② tel / mail / blank は除外
  if (
    link.target === '_blank' ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:')
  ) {
    return;
  }

  // フェード開始
  console.log("fade out start");
  e.preventDefault();

  document.body.classList.remove('is-show');
  document.body.classList.add('is-hide');

  setTimeout(() => {
    window.location.href = link.href;
  }, 450);
});


// //フェードインフェードアウト
// window.addEventListener('DOMContentLoaded', () => {
//   document.body.classList.add('is-show');
// });

// const links = document.querySelectorAll('a:not([target="_blank"])');

// links.forEach(link => {
//   link.addEventListener('click', e => {

//     const href = link.getAttribute('href');

//     /* ページ内リンク除外 */
//     if (href.startsWith('#')) return;

//     e.preventDefault();
//     const url = link.href;

//     document.body.classList.remove('is-show');
//     document.body.classList.add('is-hide');

//     setTimeout(() => {
//       window.location.href = url;
//     }, 450);
//   });
// });
// window.addEventListener('pageshow', () => {
//   document.body.classList.remove('is-hide');
//   document.body.classList.add('is-show');
// });
