'''
------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named raisedToTheThird that takes in a list of numbers and returns a new list of each of those numbers raised to the 3rd power. Use a for loop to solve this problem (e.g., with the ** operator or pow()).
------------------------------------------------------------------------------------------------
'''

def raisedToTheThird(arr):
    result = []
    for num in arr:
        result.append(num ** 3)
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addOne that, given a list of numbers, uses map (or an equivalent approach) to return a new list with each value incremented by 1.
------------------------------------------------------------------------------------------------
'''

def addOne(arr):
    result = []
    for num in arr:
        result.append(num + 1)
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addQuestion that, given a list of strings, uses map (or an equivalent approach) to return a new list containing each string followed by a question mark character.
------------------------------------------------------------------------------------------------
'''

def addQuestion(arr):
    result = []
    for string in arr:
        result.append(string + '?')
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named forLoopTwoToThe that, given a list of integers as input, iterates over the list and returns a new list. The returned list should contain the result of raising 2 to the power of the original input element.

Use a standard Python for loop.

For example, forLoopTwoToThe([1,2,3]) returns [2,4,8] because 2 ** 1 = 2, 2 ** 2 = 4, and 2 ** 3 = 8.
------------------------------------------------------------------------------------------------
'''

def forLoopTwoToThe(arr):
    result = []
    for num in arr:
        result.append(2 ** num)
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but do so with a one line return statement.
------------------------------------------------------------------------------------------------
'''

def forEachTwoToThe(arr):
    return [2 ** num for num in arr]

'''
------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4 and your forEachTwoToThe function from challenge 5, but uses map instead of an explicit loop.
------------------------------------------------------------------------------------------------
'''

def mapTwoToThe(arr):
    return list(map(lambda x: 2 ** x, arr))

'''
------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named charCode that, given a list of letters as input, uses map to return a new list where each element is the Unicode code point of the original character (use Python's ord()).

For example: charCode(['h','i']) returns [104, 105].

------------------------------------------------------------------------------------------------
'''

def charCode(arr):
    result = []
    for letter in arr:
        result.append(ord(letter))
    return result

'''
------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given a list of numbers as input, uses map to return a new list where each element is either the string "even" or the string "odd", based on each value.

If any element in the input is not a number, the resulting list should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------
'''
def classify(value):
    if not isinstance(value, (int, float)):
        return 'N/A'
    return 'even' if value % 2 == 0 else 'odd'

def evenOdd(arr):
    return list(map(classify, arr))

'''
------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the list of abilities, uses map to create a list containing only the ability name.

Note: Because this function is expecting the list of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities['abilities'])
------------------------------------------------------------------------------------------------
'''

def extractAbilities(arr):
    return list(map(lambda x: x['ability']['name'], arr))

'''
------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given a list of stats, uses map to return a list of dicts containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------
'''

def extractStats(arr):
    return list(map(lambda x: { 'name': x['stat']['name'], 'total': x['effort'] + x['baseStat'] }, arr))

'''
------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.
------------------------------------------------------------------------------------------------
'''

# Sample data used by challenges 9 and 10
snorlaxAbilities = {
    'abilities': [
        {
            'slot': 3,
            'is_hidden': True,
            'ability': {
                'url': 'https://pokeapi.co/api/v2/ability/82/',
                'name': 'gluttony',
            },
        },
        {
            'slot': 2,
            'is_hidden': False,
            'ability': {
                'url': 'https://pokeapi.co/api/v2/ability/56/',
                'name': 'cute charm',
            },
        },
        {
            'slot': 1,
            'is_hidden': False,
            'ability': {
                'url': 'https://pokeapi.co/api/v2/ability/17/',
                'name': 'immunity',
            },
        },
    ],
    'name': 'snorlax',
    'weight': 4600,
}

snorlaxStats = {
    'stats': [
        {
            'stat': {
                'url': 'https://pokeapi.co/api/v2/stat/6/',
                'name': 'speed',
            },
            'effort': 5,
            'baseStat': 30,
        },
        {
            'stat': {
                'url': 'https://pokeapi.co/api/v2/stat/5/',
                'name': 'special-defense',
            },
            'effort': 2,
            'baseStat': 110,
        },
        {
            'stat': {
                'url': 'https://pokeapi.co/api/v2/stat/4/',
                'name': 'special-attack',
            },
            'effort': 9,
            'baseStat': 65,
        },
    ],
    'name': 'snorlax',
    'weight': 4600,
}


def test_ch2_raised_to_the_third():
    assert raisedToTheThird([2, 4, 5, -7, 0]) == [8, 64, 125, -343, 0]


def test_ch2_add_one():
    assert addOne([2, 3, 5, 11]) == [3, 4, 6, 12]


def test_ch2_add_question():
    assert addQuestion(['hello', '301', 'students']) == ['hello?', '301?', 'students?']


def test_ch2_for_loop_two_to_the_values_and_length():
    assert forLoopTwoToThe([0, 4, 5]) == [1, 16, 32]
    assert len(forLoopTwoToThe([0, 4, 5])) == 3


def test_ch2_for_loop_two_to_the_negatives():
    assert forLoopTwoToThe([-1, -2, -3]) == [0.5, 0.25, 0.125]


def test_ch2_for_each_two_to_the_values_and_length():
    assert forEachTwoToThe([0, 4, 5]) == [1, 16, 32]
    assert len(forEachTwoToThe([0, 4, 5])) == 3


def test_ch2_for_each_two_to_the_negatives():
    assert forEachTwoToThe([-1, -2, -3]) == [0.5, 0.25, 0.125]


def test_ch2_map_two_to_the_values_and_length():
    assert mapTwoToThe([0, 4, 5]) == [1, 16, 32]
    assert len(mapTwoToThe([0, 4, 5])) == 3


def test_ch2_map_two_to_the_negatives():
    assert mapTwoToThe([-1, -2, -3]) == [0.5, 0.25, 0.125]


def test_ch2_char_code_values_and_length():
    assert charCode(['C', 'o', 'd', 'e', '3', '0', '1']) == [67, 111, 100, 101, 51, 48, 49]
    assert len(charCode(['C', 'o', 'd', 'e', '3', '0', '1'])) == 7


def test_ch2_even_odd_typical_and_length():
    assert evenOdd([5, 8, 2, 6, 9, 13, 542, 541]) == ['odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd']
    assert len(evenOdd([5, 8, 2, 6, 9, 13, 542, 541])) == 8


def test_ch2_even_odd_all_odd_and_all_even():
    assert evenOdd([1, 3, 5, 7, 9]) == ['odd', 'odd', 'odd', 'odd', 'odd']
    assert len(evenOdd([1, 3, 5, 7, 9])) == 5
    assert evenOdd([2, 4, 6, 8, 10]) == ['even', 'even', 'even', 'even', 'even']
    assert len(evenOdd([2, 4, 6, 8, 10])) == 5


def test_ch2_even_odd_with_invalids():
    assert evenOdd([5, 8, 2, 'hi']) == ['odd', 'even', 'even', 'N/A']
    assert len(evenOdd([5, 8, 2, 'hi'])) == 4


def test_ch2_extract_abilities():
    assert extractAbilities(snorlaxAbilities['abilities']) == ['gluttony', 'cute charm', 'immunity']
    assert len(extractAbilities(snorlaxAbilities['abilities'])) == 3


def test_ch2_extract_stats():
    assert extractStats(snorlaxStats['stats']) == [
        { 'name': 'speed', 'total': 35 },
        { 'name': 'special-defense', 'total': 112 },
        { 'name': 'special-attack', 'total': 74 },
    ]
    assert len(extractStats(snorlaxStats['stats'])) == 3