#!/bin/bash

echo "Getting Code Challenge $1"

curl https://raw.githubusercontent.com/codefellows/seattle-code-301n21/main/class-$1/challenges/challenges-$1.test.js --output ./code-challenges/challenges-$1.test.js
