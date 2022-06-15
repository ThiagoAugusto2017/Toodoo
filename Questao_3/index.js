 let link = document.querySelector('a');

 link.addEventListener('click', function (button) {
     button.preventDefault();
     alert('Opa! Isso é um alerta!');
 });