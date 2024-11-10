const gameSound = () => {
    document.querySelectorAll('button').forEach(button => 
      button.addEventListener('click', () => new Audio('./sfx/effects/click.mp3').play())
    );
  };
  
  export { gameSound };