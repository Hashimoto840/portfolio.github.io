"use strict";
//ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll("#nav a");

function closeMenu() {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

/* メニューリンククリック */
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // ← 先に止める

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    closeMenu(); // ← 先に閉じる

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }, 300); // ← 閉じるアニメ後に移動
  });
});

/* 背景クリック */
overlay.addEventListener("click", () => {
  closeMenu();
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

//フェード
// document.addEventListener('click', e => {
//   const link = e.target.closest('a');
//   if (!link) return;

//   const href = link.getAttribute('href');
//   if (!href) return;

//   /* ハンバーガーメニュー内リンクは除外 */
//   if (
//     link.closest("#nav") ||
//     (link.hash && link.pathname === location.pathname)
//   ) {
//     return;
//   }

//   if (
//     link.target === '_blank' ||
//     href.startsWith('tel:') ||
//     href.startsWith('mailto:')
//   ) {
//     return;
//   }

//   e.preventDefault();

//   document.body.classList.remove('is-show');
//   document.body.classList.add('is-hide');

//   setTimeout(() => {
//     window.location.href = link.href;
//   }, 450);
// });
