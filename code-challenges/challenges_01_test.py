'''
------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forLoop` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------
'''

def addOne(arr):
    result = []
    for num in arr:
        result.append(num + 1)
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forLoop` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------
'''

def addExclamation(arr):
    result = []
    for string in arr:
        result.append(string + '!')
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forLoop` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------
'''

def allUpperCase(arr):
    result = []
    for string in arr:
        result.append(string.upper())
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.

Use `forLoop` to build a new array of strings, each string modified by the callback. Return the new array.
------------------------------------------------------------------------------------------------
'''

def greeting(word):
    return word.upper() + '!'

def speaker(words, callback):
    result = []
    for word in words:
        result.append(callback(word))
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------
'''

def addValues(arr, value):
    arr.append(value)

def addNumbers(num, arr, times, callback):
    for i in range(times):
        callback(arr, num)
    return arr

'''
------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------
'''

def createList(availableItems):
    result = []
    for item in availableItems:
        if item['available']:
            result.append(item['name'])
    return result

'''
------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------
'''

def fizzbuzz(arr):
    result = []
    for num in arr:
        if num % 3 == 0 and num % 5 == 0:
            result.append('Fizz Buzz')
        elif num % 3 == 0:
            result.append('Fizz')
        elif num % 5 == 0:
            result.append('Buzz')
        else:
            result.append(num)
    return result

'''
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests with pytest:
  - Directly (works even if filename doesn't match default discovery):
      pytest -q code-challenges/challenges-01.test.py
  - Or configure discovery (optional). Create a pytest.ini with:
      [pytest]
      python_files = *.test.py
'''

def test_add_one():
    assert addOne([1, 2, 3, 4, 5]) == [2, 3, 4, 5, 6]

def test_add_exclamation():
    assert addExclamation(['hi', 'how', 'are', 'you']) == ['hi!', 'how!', 'are!', 'you!']

def test_all_upper_case():
    assert allUpperCase(['hi', 'how', 'are', 'you']) == ['HI', 'HOW', 'ARE', 'YOU']

def test_speaker_with_greeting():
    assert speaker(['hello', '301', 'students'], greeting) == ['HELLO!', '301!', 'STUDENTS!']

def test_add_numbers():
    result = addNumbers(8, [], 5, addValues)
    assert result == [8, 8, 8, 8, 8]
    assert len(result) == 5

def test_create_list():
    inventory = [
        { 'name': 'apples', 'available': True },
        { 'name': 'pears', 'available': True },
        { 'name': 'oranges', 'available': False },
        { 'name': 'bananas', 'available': True },
        { 'name': 'blueberries', 'available': False },
    ]
    result = createList(inventory)
    assert result == ['apples', 'pears', 'bananas']
    assert len(result) == 3

def test_fizzbuzz():
    inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]
    result = fizzbuzz(inputs)
    assert result == expected
    assert len(result) == 16
