//set initial count
let count = 0;

//select values and buttons
const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

//adding eventListener to all buttons. Ao inves de selecionar botao por botao, selecionamos todos.
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //currentTarget.classList ve quem é o botao selecionado e retorna suas classes.
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
