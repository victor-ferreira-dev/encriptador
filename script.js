// DOM elements
    const $textCript = document.querySelector(".text-cript");
        const tcPlaceholder = $textCript.placeholder;

    const $btnCript = document.querySelector(".btn-cript");
    const $btnDescript = document.querySelector(".btn-descript");

    const $containerWithoutMsg = document.querySelector('.container-withoutMsg');

    const $textDescript = document.querySelector('.text-descript');

    const $btnCopy = document.querySelector('.btn-copy');
        const $iCopy = document.querySelector('#copy');
        const $iCheck = document.querySelector('#check');
        const $span = document.querySelector(".btn-copy span");
    
// Interactions with DOM
    $textDescript.style.display = 'none';
    $btnCopy.style.display = 'none';
    $iCheck.style.display = 'none';

// (i) - 0 --- 1
// 0 - "e" => "enter"
// 1 - "i" => "imes"
// 2 - "a" => "ai"
// 3 - "o" => "ober"
// 4 - "u" => "ufat"
    // "gato" => "gaitober"
    // gaitober" => "gato"
    const criptMatrix = [
        ['e' , 'enter'], 
        ['i', 'imes'], 
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
        console.table(criptMatrix);

// Criptografar
    function cript(textCript) {
        if ($textCript.value.length > 0) {
            textCript = $textCript.value.toLowerCase();
            const originalPh = tcPlaceholder;
    
            for (let i = 0; i < criptMatrix.length; i++) {
                if (textCript.includes(criptMatrix[i][0])) {
                    textCript = textCript.replaceAll(criptMatrix[i][0], criptMatrix[i][1]);
                }
                $textDescript.value = textCript;
            }
    
            $textCript.value = ""; // Clean input
            tcPlaceholder.textContent = "Criptografado!";
    
            setTimeout(() => {
                tcPlaceholder.textContent = originalPh;
            }, 2000);
            
        } else if ($textCript.required) {
            alert("Preencha o campo!");
        }
    };

// Descriptografar
    function descript(textDescript) {
        textDescript = $textCript.value.toLowerCase();
        for (let i = 0; i < criptMatrix.length; i++) {
            if (textDescript.includes(criptMatrix[i][1])) {
                textDescript = textDescript.replaceAll(criptMatrix[i][1], criptMatrix[i][0]);
            }
            $textDescript.value = textDescript;
        }
        $textCript.value = "";
    };

// Shows the $containerWithoutMsg while length of $textCript is 0
    function hideWithoutMsg() {
        if ($textDescript.value.length > 0) {
            $textDescript.style.display = '';
            $btnCopy.style.display = '';
            $containerWithoutMsg.style.display = 'none';
        } else {
            $textDescript.style.display = 'none';
            $btnCopy.style.display = 'none';
            $containerWithoutMsg.style.display = '';
        }
        $textCript.value = '';
    };

// $btnCopy => copy the text on $textDescript to the clipboard
    function copy() {
        navigator.clipboard.writeText($textDescript.value);

        const originalText = $span.textContent;
        $iCopy.style.display = 'none';
        $span.textContent = 'Copiado!';
        $iCheck.style.display = '';

        setTimeout(() => {
            $span.textContent = originalText;
            $iCheck.style.display = 'none';
            $textDescript.value = '';

            $textDescript.style.display = 'none';
            $btnCopy.style.display = 'none';
            $containerWithoutMsg.style.display = '';
            $iCopy.style.display = ''; // (ver se tá bugado com o $containerWithoutMsg)
        }, 2000);

        console.log('Copied to clipboard: ' + $textDescript.value); // Only for test purposes
    }

// Show container when click on $btnCopy and clear $textDescript
    // function showContainer () {
    //     $btnCopy.addEventListener('click', hideWithoutMsg);
    // };

// Deletes accent letters on $textCript
    $textCript.addEventListener('input', function() {
        this.value = this.value.replace(/[éèêë]/gi, 'e')
                                .replace(/[áàãâä]/gi, 'a')
                                .replace(/[íìîï]/gi, 'i')
                                .replace(/[óòõôö]/gi, 'o')
                                .replace(/[úùûü]/gi, 'u')
    });

// Only for test purposes
    const delay = 500;
    let timeoutId;

    $textCript.addEventListener('input', function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            if ($textCript.value.length > 0) {
                console.log($textCript.value);
                }
            }, delay);
        }
    );