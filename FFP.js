const extraFacts = [
    "Sharks existed before trees.",
    "There are more stars in the universe than grains of sand on Earth.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas glow blue under UV light!",
    "Cows have best friends and can get stressed when separated."
  ];
  
  function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * extraFacts.length);
    const fact = extraFacts[randomIndex];
    document.getElementById('randomFact').textContent = fact;
  }