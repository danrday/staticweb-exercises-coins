

var amount = prompt("Enter any cash amount, no commas please. Example: 5242354.00 ")

console.log("original amount: $", amount);

var amountString = amount.toString();

var stringLength = amountString.length;

var $Gs;
var $100s;
var $50s;
var $20s;
var $10s;
var $5s;
var $1s;
var $quarters;
var $dimes;


if (stringLength >= 7) {
  var x = amount / 1000;
  if (x >= 1) {
    $Gs = parseInt(x);
    amount = amount - ($Gs * 1000);
    stringLength = 6;
    console.log("# of Gs:", $Gs);
    console.log("amount minus Gs", amount.toFixed(2));
  }
}

if (stringLength === 6) {
  var x = amount / 100;
  if (x >= 1) {
    $100s = parseInt(x);
    amount -= $100s * 100;
    console.log("# of 100s:", $100s);
    console.log("amount minus 100s", amount.toFixed(2));
    stringLength -= 1;
  }
}

if (stringLength === 5) {
  var x = amount / 50;
  if (x >= 1) {
    $50s = parseInt(x);
    amount -= ($50s * 50);
    console.log("# of 50s:", $50s);
    console.log("amountafter50s", amount.toFixed(2));
  } 
  var y = amount / 20;
  if (y >= 1) {
    $20s = parseInt(y);
    amount -= ($20s * 20);
    console.log("# of 20s:", $20s);
    console.log("amountafter20s", amount.toFixed(2));
}
  var z = amount / 10;
  if (z >= 1) {
    $10s = parseInt(z);
    amount -= ($10s * 10);
    console.log("# of 10s:", $10s);
    console.log("amountafter10s", amount.toFixed(2));
}
  stringLength -=1;
}

if (stringLength === 4) {
  var x = amount / 5;
  if (x >= 1) {
    $5s = parseInt(x);
    amount -= ($5s * 5);
    console.log("# of 5s:", $5s);
    console.log("amountafter5s", amount.toFixed(2));
  } 
  var y = amount / 1;
  if (y >= 1) {
    $1s = parseInt(y);
    amount -= ($1s * 1);
    console.log("# of 1s:", $1s);
    console.log("amountafter1s", amount.toFixed(2));
}
  stringLength -= 1;
}

if (stringLength === 3) {
  var x = amount.toFixed(2) / .25;
  if (x >= 1) {
    $quarters = parseInt(x);
    amount -= ($quarters * .25);
    console.log("# of quarters:", $quarters);
    console.log("amountafterquarters", amount.toFixed(2));
  } 
  var y = amount.toFixed(2) / .1;
  if (y >= 1) {
    $dimes = parseInt(y);
    amount -= ($dimes * .1);
    console.log("# of dimes:", $dimes);
    console.log("amountafterdimes", amount.toFixed(2));
}
  stringLength -= 1;
}

if (stringLength === 2) {
  var x = amount.toFixed(2) / .05;
  if (x >= 1) {
    $nickels = parseInt(x);
    amount -= ($nickels * .05);
    console.log("# of nickels:", $nickels);
    console.log("amountafternickels", amount.toFixed(2));
  } 
  var y = amount.toFixed(2) / .01;
  if (y >= 1) {
    $pennies = parseInt(y);
    amount -= ($pennies * .01);
    console.log("# of pennies:", $pennies);
    console.log("amountafterpennies", amount.toFixed(2));
}
  stringLength -= 1;
}

if (stringLength === 1) {
  console.log("done:", "here is your change.");
}

