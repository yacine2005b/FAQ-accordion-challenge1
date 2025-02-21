document.querySelectorAll('.container').forEach(container => {
    let paragraph = container.querySelector('p');
    let showButton = container.querySelector('.plus');
    let hideButton = container.querySelector('.minus');
  
    showButton.addEventListener('click', function() {
      paragraph.classList.remove('hidden');
      showButton.style.display = 'none';
      hideButton.style.display = 'block';
    });
  
    hideButton.addEventListener('click', function() {
      paragraph.classList.add('hidden');
      hideButton.style.display = 'none';
      showButton.style.display = 'block';
    });
  });