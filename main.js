
const letterArray = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
const input = document.getElementById("input");
const resultInput = document.getElementById("input-result");
const button = document.getElementById("button");

const rest = (num) => {
  return num % 23;
}

const letterDNI = (letter) => {
  console.log(`Esta es la letra que le corresponde al número introducido: ${letterArray[letter]}`);
  return letterArray[letter];
}

const getLetter = () => {  //Aquí consigo la letra que se ha introducido en el input.
  let newArray = input.value.split(""); //Convierto el string en un array
  let lastElement = newArray[newArray.length -1].toUpperCase(); //Cojo el último elemento del array, que es la letra
  console.log(`Este es el último caracter del input: ${lastElement}`);
  return lastElement
}

const checkLetter = (letter, getLetter) => {
  if (letterArray[letter] === getLetter) {
    resultInput.innerText = input.value.toUpperCase();
    console.log("Correcto");
  } else {
    resultInput.innerText = "La letra que has introducido no es correcta."
    console.log("Error");
  }
}

button.addEventListener("click", () => {
  if(input.value === "" || input.value.length < 9 || input.value.length > 9) {
    alert("Algo ha fallado")
    input.value = "";
  } else {
    const resto = rest(input.value.slice(0, -1));
    const x = getLetter();
    letterDNI(resto);
    checkLetter(resto, x)
    input.value = "";
  }
})

/*Resto Letra
    0     T
    1     R
    2     W
    3     A
    4     G
    5     M
    6     Y
    7     F
    8     P
    9     D
    10    X
    11    B
    12    N
    13    J
    14    Z
    15    S
    16    Q
    17    V
    18    H
    19    L
    20    C
    21    K
    22    E
*/