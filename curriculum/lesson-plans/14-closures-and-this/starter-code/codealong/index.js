const onLoadHandler = () => {
  let count = 0;

  document.querySelector('#increase').addEventListener('click', function() {
    count = count + 1;
    console.log(count);
  });

  document.querySelector('#show').addEventListener('click', function() {
    alert(count);
  });
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
