let player1 = "Player 1";
let player2 = "Player 2";

function editNames1() {
  Swal.fire({
    title: "Player 1 Name",
    input: "text",
    inputLabel: "Tell me your name, Player 1",
    inputPlaceholder: "Your name..",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      if (value.length < 2) {
        return "Is this a joke? Tell me your real name!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      player1 = result.value.toUpperCase();
      document.querySelector("h2.Player1").innerHTML = player1;
      Swal.fire({
        title: `Welcome ${player1}`,
      });
    } else {
      Swal.fire({
        title: "Saving canceled!",
      });
    }
  });

  if (player1.length < 2) {
    alert("Is it funny? Tell me your real name!");
    return;
  }

  //
}

function editNames2() {
  Swal.fire({
    title: "Player 2 Name",
    input: "text",
    inputLabel: "Tell me your name, Player 2",
    inputPlaceholder: "Your name..",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      if (value.length < 2) {
        return "Is this a joke? Tell me your real name!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      player2 = result.value.toUpperCase();
      document.querySelector("h2.Player2").innerHTML = player2;
      Swal.fire({
        title: `Welcome ${player2}`,
      });
    } else {
      Swal.fire({
        title: "Saving canceled!",
      });
    }
  });

  if (player2.length < 2) {
    alert("Is it funny? Tell me your real name!");
    return;
  }
}

function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "./img/diceAnimation.gif");
  diceNum2.setAttribute("src", "./img/diceAnimation.gif");

  let result = document.querySelector("h1");
  setTimeout(()=>{
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);

    diceNum1.setAttribute('src', `./img/dice-${randomNumber1}.png`);
    diceNum2.setAttribute('src', `./img/dice-${randomNumber2}.png`);
    if(randomNumber1 === randomNumber2) {
        result.innerHTML = `<img src="./img/spider.jpg" alt="Draw Image" style="width: 300px; height: auto;"/>`
    }else if(randomNumber1 > randomNumber2) {
        result.innerHTML = `${player2} BITES THE DUST!`
    }else {
        result.innerHTML = `${player1} LOSES LIKE A PRO!`
    }
  },2000)
}
