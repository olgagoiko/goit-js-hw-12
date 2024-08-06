import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader');


export function renderImages(images) {
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="image-card">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p class="info-item">
          <b>Likes:</b> ${image.likes}
        </p>
        <p class="info-item">
          <b>Views:</b> ${image.views}
        </p>
        <p class="info-item">
          <b>Comments:</b> ${image.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b> ${image.downloads}
        </p>
      </div>
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  
}

export function showLoader() {
  loaderContainer.style.display = 'block';
  loader.style.display = 'inline-grid';
}

export function hideLoader() {
  loaderContainer.style.display = 'none';
  loader.style.display = '';
 
 }

export function showEndOfResultsMessage() {
  iziToast.info({
    title: 'Info',
    message: "We're sorry, but you've reached the end of search results.",
  });
}

export function smoothScroll() {
  const card = document.querySelector('.gallery .image-card');
  if (card) {
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 6,
      behavior: 'smooth',
    });
  }
}


