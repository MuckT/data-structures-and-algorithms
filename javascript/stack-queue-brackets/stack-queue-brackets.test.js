'use strict'

const validateBrackets = require('./stack-queue-brackets')

describe('Given validateBrackets', () => {
  describe('When valid brackets', () => {
    it('Then should return true on "{}"', () => {
      expect(validateBrackets("{}")).toStrictEqual(true)
    })

    it('Then should return true on "{}(){}"', () => {
      expect(validateBrackets("{}(){}")).toStrictEqual(true)
    })

    it('Then should return true on "{()[]}"', () => {
      expect(validateBrackets("{()[]}")).toStrictEqual(true)
    })

    it('Then should return true on "()[[Extra Characters]]"', () => {
      expect(validateBrackets("()[[Extra Characters]]")).toStrictEqual(true)
    })

    it('Then should return true on "(){}[[]]"', () => {
      expect(validateBrackets("(){}[[]]")).toStrictEqual(true)
    })

    it('Then should return true on "{}{Extra Characters}[](())"', () => {
      expect(validateBrackets("{}{Extra Characters}[](())")).toStrictEqual(true)
    })
  })

  describe('When invalid brackets', () => {
    it('Then should false on "[({}]"', () => {
      expect(validateBrackets("[({}]")).toStrictEqual(false)
    })

    it('Then should false on "(]("', () => {
      expect(validateBrackets("(](")).toStrictEqual(false)
    })

    it('Then should false on "{(})"', () => {
      expect(validateBrackets("{(})")).toStrictEqual(false)
    })
  })
})
