!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=(e,t)=>{const r=t.querySelector("a");let o;o=r?r.getAttribute("href"):t.getAttribute("data-href");""===o.split("#")[0]&&(e.preventDefault(),document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"}))};var n=(e,t=!0)=>{const r=document.querySelectorAll(".popup");(e=>{r.forEach(r=>{r.id===e?(r.style.display="block",(e=>{const t=e.querySelector(".form-wrapper");t.animate([{opacity:"0"},{opacity:"1"}],600).addEventListener("finish",()=>t.style.opacity="1")})(r),t&&r.addEventListener("click",e=>{const t=e.target,n=t.closest(".form-content"),l=t.closest(".close_icon"),c=t.closest(".close-btn");(!n||l||c)&&"gift"===r.id&&document.querySelector(".fixed-gift").classList.remove("hide"),n&&!l||(r.style.display="none"),c&&(c.closest("#gift")&&o(e,c),r.style.display="none")})):r.style.display="none"})})(e)};var l=()=>{document.querySelectorAll(".js-modal").forEach(e=>{e.addEventListener("click",t=>{let r=e.getAttribute("data-popup");r=r.slice(1),"gift"===r&&t.target.closest(".fixed-gift").classList.add("hide"),n(r)})})};var c=()=>{const e=document.querySelector(".popup-menu"),t=document.querySelector(".menu__mobile"),r=document.querySelector(".head"),n=()=>{window.screen.width<768&&(window.pageYOffset>r.offsetHeight?t.classList.add("fixed"):t.classList.remove("fixed"))},l=()=>{window.addEventListener("scroll",n)};t.addEventListener("click",t=>{const r=t.target,n=r.closest(".menu-button img"),l=r.closest(".close-menu-btn img"),c=r.closest(".scroll");(n||l)&&e.classList.toggle("active"),c&&(o(t,c),e.classList.remove("active"))}),window.addEventListener("resize",()=>{window.screen.width<768?l():t.classList.remove("fixed")}),l()};var s=()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main"),r=()=>{const e=window.pageYOffset/40;window.pageYOffset>0&&(window.scrollBy(0,-e),setTimeout(r,0))};e.addEventListener("click",e=>{e.preventDefault(),r()}),window.addEventListener("scroll",()=>{window.pageYOffset>t.offsetHeight?e.classList.add("active"):e.classList.remove("active")})};var a=()=>{const e=document.querySelector(".calc"),t=document.getElementById("price-total"),r=document.querySelector(".promocode"),o=document.querySelector('.calc [name="card-type"]'),n=document.querySelector('.calc [name="club-name"]'),l={mozaika:{1:1999,6:9900,9:13900,12:19990},schelkovo:{1:2999,6:14990,9:21990,12:24990}};if(e){const c=e=>{const t=document.querySelectorAll(e);let r="";return t.forEach(e=>{e.checked&&(r=e.value)}),r},s=(t,o,n=!1)=>{let l=!1,c=!0,s=e.querySelectorAll("input");const a=+t.textContent,i=e=>{s.forEach(t=>{t.disabled=e})};""!==r.value&&"ТЕЛО2019"===r.value&&(o=Math.round(o-o/100*30)),n&&(o=Math.round(o/70*100)),a>o?c=!1:a<o&&(c=!0),l=c?setInterval((function(){1*t.innerHTML+50>=o?(t.innerHTML=o,clearInterval(l),i(!1)):(t.innerHTML=Math.round(1*t.innerHTML+50),i(!0))})):setInterval((function(){1*t.innerHTML-50<=o?(t.innerHTML=o,clearInterval(l),i(!1)):(t.innerHTML=Math.round(1*t.innerHTML-50),i(!0))}))},a=(e,r)=>{for(let o in l)if(e===o){const e=l[o];for(let o in e)r===o&&s(t,e[o])}};e.addEventListener("click",e=>{const t=e.target,r=t.closest('.calc [name="card-type"]'),o=t.closest('.calc [name="club-name"]');r&&a(c('.calc [name="club-name"]'),r.value),o&&a(o.value,c('.calc [name="card-type"]'))});let i=!1;r.addEventListener("change",e=>{const r=+t.textContent;let o=!1;""!==e.target.value&&"ТЕЛО2019"===e.target.value?(i=!0,s(t,r)):e.target.value="",""===e.target.value&&i&&(i=!1,o=!0,s(t,r,o))}),a(n.value,o.value)}};var i=()=>{const e=document.querySelectorAll("form");e.forEach(e=>{(e=>{e.addEventListener("submit",r=>{r.preventDefault();const o=[...e.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type),l=e.querySelectorAll(".club");let c=!0,s=!1,a=r.submitter;if(l.forEach(e=>{e.classList.remove("error"),e.querySelector('[name="club-name"]').checked&&(s=!0)}),o.forEach(e=>{e.name&&"name"===e.name?e.value.match(/^[^a-zA-Z][^a-zA-Z0-9-_\.]{1,20}$/)?e.style.border="2px solid green":(e.style.border="2px solid red",c=!1):e.name&&"phone"===e.name?e.value.match(/^\+?[78]([-\s()]*\d){10}$/)?e.style.border="2px solid green":(e.style.border="2px solid red",c=!1):e.name&&"check"===e.name?e.checked?e.closest(".personal-data").classList.remove("error"):(e.closest(".personal-data").classList.add("error"),c=!1):e.name&&"club-name"===e.name&&(s?c=!0:e.checked?e.closest(".club").classList.remove("error"):(e.closest(".club").classList.add("error"),c=!1))}),c){const r=new FormData(e),l=document.querySelector("#thanks .form-content");let c=l.querySelector("h4"),s=l.querySelector("p"),i={};c.innerHTML="Отправка!",s.innerHTML="Идет отпрака данных. <br> Данные отправляются в ближайшее время придет ответ.",l.querySelector("button").style.opacity=0,n("thanks",!1),a.disabled=!0,r.forEach((e,t)=>{i[t]=e});const d=()=>{o.forEach(e=>{"name"!==e.name&&"phone"!==e.name||(e.value="",e.style.border="",a.disabled=!1)})};t(i).then(e=>{if(200!==e.status)throw new Error("status network not 200");c.innerHTML="Спасибо!",s.innerHTML="Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.",l.querySelector("button").style.opacity=1,n("thanks"),d()}).catch(()=>{c.innerHTML="Ошибка!",s.innerHTML="Что-то пошло не так. <br> Мы уже разбираемся с этим.",l.querySelector("button").style.opacity=1,n("thanks"),d()})}})})(e)});const t=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var d=()=>{const e=document.querySelector(".gallery-slider.js-slider"),t=document.querySelector(".main-slider.js-slider"),r=(e,t)=>{if(!e)return;const r=e.querySelectorAll(".slide"),o=e.querySelector(".js-slider-dots");let n,l,c=0;o&&(()=>{n=document.createElement("div"),n.classList.add("slider-dot");for(let e=0;e<r.length;e++)n=n.cloneNode(),o.append(n);n=e.querySelectorAll(".slider-dot"),n[0].classList.add("dot-active")})();const s=(e,t,r)=>{e[t].classList.remove(r)},a=(e,t,r)=>{e[t].classList.add(r)},i=()=>{s(r,c,"slide-active"),o&&s(n,c,"dot-active"),c++,c>=r.length&&(c=0),a(r,c,"slide-active"),o&&a(n,c,"dot-active")},d=e=>{l=setInterval(i,e)};e.addEventListener("click",e=>{e.preventDefault();const t=e.target,o=t.closest(".slider-next"),l=t.closest(".slider-prev"),i=t.closest(".slider-dot");(o||l||i)&&(s(r,c,"slide-active"),s(n,c,"dot-active"),o?c++:l?c--:i&&n.forEach((e,r)=>{e===t&&(c=r)}),c>=r.length&&(c=0),c<0&&(c=r.length-1),a(r,c,"slide-active"),a(n,c,"dot-active"))}),t&&(e.addEventListener("mouseover",e=>{const t=e.target,r=t.closest(".slider-arrow"),o=t.closest(".slider-dot"),n=t.closest(".slide");(o||r||n)&&clearInterval(l)}),e.addEventListener("mouseout",e=>{const r=e.target,o=r.closest(".slider-arrow"),n=r.closest(".slider-dot"),l=r.closest(".slide");(n||o||l)&&d(t)}),d(t))};r(e,2e3),r(t,3e3)};(()=>{const e=document.querySelector(".clubs-list"),t=e.querySelector("p");t.addEventListener("click",()=>e.classList.toggle("active"))})(),l(),c(),s(),a(),i(),d()}]);