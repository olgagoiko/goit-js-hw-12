import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';

document.querySelector(".form").addEventListener('submit', function (event) {
  event.preventDefault();
  const searchInput = document.querySelector('input[name="delay"]');
  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  showLoader();

  fetchImages(searchQuery)
    .then(images => {
      const gallery = document.querySelector('.gallery');
      gallery.innerHTML = '';
      if (images.length === 0) {
        iziToast.warning({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoader();
        return;
      }
      renderImages(images);
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
      iziToast.success({
        title: 'Success',
        message: `✅ Found ${images.length} images for "${searchQuery}"`,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌ ${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
    });

  searchInput.value = ''; 
});
