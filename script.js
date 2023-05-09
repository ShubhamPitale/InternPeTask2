let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  result.value = eval(result.value);
}
