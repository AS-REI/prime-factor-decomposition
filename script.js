let currentNumber;

function getRandomNumber() {
  let factors = [];
  let num = 1;
  
  // 最低2つの素因数の積を持つ数を生成する
  while (factors.length < 2) {
    factors = [];
    num = Math.floor(Math.random() * 1000) + 2; // 2から99までの数を生成
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
  }
  
  return factors.reduce((a, b) => a * b, 1); // 元の数を返す
}

function primeFactorize(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors.join('×');
}

function newQuestion() {
  currentNumber = getRandomNumber();
  document.getElementById('question').textContent = currentNumber;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function addToAnswer(value) {
  const answerInput = document.getElementById('answer');
  answerInput.value += value;
}
/*
function clearAnswer() {
  document.getElementById('answer').value = '';
}
  解答全消しCLERE→0に変更
*/

function deleteLast() {
  const answerInput = document.getElementById('answer');
  answerInput.value = answerInput.value.slice(0, -1);
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.split('×').map(Number).sort((a, b) => a - b);
  const correctAnswer = primeFactorize(currentNumber).split('×').map(Number).sort((a, b) => a - b);

  if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
    document.getElementById('result').textContent = '正解です！';
  } else {
    document.getElementById('result').textContent = `不正解です。正しい答えは ${primeFactorize(currentNumber)} です。`;
  }
}


window.onload = newQuestion;
