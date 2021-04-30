#!/bin/bash

echo "Getting Code Challenge $1"

curl https://codefellows.github.io/code-301-guide-react/curriculum/class-$1/challenges/challenges-$1.test.js --output ./code-challenges/challenges-$1.test.js
