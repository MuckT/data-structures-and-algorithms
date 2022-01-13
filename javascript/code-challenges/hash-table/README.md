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

## Approach & Efficiency

If there are no collisions the Hash tables have a time complexity of O(1) for insertion and search; however, if there are collisions that drops down to whatever the data structure used in the bucket is. In my case as an array the Big O complexity drops to O(n).