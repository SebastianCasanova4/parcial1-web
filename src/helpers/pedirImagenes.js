export const pedirImagenes = () => {
    fetch("https://picsum.photos/350") 
  .then((response) => response.json()) 
  .then((dog) => console.log(dog));
}