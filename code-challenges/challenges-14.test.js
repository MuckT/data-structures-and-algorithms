'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named screenForNames that takes in an array of strings and uses Regex to create a new array of only those strings that match the following rules:

* the name must begin with Mr., Mrs., Ms., Dr. followed by a space
* the name must contain only letter characters (white spaces are ok)

------------------------------------------------------------------------------------------------ */

const screenForNames = (arr) => arr.filter(item => /^(Mr|Mrs|Ms|Dr)[.]\s\w/g.test(item));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

const toTitleCase = (arr) => arr.map(item => item.slice(0, 1).toUpperCase() + item.slice(1, item.length));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
},
{
  name: 'Pex Kylar',
  height: '180',
  mass: '190',
  hair_color: 'orange',
  skin_color: 'brown',
  eye_color: 'none',
  birth_year: '27BBY',
  gender: 'n/a'
}];

let biggerThanLuke = (arr) => {
  let luke = arr.filter(item => item.name === 'Luke Skywalker');
  let charsBiggerThanLuke = arr.reduce((a,b) => +b.mass > +luke[0].mass ? a.concat(b.name) : a, []).join(' - ');
  return charsBiggerThanLuke;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

const sortBy = (property, arr) => property === 'name' ? arr.sort((a,b) => a[property].localeCompare(b[property])) : arr.sort((a,b) => a[property] > b[property] ? 1 : -1);

// // I'd argue this is actually better code
// const sortBy = (property, arr) => {
//   let result;
//   if(property === 'name') {
//     result = arr.sort((a,b) => a.name.localeCompare(b.name));
//   }
//   else if(property === 'price') {
//     result = arr.sort((a,b) => (a[property] > b[property]) ? 1 : -1);
//   } else {
//     console.warn('Please Enter a Valid Property to Sort By');
//   }
//   console.log(`Sorted By: ${property}`, result);
//   return result;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
const isSecure = (url) => /^https:\/\//g.test(url);

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'X', 'X'],
];
------------------------------------------------------------------------------------------------ */

const detectTicTacToeWin = (board) => {
  // Use a magic square: https://mathworld.wolfram.com/MagicSquare.html
  let magicSquare = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ];

  // Game Status variable
  let gameOver = false;
  // Iterate through each row
  for(let i=0; i < board.length; i++) {
    let totals = {
      'horizontalX': 0,
      'horizontalO': 0,
      'verticalX': 0,
      'verticalO': 0,
      'diagonalX': 0,
      'diagonalO': 0,
      'antiDiagonalX': 0,
      'antiDiagonalO': 0
    };
    // Iterate through each square in the row
    for(let j=0; j < board[i].length; j++) {
      // Vertical Check
      if(board[i][j] === 'X'){
        totals.horizontalX += magicSquare[i][j];
      } else if(board[i][j] === 'O') {
        totals.horizontalO += magicSquare[i][j];
      }
      // Horizontal Check
      if(board[j][i] === 'X') {
        totals.verticalX += magicSquare[j][i];
      } else if (board[j][i] === 'O') {
        totals.verticalO += magicSquare[j][i];
      }
      // Check Diagonal
      if(board[j][j] === 'X') {
        totals.diagonalX += magicSquare[j][j];
      } else if (board[j][j] === 'O') {
        totals.diagonalO += magicSquare[j][j];
      }
      // Check Anti-Diagonal
      if(board[j][board[i].length - j -1] === 'X') {
        totals.antiDiagonalX += magicSquare[j][board[i].length - j -1];
      } else if (board[j][board[i].length - j -1] === 'O') {
        totals.antiDiagonalO += magicSquare[j][board[i].length - j -1];
      }
    }
    if(Object.values(totals).includes(15)) {
      gameOver = true;
      break;
    }
  }
  return gameOver;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-14.test.js

------------------------------------------------------------------------------------------------ */

describe.only('Testing challenge 1', () => {
  test('It should return a list of names', () => {
    const names = ['Mr. Brown', ' Ms. Red', 'Dr. Blue', 'Mrs.', '', 'Ms. Black', 'dr. Green', 'Mrs. Orange', 'Purple', 'Mr.  Pink'];
    expect(screenForNames(names)).toStrictEqual(['Mr. Brown', 'Dr. Blue', 'Ms. Black', 'Mrs. Orange']);
  });
});

describe.only('Testing challenge 2', () => {
  test('It should convert each word to title case', () => {
    const words = ['apple', 'banana', 'MacGyver'];
    expect(toTitleCase(words)).toStrictEqual(['Apple', 'Banana', 'MacGyver']);

    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe.only('Testing challenge 3', () => {
  test('It should return only characters that are bigger than Luke', () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual('Darth Vader - Pex Kylar');
    expect(biggerThanLuke([])).toStrictEqual('');
  });
});

describe.only('Testing challenge 4', () => {
  test('It should sort items by a price', () => {

    expect(sortBy('price', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 },
      { name: 'Sweatshirt', price: 45 },
    ]);

  });

  test('It should sort items by name', () => {

    expect(sortBy('name', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Sweatshirt', price: 45 },
      { name: 'Tote bag', price: 15 },
    ]);
  });
});

describe.only('Testing challenge 5', () => {
  test('It should check if url is https', () => {

    expect(isSecure('http://www.insecure.com')).toBe(false);
    expect(isSecure('https://secure.com')).toBe(true);
    expect(isSecure('https:/missingslash.org')).toBe(false);
  });
});

describe.only('Testing challenge 6', () => {

  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', 'O', 'O'], ['X', '', 'X'], ['X', 'X', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(false);
  });

  test('It should return true if there are three in a row anti-diagonal', () => {
    expect(detectTicTacToeWin([['O', '', 'X'], ['O', 'X', ''], ['X', 'O', '']])).toStrictEqual(true);
  });
});
