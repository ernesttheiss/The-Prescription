class Numbers {
    constructor(data) {
      if (typeof data === "string") {
        this.data = data.split(",").map((number) => parseInt(number)); 
      } else {
        this.data = data;
      }
    }
  
    count() {
      return this.data.length; 
    }

    printNumbers() {
      this.data.forEach((number, index) => {
        console.log(`Index ${index}: ${number}`);
      });
    }
  
    odds() {
      return this.data.filter((number) => number % 2 !== 0);
    }
  
    evens() {
      return this.data.filter((number) => number % 2 === 0);
    }
  
    sum() {
      return this.data.reduce((sum, number) => sum + number, 0);
    }
  
    product() {
      return this.data.reduce((product, number) => product * number, 1);
    }
  
    greaterThan(target) {
      return this.data.filter((number) => number > target);
    }
  
    howMany(target) {
      return this.data.filter((number) => number === target).length;
    }
  }
  
  const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");
  
  const n1 = new Numbers(str);
  console.log(n1.count()); 
  n1.printNumbers(); 
  console.log(n1.odds());
  console.log(n1.evens());
  console.log(n1.sum());
  console.log(n1.product());
  console.log(n1.greaterThan(3));
  console.log(n1.howMany(3));
  