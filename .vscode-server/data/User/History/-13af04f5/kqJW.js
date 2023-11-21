function writeObj(arr) {
    const resultObj = {};
  
    for (let i = 0; i < arr.length; i += 2) {
      if (i + 1 < arr.length) {
        resultObj[arr[i]] = arr[i + 1];
      }
    }
  
    return resultObj;
  }
  
  const arrOfTrainersAndPokemon = ['Ash', 'Pikachu', 'Gary', 'Pidgey', 'Misty', 'Starmy'];
  const result = writeObj(arrOfTrainersAndPokemon);
  
  console.log(result)

  const startingPokemon = ['Squirtle', 'Charmander', 'Bulbasaur'];

  function onlyPokemon(things) {
    return things.filter(item => startingPokemon.includes(item));
  }
  
  const aBunchOfStuff = [{}, null, 7, 'Eliot', 'Squirtle', [1, 2, 3], 'Bulbasaur'];
  
  const result = onlyPokemon(aBunchOfStuff);
  
  console.log(result); // => ['Squirtle', 'Bulbasaur']