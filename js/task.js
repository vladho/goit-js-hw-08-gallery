// option 1 (без перелистывания)

// import gallery from "./gallery-items.js";

// const galleryRef = document.querySelector(".js-gallery");

// //создаем галлерею

// gallery.forEach((elem) => {
//   // console.log(elem.original)
//   const createItem = `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${elem.original}"
//   >
//     <img
//       class="gallery__image"
//       src="${elem.preview}"
//       data-source="${elem.original}"
//       alt="${elem.description}"
//     />
//   </a>
// </li>`;
//   galleryRef.insertAdjacentHTML("afterbegin", createItem);
// });

// const openModal = document.querySelector(".js-lightbox");
// const galleryTarget = document.querySelectorAll(".gallery__item");
// const imageForModal = document.querySelector(".lightbox__image");

// const closeModalOnEmptyPlace = document.querySelector(".lightbox__overlay");
// const closeBtn = document.querySelector('button[data-action="close-lightbox"]');

// galleryTarget.forEach((elem) => {
//     elem.addEventListener("click", (event) => {
//         event.preventDefault();
//         openModal.classList.add("is-open");
//         imageForModal.setAttribute("src", event.target.getAttribute("data-source"));
//     });

//     closeModalOnEmptyPlace.addEventListener("click", () => {
//         openModal.classList.remove("is-open");
//         imageForModal.setAttribute("src", "");
//     });
//     closeBtn.addEventListener("click", () => {
//         openModal.classList.remove("is-open");
//         imageForModal.setAttribute("src", "");
//     });
// });

// window.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//         openModal.classList.remove("is-open");
//         imageForModal.setAttribute("src", "");
//     }
// });

// // // option 2 (апгрейднул код и добавил перелистывания)

import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");


//создаем галлерею

gallery.forEach((elem) => {
  const createItem = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${elem.original}"
  >
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`;
  galleryRef.insertAdjacentHTML("afterbegin", createItem);
});

const allImageArray = document.querySelectorAll(".gallery__image");

const openModal = document.querySelector(".js-lightbox");
const imageForModal = document.querySelector(".lightbox__image");

const closeModalOnEmptyPlace = document.querySelector(".lightbox__overlay");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');


//открытие модалки
galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  openModal.classList.add("is-open");
  // таргет по картинке и присвоение его даты в главное окно модалки
    imageForModal.src = event.target.dataset.source;
});

//закрытие модалки
const closeModal = () => {
  openModal.classList.remove("is-open");
  imageForModal.setAttribute("src", "");
};

closeModalOnEmptyPlace.addEventListener("click", () => closeModal());
closeBtn.addEventListener("click", () => closeModal());
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
});

   //меняем картинку

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        for (let i = 0; i < gallery.length; i += 1) {
            allImageArray[i].setAttribute("data-index", i)
            if (allImageArray[i].dataset.source === imageForModal.src) {
                if (i < gallery.length - 1) {
                    return imageForModal.src = allImageArray[i + 1].dataset.source
                } else {
                    return imageForModal.src = allImageArray[gallery.length - 1].dataset.source
                }
            }
        }
    }
    if (event.code === "ArrowLeft") {
        for (let i = 0; i < gallery.length; i += 1) {
            allImageArray[i].setAttribute("data-index", i)
            if (allImageArray[i].dataset.source === imageForModal.src) {
                if (i > 0) {
                    return imageForModal.src = allImageArray[i - 1].dataset.source
                } else {
                    return imageForModal.src = allImageArray[0].dataset.source
                }
            }
        }
  }
});


