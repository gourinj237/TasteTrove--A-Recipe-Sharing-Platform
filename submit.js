 
    const form = document.getElementById('recipeForm');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent page reload

      // Basic validation (can be expanded)
      const name = document.getElementById('recipeName').value.trim();
      const ingredients = document.getElementById('ingredients').value.trim();
      const instructions = document.getElementById('instructions').value.trim();

      if (name && ingredients && instructions) {
        successMsg.style.display = 'block';
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
