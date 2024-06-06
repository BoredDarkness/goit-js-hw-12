import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function renderImages(images, isNewQuery) {
  const gallery = document.querySelector('.gallery');
  const prevHeight = gallery.clientHeight;

  if (isNewQuery) {
    gallery.innerHTML = ''; // Очистити галерею, якщо це новий запит
  }

  const newImagesHtml = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>`).join('');

  gallery.insertAdjacentHTML('beforeend', newImagesHtml); // Додавання нових зображень до вже існуючих
  
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      caption: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh(); // Оновлення лайтбокса після додавання нових зображень
  }

  const newHeight = gallery.clientHeight;
  window.scrollBy({
    top: newHeight - prevHeight,
    behavior: 'smooth'
  });
}


export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  console.log('+');
  document.querySelector('.div-loader').classList.remove('hidden');
}

export function hideLoader() {
  console.log('-');
  document.querySelector('.div-loader').classList.add('hidden');
  }

export function toggleLoadMoreButton(show) {
  const loadMoreButton = document.querySelector('.load-more');
  if (show) {
    loadMoreButton.classList.remove('hidden');
  } else {
loadMoreButton.classList.add('hidden')
  }
}