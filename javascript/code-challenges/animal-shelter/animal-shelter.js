'use strict'

class AnimalShelter{
  constructor(storage = {}, front = 0, back = 0) {
    this.storage = storage
    this.front = front
    this.back = back
  }

  // enqueue
  enqueue(animalObject) {
    this.back++
    this.storage[this.back] = animalObject
  }

  // dequeue
  dequeue(pref = null) {
    if(this.back === 0){throw new Error('Shelter is empty')}
    let result
    if(pref === null) {
      result = this.storage[this.front]
      delete this.storage[this.front]
      this.front++
      return result
    }
    let tempCounter = +this.front
    while(this.storage[`${tempCounter}`].type !== pref && tempCounter < this.back) {
      let gapCounter = 1
      while(this.storage[`${tempCounter + gapCounter}`] === undefined && gapCounter < this.back) {
        gapCounter++
      }
      tempCounter+= gapCounter
    }
    result = this.storage[`${tempCounter}`]
    delete this.storage[tempCounter]
    if(tempCounter === this.front) {
      this.front++
    }
    return result
  }
}

module.exports = AnimalShelter