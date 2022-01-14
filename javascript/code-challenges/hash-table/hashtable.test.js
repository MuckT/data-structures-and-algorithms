'use strict'

const HashTable = require('./hashtable')

describe('Given a hash table', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable(1024)
  })

  describe('When hashing', () => {
    it('Then should return index of the hash', () => {
      expect(hashTable.hash('New York')).toEqual(779)
    })
  })

  describe('When getting and setting', () => {
    it('Then should handle setting a unique hash', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.get('New York')).toStrictEqual({"New York": "Big Apple"})
    })

    it('Then should handle a collision', () => {
      hashTable.set('New York', 'Big Apple')
      hashTable.set('ew YorkN', 'Apple Big')
      expect(hashTable.get('New York')).toStrictEqual({"New York": "Big Apple"})
      expect(hashTable.get('ew YorkN')).toStrictEqual({"ew YorkN": "Apple Big"})
    })
    

    it.todo('Then should not add duplicate values')
  })

  describe('When calling contains', () => {
    it('Then should return false if value not in hash table', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.contains('New Jersey')).toStrictEqual(false)
    })

    it('Then should return true if value is in hash table', () => {
      hashTable.set('New York', 'Big Apple')
      expect(hashTable.contains('New York')).toStrictEqual(true)
    })
  })
})

describe('Given a repeatedWord', () => {
  let hashTable = new HashTable(1024)
  let theRoadNotTaken = `
    Two roads diverged in a yellow wood,
    And sorry I could not travel both
    And be one traveler, long I stood
    And looked down one as far as I could
    To where it bent in the undergrowth;

    Then took the other, as just as fair,
    And having perhaps the better claim,
    Because it was grassy and wanted wear;
    Though as for that the passing there
    Had worn them really about the same,

    And both that morning equally lay
    In leaves no step had trodden black.
    Oh, I kept the first for another day!
    Yet knowing how way leads on to way,
    I doubted if I should ever come back.

    I shall be telling this with a sigh
    Somewhere ages and ages hence:
    Two roads diverged in a wood, and I—
    I took the one less traveled by,
    And that has made all the difference.
  `

  let lesRosesDeSaadi = `
    J'ai voulu ce matin te rapporter des roses;
    Mais j'en avais tant pris dans mes ceintures closes
    Que les noeuds trop serrés n'ont pu les contenir.

    Les noeuds ont éclaté. Les roses envolées
    Dans le vent, à la mer s'en sont toutes allées.
    Elles ont suivi l'eau pour ne plus revenir.

    La vague en a paru rouge et comme enflammée.
    Ce soir, ma robe encore en est toute embaumée . . .
    Respires-en sur moi l'odorant souvenir.
  `

  let khayyam = `
    اجرام که ساکنان این ایوانند

    اسباب تردد خردمندانند

    هان تاسر رشته خرد گم نکنی

    کانان که مدبرند سرگردانند
  `

  describe("When called on 'The Road Not Taken' - English", () => {
    it('Then should return first repeated word', () => {
      expect(hashTable.repeatedWords(theRoadNotTaken).firstRepeatedWord).toStrictEqual("and")
    })

    it('Then should return the correct word counts', () => {
      expect(hashTable.repeatedWords(theRoadNotTaken).wordCounts).toStrictEqual({"a": 3, "about": 1, "ages": 2, "all": 1, "and": 9, "another": 1, "as": 5, "back": 1, "be": 2, "because": 1, "bent": 1, "better": 1, "black": 1, "both": 2, "by": 1, "claim": 1, "come": 1, "could": 2, "day": 1, "difference": 1, "diverged": 2, "doubted": 1, "down": 1, "equally": 1, "ever": 1, "fair": 1, "far": 1, "first": 1, "for": 2, "grassy": 1, "had": 2, "has": 1, "having": 1, "hence": 1, "how": 1, "i": 9, "if": 1, "in": 4, "it": 2, "just": 1, "kept": 1, "knowing": 1, "lay": 1, "leads": 1, "leaves": 1, "less": 1, "long": 1, "looked": 1, "made": 1, "morning": 1, "no": 1, "not": 1, "oh": 1, "on": 1, "one": 3, "other": 1, "passing": 1, "perhaps": 1, "really": 1, "roads": 2, "same": 1, "shall": 1, "should": 1, "sigh": 1, "somewhere": 1, "sorry": 1, "step": 1, "stood": 1, "telling": 1, "that": 3, "the": 8, "them": 1, "then": 1, "there": 1, "this": 1, "though": 1, "to": 2, "took": 2, "travel": 1, "traveled": 1, "traveler": 1, "trodden": 1, "two": 2, "undergrowth": 1, "wanted": 1, "was": 1, "way": 2, "wear": 1, "where": 1, "with": 1, "wood": 2, "worn": 1, "yellow": 1, "yet": 1, "—": 1})
    })
  })

  describe("When called on 'Les Roses de Saadi' - French", () => {
    it('Then should return first repeated word', () => {
      expect(hashTable.repeatedWords(lesRosesDeSaadi).firstRepeatedWord).toStrictEqual('les')
    })

    it('Then should return the correct word counts', () => {
      expect(hashTable.repeatedWords(lesRosesDeSaadi).wordCounts).toStrictEqual({"a": 1, "all": 1, "avais": 1, "ce": 2, "ceintures": 1, "clat": 1, "closes": 1, "comme": 1, "contenir": 1, "dans": 2, "des": 1, "e": 2, "elles": 1, "embaum": 1, "en": 3, "encore": 1, "enflamm": 1, "envol": 1, "es": 2, "est": 1, "et": 1, "j'ai": 1, "j'en": 1, "l'eau": 1, "l'odorant": 1, "la": 2, "le": 1, "les": 4, "ma": 1, "mais": 1, "matin": 1, "mer": 1, "mes": 1, "moi": 1, "n'ont": 1, "ne": 1, "noeuds": 2, "ont": 2, "paru": 1, "plus": 1, "pour": 1, "pris": 1, "pu": 1, "que": 1, "rapporter": 1, "respires": 1, "revenir": 1, "robe": 1, "roses": 2, "rouge": 1, "s": 1, "s'en": 1, "serr": 1, "soir": 1, "sont": 1, "souvenir": 1, "suivi": 1, "sur": 1, "tant": 1, "te": 1, "toute": 1, "toutes": 1, "trop": 1, "vague": 1, "vent": 1, "voulu": 1, "à": 1, "é": 7})
    })
  })

  describe("When called on Khayyam's poem - Farsi", () => {
    it('Then should return the first repeated word', () => {
      expect(hashTable.repeatedWords(khayyam).firstRepeatedWord).toStrictEqual('که')
    })
    
    it('Then should return the correct word counts', () => {
      expect(hashTable.repeatedWords(khayyam).wordCounts).toStrictEqual({"اجرام": 1, "اسباب": 1, "این": 1, "ایوانند": 1, "تاسر": 1, "تردد": 1, "خرد": 1, "خردمندانند": 1, "رشته": 1, "ساکنان": 1, "سرگردانند": 1, "مدبرند": 1, "نکنی": 1, "هان": 1, "کانان": 1, "که": 2, "گم": 1})
    })
  })
})