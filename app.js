const audio = document.querySelector(".audio");
const animals = document.querySelectorAll(".animal");
animals.forEach((animal) => {
  animal.addEventListener("click", () => animalSound(animal));
});
function animalSound(animal) {
  const sound = animal.getAttribute("data-sound");
  audio.src = sound;
  audio.play();
}
