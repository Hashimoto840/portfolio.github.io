"use strict";
"use strict";

// ハンバーガーメニュー
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

function openMenu() {
  hamburger.classList.add("active");
  nav.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}

/* ハンバーガー開閉 */
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();

  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

/* メニューリンククリック */
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // まず確実に閉じる
    closeMenu();

    // 同ページ内スクロールだけJS制御
    if (href.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      setTimeout(() => {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }, 350);
    }
  });
});

/* overlayクリックで閉じる */
overlay.addEventListener("click", () => {
  closeMenu();
});

//マウスストーカー
const stalker = document.getElementById("mouse-stalker");

if (stalker) {
  window.addEventListener("pointermove", function (e) {
    stalker.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });

  const linkElem = document.querySelectorAll("a:not(.no_stick_)");

  for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener("mouseover", function () {
      stalker.classList.add("is_active");
    });

    linkElem[i].addEventListener("mouseout", function () {
      stalker.classList.remove("is_active");
    });
  }
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
