import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoader,
  hideLoader,
  showEndOfResultsMessage,
  smoothScroll,
} from './js/render-functions.js';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadMore = document.getElementById('load-more');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
let loadedHits = 0;
let lightbox;

form.addEventListener('submit', async function (event) {
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

    currentQuery = searchQuery;
    currentPage = 1;
    loadedHits = 0;

    showLoader();
    gallery.innerHTML = '';
    loadMore.style.display = 'none';
    


    try {
      const { images, total } = await fetchImages(currentQuery, currentPage);
      totalHits = total;
      loadedHits += images.length;
      renderImages(images);

      if (lightbox) {
        lightbox.destroy();
      }

      lightbox = new SimpleLightbox('.gallery a'); 
      lightbox.refresh(); 

      iziToast.success({
        title: 'Success',
        message: `✅ Found ${images.length} images for "${searchQuery}"`,
      });

      if (images.length > 0 && loadedHits < totalHits) {
        loadMore.style.display = 'block';
       
      }

      if (loadedHits >= totalHits) {
        showEndOfResultsMessage();
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `❌ ${error.message}`,
      });
    } finally {
      hideLoader();
    }

    searchInput.value = '';
  });

  loadMore.addEventListener('click', async function () {
    currentPage += 1;
    showLoader();

    try {
      const { images } = await fetchImages(currentQuery, currentPage);
      loadedHits += images.length;
      renderImages(images);
      smoothScroll();

      if (lightbox) {
        lightbox.refresh(); 
      } else {
        lightbox = new SimpleLightbox('.gallery a');
      }

      if (loadedHits >= totalHits) {
        loadMore.style.display = 'none';
        showEndOfResultsMessage();
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `❌ ${error.message}`,
      });
    } finally {
      hideLoader();
    }
  });
