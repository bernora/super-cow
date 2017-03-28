'use strict';

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

let totalSP = 0;

function calculateSP(issue, i) {
  totalSP = totalSP + issue.fields.customfield_10362;
}

data.issues.forEach(calculateSP);

console.log(totalSP);
