

  
  document.getElementById('myImage').addEventListener('mouseover', changeImage);
document.getElementById('myImage').addEventListener('mouseout', resetImage);

function changeImage() {
  var image = document.getElementById('myImage');
  image.src = "img/perfil.jpg"; // Reemplaza con la ruta de la nueva imagen
}

function resetImage() {
  var image = document.getElementById('myImage');
  image.src = "img/perfil2.jpg"; // Reemplaza con la ruta de la imagen original
}



// Obtén todos los botones de categoría
var botones = document.querySelectorAll('.categoria');

// Agrega el evento 'click' a cada botón
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    // Elimina la clase 'activo' de todos los botones
    botones.forEach(function (b) {
      b.classList.remove('activo');
    });

    // Agrega la clase 'activo' solo al botón clicado
    boton.classList.add('activo');
  });
});




//Validar form

 // Obtener el formulario y los campos de entrada
 const form = document.querySelector('#contactForm');
 const firstNameInput = document.querySelector('#fname');
 const lastNameInput = document.querySelector('#lname');
 const subjectInput = document.querySelector('#subject');

 // Agregar el evento 'submit' al formulario
 form.addEventListener('submit', function (event) {
   // Verificar si los campos están vacíos
   if (firstNameInput.value === '' || lastNameInput.value === '' || subjectInput.value === '') {
     alert('Por favor, completa todos los campos.');
     event.preventDefault(); // Prevenir el envío del formulario
   }

   // Verificar caracteres no válidos
   if (!isValidInput(firstNameInput.value) || !isValidInput(lastNameInput.value) || !isValidInput(subjectInput.value)) {
     alert('Por favor, utiliza caracteres válidos en los campos.');
     event.preventDefault(); // Prevenir el envío del formulario
   }
 });

 // Función para verificar caracteres no válidos
 function isValidInput(input) {
   // Expresión regular para caracteres válidos (letras y espacios)
   const regex = /^[a-zA-Z\s]+$/;
   return regex.test(input);
 }