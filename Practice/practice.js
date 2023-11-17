function onlyOdds(number){
    if (number <1){
        return 0;
    } else {
        let sum = 0;
        for (let i = number; i>= 1; 1 --){
            if (i % 2 !== 0){
                sum +=1;
            }
        }
        return sum;
    }
}

function crazyCaps(inputString){
    if (typeof inputString !== 'string'){
        return '';
    }
}

let result = '';
for (let i = 0; i < inputString.length; i++) {
  if (i % 2 === 0) {
    result += inputString[i].toLowerCase(); // Lowercase for even-indexed characters
  } else {
    result += inputString[i].toUpperCase(); // Uppercase for odd-indexed characters
  }
}
return result;

function myIndexOf(source, searchValue, startIdx = 0) {
    if (startIdx >= source.length) {
      return -1;
    }
  
    for (let i = startIdx; i < source.length; i++) {
      if (source[i] === searchValue[0]) {
        let found = true;
        for (let j = 0; j < searchValue.length; j++) {
          if (source[i + j] !== searchValue[j]) {
            found = false;
            break;
          }
        }
        if (found) {
          return i;
        }
      }
    }
  
    return -1;
  }





function mySlice(originalString, startIdx, endIdx) {
    if (startIdx === undefined && endIdx === undefined) {
      return originalString;
    }
  
    if (endIdx === undefined) {
      return originalString.slice(startIdx);
    }
  
    return originalString.slice(startIdx, endIdx);
  }





