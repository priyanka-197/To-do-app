pass = document.getElementById("pass");
copy = document.getElementById("copy");
lene1 = document.getElementById("len");
upper = document.getElementById("upper");
lower = document.getElementById("lower");
number = document.getElementById("number");
symbol = document.getElementById("symbol");
generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbole() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generate.addEventListener("click", () => {
  const len = lene1.value;

  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generatex();

    password += x;
  }

  pass.innerHTML = password;
});

function generatex(password) {
  const xs = [];
  if (upper.checked) {
    xs.push(getUpperCase())

   
  }
  if (lower.checked) {
    xs.push(getLowerCase());
  }
  if (number.checked) {
    xs.push(getNumber());
  }
  if (symbol.checked) {
    xs.push(getSymbole());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

copy.addEventListener("click", () => {
  myFunction();
});

function myFunction() {


  navigator.clipboard.writeText(pass.innerHTML);

  pass.style.backgroundColor = "blue";

  setTimeout(() => {
    pass.style.backgroundColor = "blueviolet";
  }, 1500);
}
lene1.addEventListener('input',()=>{
    const len = lene1.value;

    let password = "";
    
    for (let i = 0; i < len; i++) {
      const x = generatex();
    
      password += x;
    }
    
    pass.innerHTML = password;
})

