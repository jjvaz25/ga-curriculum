// import { firebaseConfig } from './keys.js';

const onLoadHandler = async () => {

};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
