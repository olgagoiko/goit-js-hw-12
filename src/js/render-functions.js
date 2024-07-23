import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="image-card">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${image.likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${image.views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${image.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${image.downloads}
        </p>
      </div>
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  
}

export function showLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'block';
  loaderContainer.innerHTML = `
    <div class="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `;
}

export function hideLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
  loaderContainer.innerHTML = '';
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
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

