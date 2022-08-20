# Hashtables


## Challenge
Implement a Hashtable!
### Methods 
`add` 

- Takes the key and value and adds them to the table handling collisions.

`get` 

- Takes the key and returns the object associated with that key.

`contains`

- Takes a key and returns a boolean, indicating if the key exists in the table already.

`hash`

- Takes a key and returns the index in the collection for that key

`repeatedWord`

- Takes a string and returns the first repeated word and a count for all words present in the string as an object.

## Approach & Efficiency

If there are no collisions the Hash tables have a time complexity of O(1) for insertion and search; however, if there are collisions that drops down to whatever the data structure used in the bucket is. In my case as an array the Big O complexity drops to O(n).

### Sources

[Matching any character not in the ascii set](https://stackoverflow.com/a/150078)

[String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

[5 Lovely French Poems with English Translations](https://www.talkinfrench.com/french-poems-english-translations)

[What are your favorite Persian poems?](https://www.quora.com/What-are-your-favourite-Persian-poems)

[The Road Not Taken - Robert Frost](https://poets.org/poem/road-not-taken)
