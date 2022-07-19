const validator = {
  isValid: (string) => {
    const arrString = [...string];

    console.log('arrString', arrString);

    // recorrer la cadena de texto:
    let character = '';
    for (let i = 0; i < arrString.length; i++) {
      character = arrString[i];
      if (isNaN(character)) {
        // aca se encontro que un caracter de la cadena no es un numero
        return false;
      } 
      else {
        if (i % 2 === 0) {
          let newValue = parseInt(character) * 2;

          if (newValue > 9) {
            const strNumber = newValue.toString();
            newValue = parseInt(strNumber.charAt(0)) + parseInt(strNumber.charAt(1));
          }

          arrString[i] = newValue;
        }
        else {
          arrString[i] = parseInt(character);
        }
      }
    }

    console.log('NEW arrString', arrString);

    const sumDigits = arrString.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);

    console.log('sumDigits', sumDigits);

    return sumDigits % 10 === 0;
  },
  maskify: (string) => {
    const arrString = [...string];

    let i = arrString.length - 1;
    let counter = 0;

    for (; i >= 0; i--, counter++) {
      if (counter >= 4) {
        arrString[i] = '#';
      }
    }

    return arrString;
  },
};

export default validator;
