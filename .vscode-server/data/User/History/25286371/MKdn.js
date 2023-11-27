function gobbler(howManyGobbles){
    howManyGobbles = Math.max(0, howManyGobbles);
    const gobblesArray = Array(Math.pow(2, howManyGobbles)).fill('Gobble');
    const result = gobblesArray.join('') + '!';
    return result;
}
const result = gobbler(0);
console.log(result);
const result2 = gobbler(4);
console.log(result2);
