// hash table > let myHashTable = {}
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // store this value in // Study more
    let address = this._hash(key); // hashing the key and storing it
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // out of key/val returns value
  get(key) {
    // find hash key address
    let address = this._hash(key); // example > index = 23
    // currentBucket = [['grapes', 1000], [...foo]] // linked
    let currentBucket = this.data[address];

    // Method One:
    // return `${key.toUpperCase()}: ${currentBucket[0][1]}`

    // Method Two:
    if (currentBucket) {
      for (const item of currentBucket) {
        if (item[0] === key) {
          return `${item[0].toUpperCase()}: ${item[1]}`;
        }
      }
    }
    return undefined;
  }

  // getKeys => grapes, grapess, apples

  keys() {
    const keysArr = []
     for(let i = 0; i < this.data.length; i++){
       if(this.data[i]){
         keysArr.push(this.data[i][0][0])
       }
     }
     return keysArr
  }

  // Bonus keys() without collision

keysBonus() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }
}


 
// this.data ==> [[key, value],[],[],[],[]....]


const myHashTable = new HashTable(50);

myHashTable.set("grapes", 1000); // collision | bananas
myHashTable.set("oranges", 1000);
myHashTable.set("apples", 4000); 
myHashTable.set("peaches", 4000);
myHashTable.set("bananas", 4000); //collision | grapes
// myHashTable.get('grapes')


// test:
// console.log(myHashTable.data);

// Get test
// console.log(myHashTable.get("apples"));
// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get('oranges'));


// Keys test: 
myHashTable.keys() // not including collision keys
// myHashTable.keysBonus() // ** including collision keys