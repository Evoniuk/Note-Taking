
window.addEventListener('DOMContentLoaded', function() {
  let textareas = document.querySelectorAll('textarea');
  let counter = 0;
  Array.from(textareas, function(textarea) {
    textarea.addEventListener('blur', saveText);
    textarea.id = 't' + counter++;
  });
});

window.addEventListener('DOMContentLoaded', displayText);

function saveText() {
  let text = this.value;
  let idNumber = parseInt(this.id[1], 10);
  let key = window.location;

  if (!localStorage.getItem(key)) localStorage.setItem(key, '[]');
  let arr = JSON.parse(localStorage.getItem(key));
  arr[idNumber] = text;
  arr = JSON.stringify(arr);
  localStorage.setItem(key, arr);
}

function displayText() {
  let key = window.location;
  let arr = JSON.parse(localStorage.getItem(key));

  let textareas = document.querySelectorAll('textarea');
  let counter = 0;
  Array.from(textareas, function(textarea) {
    let text = arr[counter++];
    if (text !== undefined) textarea.value = text;
  })
}
