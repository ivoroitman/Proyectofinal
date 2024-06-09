document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const likeOverlay = document.getElementById('like-overlay');
    const dislikeOverlay = document.getElementById('dislike-overlay');
    
    cards.forEach(function(card) {
      card.addEventListener('click', function(e) {
        const target = e.target;
        
        if (target.classList.contains('btn-like')) {
          likeOverlay.style.display = 'block';
          setTimeout(function() {
            likeOverlay.style.display = 'none';
          }, 1000);
          // Aquí puedes añadir más acciones si le gusta la persona
        } else if (target.classList.contains('btn-dislike')) {
          dislikeOverlay.style.display = 'block';
          setTimeout(function() {
            dislikeOverlay.style.display = 'none';
          }, 1000);
          // Aquí puedes añadir más acciones si no le gusta la persona
        }
      });
    });
  });
  
  