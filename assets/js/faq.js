document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    // Cierra otros
    document.querySelectorAll('.faq-item').forEach(i => {
      if(i !== item) i.classList.remove('open');
    });
  });
});
