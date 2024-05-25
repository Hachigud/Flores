onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };




  document.getElementById('volverBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});