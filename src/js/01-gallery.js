// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createImageCardsMarkup(galleryItems)
);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'image') {
    return;
  }

  const instance = basicLightbox.create(`
  <div class="modal">
<img
      class="gallery__image"
      src="${evt.target.dataset.source}" width = "800"
      alt="${evt.target.alt}"
    />
    </div>
`);

  instance.show();
}
