/*



*/

let chaine = "Je suis une chaine de caractère";
let nouvelleChaine = "Chaine précédente : " + chaine;
let secondeMethode = `Chaine précédente : ${chaine}`;

console.log(chaine);
console.log(nouvelleChaine + " test");
console.log(secondeMethode);

let chaineDeCaractere = "Je suis une chaine 1234567890";
let number = 24;
let boolean = true;
let array = ["je", "suis", 24, false];
let object = {
  prenom: "Amaury",
  age: 20,
  ville: "Brest",
};
let arbre = null;

console.log(arbre);

console.log(4 ** 5);

let x = 5;
let y = 6;

if (x < y) {
  console.log("X est inférieur à y");
} else {
  console.log("X est supérieur à Y");
}

if (x) {
  console.log("X éxiste");
} else {
  console.log("X n'éxiste pas");
}

if (x === y) {
  console.log("True");
} else if (x === y) {
  console.log("X et Y égaux en valeur");
} else {
  console.log(x + " et " + y + " Ne sont pas du tout égaux");
  console.log(`${x} et ${y} Ne sont pas du tout égaux`);
}

x === y ? console.log("True !") : console.log("False !");

// Les fonctions

function faireQuelqueChose() {
  console.log("Je fais un truc");
  console.log("Trop Cool !");
}

faireQuelqueChose();

const faireUneTache = (tache) => {
  console.log("Je fais : " + tache);
};
faireUneTache("les courses");
faireUneTache("Le ménage");

function add2(x, y) {
  let a = 4;
  return a + 2;
}

add2();

(function maFonction() {
  console.log("Je me joue toute seule");
})();

(() => {
  console.log("Je me joue aussi toute seule");
})();

// Calculatrice

let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
    total /= x;
    return total;
  }
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function reset() {
    total = 0;
}
