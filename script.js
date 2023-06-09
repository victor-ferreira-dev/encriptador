// DOM elements and variables from index.html file 
const $textCript = document.querySelector(".text-cript");

const $btnCript = document.querySelector(".btn-cript");
const $btnDescript = document.querySelector(".btn-descript");

const $containerWithoutMsg = document.querySelector('.container-withoutMsg');

const $textDescript = document.querySelector('.text-descript');
const $btnCopy = document.querySelector('.btn-copy');

$textDescript.style.display = 'none';
$btnCopy.style.display = 'none';

$textCript.addEventListener('input', function() {
    if (this.value.length > 0) {
        $textDescript.style.display = '';
        $btnCopy.style.display = '';
        $containerWithoutMsg.style.display = 'none';

        } else {
            $textDescript.style.display = 'none';
            $btnCopy.style.display = 'none';
            $containerWithoutMsg.style.display = '';
        }
    }
);

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// "gato" => "gaitober"
// gaitober" => "gato"





// Adiciona o event listener a ambos os elementos
element1.addEventListener('click', hideElements);
element2.addEventListener('click', hideElements);

// const withoutMsg = document.querySelector('.container-withoutMsg');
// withoutMsg.style.display = "none";

// Adiciona um listener para quando o usuário digitar algo
// document.querySelector(".text-cript").addEventListener("input", function() {
//   if (this.value.length === 0) {
//     withoutMsg.style.display = "block";
//   } else {
//     withoutMsg.style.display = "none";
//   }
// });

// document.querySelector(".container-withoutMsg").style.display = "none";

// Seleciona os elementos que serão ocultados
// const section2 = document.querySelectorAll("main section")[1];
// const textarea = section2.querySelector("textarea");
// const button = section2.querySelector("button");

// // Oculta os elementos
// section2.style.display = "none";

// // Adiciona um listener para quando o usuário digitar algo
// document.querySelector(".text-cript").addEventListener("input", function() {
//   if (this.value.length > 0) {
//     section2.style.display = "block";
//   } else {
//     section2.style.display = "none";
//   }
// });
