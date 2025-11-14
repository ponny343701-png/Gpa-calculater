const percentInput = document.getElementById('percentInput');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('resultDiv');
const gpaOutput = document.getElementById('gpaOutput');
const errorMsg = document.getElementById('errorMsg');

function convertPercentToGPA(p) {
  return (p / 100) * 4.0;
}

convertBtn.addEventListener('click', function() {
  const val = percentInput.value;
  if (val === '' || isNaN(val)) {
    errorMsg.textContent = 'Please enter a valid number between 0 and 100.';
    errorMsg.style.display = 'block';
    resultDiv.style.display = 'none';
    return;
  }
  const num = parseFloat(val);
  if (num < 0 || num > 100) {
    errorMsg.textContent = 'Value must be between 0 and 100.';
    errorMsg.style.display = 'block';
    resultDiv.style.display = 'none';
    return;
  }
  errorMsg.style.display = 'none';

  const gpa = convertPercentToGPA(num).toFixed(2);
  gpaOutput.textContent = gpa;
  resultDiv.style.display = 'block';
});
