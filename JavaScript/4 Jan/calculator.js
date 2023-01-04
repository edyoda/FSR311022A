/**
 * Author : Divyansh Moonat
 * Version : 1.0
 * Library : Calculator.js
 */

function add(n1, n2) {
  const total = n1 + n2;
  return total;
}

function subtract(n1, n2) {
  const difference = n1 - n2;
  return difference;
}

function multiply(n1, n2) {
  const product = n1 * n2;
  return product;
}

function divide(n1, n2) {
  const div = n1 / n2;
  return div;
}

function si(p, r, t) {
  const sInt = (p * r * t) / 100;
  return sInt;
}

function find(id) {
  const element = document.getElementById(id);
  if (element) {
    return element;
  } else {
    return "No element found with id " + id;
  }
}
