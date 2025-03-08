document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.getElementById('checkScore');
  const scoreSection = document.getElementById('scoreSection');
  const creditScoreElement = document.getElementById('creditScore');
  let isScoreVisible = false;
  
  checkButton.addEventListener('click', function() {
    if (!isScoreVisible) {
      // Show the score section
      scoreSection.classList.remove('hidden');
      checkButton.textContent = 'Hide Score';
      
      // Generate random score between 300 and 850
      const score = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
      
      // Animate the score counting up
      let currentScore = 0;
      const duration = 1000; // 1 second
      const interval = 10; // Update every 10ms
      const steps = duration / interval;
      const increment = score / steps;
      
      const counter = setInterval(() => {
        currentScore += increment;
        if (currentScore >= score) {
          currentScore = score;
          clearInterval(counter);
        }
        creditScoreElement.textContent = Math.round(currentScore);
      }, interval);
      
    } else {
      // Hide the score section
      scoreSection.classList.add('hidden');
      checkButton.textContent = 'Check Credit Score';
    }
    
    isScoreVisible = !isScoreVisible;
  });
}); 