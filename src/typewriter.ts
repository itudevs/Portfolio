export function initializeTypewriter() {
  const element = document.getElementById('typewriter');
  if (!element) return;

  const texts = [
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before starting new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}