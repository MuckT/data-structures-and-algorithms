'use strict'

class HashTable {
  constructor(size = 1024){
    this.size = size;
    this.map = new Array(size)
  }

  // Hash the key and return the hash value
  hash(key){
    // Add up all the ascii values
    // Multiply by a prime number 
    // Modulo against the size of your hashmap
    return key.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0) * 421 % this.size;
  }

  // Calculate the hash of the key
  set(key, value) {
    let index = this.hash(key);
    // Check if there is a collision
    if (!this.map[index]) {
      // Create bucket as an empty array
      this.map[index] = []; 
    }
    // Push element to bucket array
    this.map[index].push({ [key]: value });
  }

  // Returns the value associated with that key in the table.
  get(key) {
    let index = this.hash(key);
    if(!this.map[index]) return null
    for (const item of this.map[index]){
      if (Object.keys(item)[0] === key) {
        return item
      }
    }
  }

  // Returns a boolean, indicating if the key exists in the table already.
  contains(key) {
    let index = this.hash(key)
    if(!this.map[index]) return false
    for (const item of this.map[index]){
      if (Object.keys(item)[0] === key) {
        return true
      }
    }
    return false
  }
}

module.exports = HashTable
