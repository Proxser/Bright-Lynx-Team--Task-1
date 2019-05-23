const inputOne = document.getElementById('InputOne');
const inputTwo = document.getElementById('InputTwo');
const buttonSum = document.getElementById('ButtonSum');

// Функция-обработчик события клика на кнопку
function clickHandler() {
  const a = parseFloat(inputOne.value);
  const b = parseFloat(inputTwo.value);
  const result = parseFloat((a + b).toFixed(3));
  alert(`Результат:\n\n${result}`);
}

// Добавляем обработчик события вызванного на клик по кнопке
buttonSum.addEventListener('click', clickHandler);
