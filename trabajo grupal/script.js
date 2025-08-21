// Contacto

  (function(){
    emailjs.init("UNWfOiZLTurtT0nfb"); // 👈 pon aquí tu Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_xossghc", "template_4bhxnwu", this)
      .then(() => {
        alert("✅ Mensaje enviado correctamente");
      }, (err) => {
        alert("❌ Error al enviar: " + JSON.stringify(err));
      });
  });

// Capturamos el formulario
  const form = document.getElementById('form-testimonio');
  const lista = document.getElementById('lista-testimonios');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtenemos los valores
    const texto = document.getElementById('nuevo-testimonio').value;
    const nombre = document.getElementById('nombre-testimonio').value;

    // Creamos los elementos nuevos
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = `"${texto}"`;

    const p = document.createElement('p');
    p.textContent = `- ${nombre}`;

    // Agregamos al listado
    lista.appendChild(blockquote);
    lista.appendChild(p);

    // Limpiamos el formulario
    form.reset();
  });