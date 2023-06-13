// DOM elements from index.html
    const $textCript = document.querySelector(".text-cript");

    const $btnCript = document.querySelector(".btn-cript");
        const $spanCript = document.querySelector(".btn-cript span");
    const $btnDescript = document.querySelector(".btn-descript");
        const $spanDescript = document.querySelector(".btn-descript span");

    const $containerWithoutMsg = document.querySelector('.container-withoutMsg');

    const $textDescript = document.querySelector('.text-descript');

    const $btnCopy = document.querySelector('.btn-copy');
        const $iCopy = document.querySelector('#copy');
        const $iCheck = document.querySelector('#check');
        const $spanCopy = document.querySelector(".btn-copy span");
    
// DOM defaults
    $textDescript.style.display = 'none';
    $btnCopy.style.display = 'none';
    $iCheck.style.display = 'none';

// Variables with original text values
    const origPhCript = $textCript.placeholder; // Digite seu texto
    const origBtnCript = $spanCript.textContent; // Criptografar
    const origBtnDescript = $spanDescript.textContent; // Descriptografar
    const origBtnCopy = $spanCopy.textContent; // Copiar
    
// Timeout ranges
    const outCript = 1000; // Faster
    const outCopy = 2000; // Medium
    const outDelay = 10000; // Larger

/* (i) -0- -|- -1-
** -0- "e" => "enter"
** -1- "i" => "imes"
** -2- "a" => "ai"
** -3- "o" => "ober"
** -4- "u" => "ufat" 
** For studying purposes */
    const criptMatrix = [
        ['e' , 'enter'], 
        ['i', 'imes'], 
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
        // console.table(criptMatrix); // Only for test purposes

// Deletes accent letters on input $textCript area
    $textCript.addEventListener('input', function() {
        this.value = this.value.replace(/[éèêë]/gi, 'e')
                                .replace(/[áàãâä]/gi, 'a')
                                .replace(/[íìîï]/gi, 'i')
                                .replace(/[óòõôö]/gi, 'o')
                                .replace(/[úùûü]/gi, 'u')
    });

// Onclick $btnCript => criptografar & shows text on $textCript
    function cript(textCript) {
        if ($textCript.value.length > 0) {
            textCript = $textCript.value.toLowerCase();
    
            $textCript.value = ""; // Clean input $textCript area
            $textCript.placeholder = "Aguarde...";
            $spanCript.textContent = "Criptografando...";

            // Loop through criptMatrix (Encrypt)
            for (let i = 0; i < criptMatrix.length; i++) {
                if (textCript.includes(criptMatrix[i][0])) {
                    textCript = textCript.replaceAll(criptMatrix[i][0], criptMatrix[i][1]);
                }
                $textDescript.value = textCript;
            }

            // Whatever button click => 1.25sec to shows the $textDescript & hide $containerWithoutMsg
            // $btnCopy click => 2sec to show $containerWithoutMsg & return all originals
            // None click on $bntCopy => 15sec to return all originals

        } else if ($textCript.required || $textCript.value === "") {
            alert("Preencha o campo com o texto para criptografar!");
        }
    };

// Onclick $btnDescript => descriptografar & shows text on $textDescript
    function descript(textDescript) {
        if ($textCript.value.length > 0) {
            textDescript = $textCript.value.toLowerCase();

            $textCript.value = ""; // Clean input $textCript area
            $textCript.placeholder = "Aguarde...";
            $spanDescript.textContent = "Descriptografando...";
            
            for (let i = 0; i < criptMatrix.length; i++) {
                if (textDescript.includes(criptMatrix[i][1])) {
                    textDescript = textDescript.replaceAll(criptMatrix[i][1], criptMatrix[i][0]);
                }
                $textDescript.value = textDescript;
            }

            // Whatever button click => 1.25sec to shows the $textDescript & hide $containerWithoutMsg
            // $btnCopy click => 2sec to show $containerWithoutMsg & return all originals
            // None click on $bntCopy => 15sec to return all originals

        } else if ($textCript.required || $textCript.value === "") {
            alert("Preencha o campo com o texto para descriptografar!");
        }
    };

// Onclick $btnCopy => copy the text generated on $textDescript to clipboard
    function copy() {
        navigator.clipboard.writeText($textDescript.value); // Copy the text to clipboard

        $iCopy.style.display = 'none'; // Hide the copy icon
        $iCheck.style.display = ''; // Shows the check icon
        $spanCopy.textContent = 'Copiado!';

        console.log('Copied to clipboard: ' + $textDescript.value); // Only for test purposes
    }

// $btnCript on click => hide $containerWithoutMsg
    $btnCript.addEventListener('click', () => {
        if ($textDescript.value.length > 0) {
            setTimeout(() => {
                $textCript.placeholder = "Pronto!";
                $spanCript.textContent = "Criptografado!";

                $textDescript.style.display = '';
                $btnCopy.style.display = '';
                $containerWithoutMsg.style.display = 'none'; // Hide $containerWithoutMsg
            }, outCript); // Shows the $textDescript readonly and $btnCopy
        }
    });

// $btnDescript on click => hide $containerWithoutMsg
    $btnDescript.addEventListener('click', () => {
        if ($textDescript.value.length > 0) {
            setTimeout(() => {
                $textCript.placeholder = "Pronto!";
                $spanDescript.textContent = "Descriptografado!";

                $textDescript.style.display = '';
                $btnCopy.style.display = '';
                $containerWithoutMsg.style.display = 'none'; // Hide $containerWithoutMsg
            }, outCript); // Shows the $textDescript readonly area and $btnCopy
        }
    });

// $btnCopy on click => hide $containerWithoutMsg
    $btnCopy.addEventListener('click', () => {
        if ($textDescript.value.length > 0) {
            setTimeout(() => {
                $textDescript.value = ""; // Clean text readonly area

                $iCheck.style.display = 'none'; // Hide the check icon
                $iCopy.style.display = ''; // Show the copy icon

                $textCript.placeholder = origPhCript; // Digite seu texto
                $spanCript.textContent = origBtnCript; // Criptografar
                $spanDescript.textContent = origBtnDescript; // Descriptografar
                $spanCopy.textContent = origBtnCopy; // Copiar

                $textDescript.style.display = 'none'; // Hide readonly text area
                $btnCopy.style.display = 'none'; // Hide $btnCopy
                $containerWithoutMsg.style.display = ''; // Show $containerWithoutMsg
            }, outCopy); // Return everything to original
        }
    });

// Only for debug & test purposes
    // const delayTest = 500;
    // let timeoutId;

    // $textCript.addEventListener('input', function() {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(function() {
    //         if ($textCript.value.length > 0) {
    //             console.log($textCript.value);
    //             }
    //         }, delayTest);
    //     }
    // );