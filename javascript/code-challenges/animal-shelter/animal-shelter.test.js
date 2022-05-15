'use strict'

const AnimalShelter = require('./animal-shelter')

let populatedAnimalShelter, emptyAnimalShelter

beforeEach(() => {
  populatedAnimalShelter = new AnimalShelter({
    2: {
      type: 'dog',
      name: 'Fluff'
    },
    4: {
      type: 'cat',
      name: 'Mittens'
    }, 
    5: {
      type: 'dog',
      name: 'Boscow'
    }
  }, 2, 5)
  emptyAnimalShelter = new AnimalShelter()
})

describe('Given Animal Shelter', () => {
  describe('When enqueue', () => {
    let animalToAdd = {
      type: 'cat',
      name: 'Smittens'
    }
    it('Then should be able to add an animal populated shelter', () => {
      populatedAnimalShelter.enqueue(animalToAdd)
      expect(populatedAnimalShelter.storage).toStrictEqual({
        '2': { type: 'dog', name: 'Fluff' },
        '4': { type: 'cat', name: 'Mittens' },
        '5': { type: 'dog', name: 'Boscow' },
        '6': { type: 'cat', name: 'Smittens' }
      })
    })

    it('Then should be able to add animal to empty shelter', () => {
      emptyAnimalShelter.enqueue(animalToAdd)
      expect(emptyAnimalShelter.storage).toStrictEqual({
        '1': { type: 'cat', name: 'Smittens' }
      })
    })
  })

  describe('When dequeue', () => {
    it('Then should be able to dequeue animal based on preference', () => {
      populatedAnimalShelter.dequeue('cat')
      expect(populatedAnimalShelter.storage).toStrictEqual({
        '2': { type: 'dog', name: 'Fluff' },
        '5': { type: 'dog', name: 'Boscow' },
      })
    })

    it('Then should dequeue animal there the longest if no preference provided', () =>{ 
      populatedAnimalShelter.dequeue()
      expect(populatedAnimalShelter.storage).toStrictEqual(
        {
          '4': { type: 'cat', name: 'Mittens' }, 
          '5': { type: 'dog', name: 'Boscow' }
        }
      )
    })

    it('Then should throw error on empty shelter', () => {
      expect(() => {emptyAnimalShelter.dequeue()}).toThrow('Shelter is empty')
    })
  })
})