const palindromes = function (str) {
    let punctuation = ',.?! '
  
    str = str.toLowerCase()

    return (
        str
            .split('')
            .filter(x => !punctuation.includes(x))
            .reverse()
            .join('')) 
        === 
        str
            .split('')
            .filter(x => !punctuation.includes(x))
            .join('')
  };

// Do not edit below this line
module.exports = palindromes;
