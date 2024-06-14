 // Datos de las personas falsas
 const personas = [
    { nombre: "Lucía", edad: 25, genero: "Femenino", provincia: "Buenos Aires", foto: "https://st.depositphotos.com/1075946/3664/i/450/depositphotos_36646831-stock-photo-woman-working-on-laptop.jpg" },
    { nombre: "Juana", edad: 30, genero: "Masculino", provincia: "Córdoba", foto: "https://img.freepik.com/foto-gratis/mujer-negocios-chaqueta-cuadros-sonrisa-mientras-sentado-escritorio-su-oficina_197531-10661.jpg" },
    { nombre: "María", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://img.freepik.com/foto-gratis/cerrar-mujer-sonriente-trabajando_23-2149300652.jpg" },
    { nombre: "Juana", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://img.freepik.com/fotos-premium/mujer-que-usa-computadora-portatil-interior-oficina-casa_217884-5.jpg" },
    { nombre: "Alexa", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://media.istockphoto.com/id/1413763041/es/foto/mujer-de-negocios-sonriente-mirando-hacia-arriba-mientras-trabaja.jpg?s=612x612&w=0&k=20&c=uwTkhGeAJGlZuIHi3FOVLEySUgZWYSFhW2pnEJvO_V4=" },
    { nombre: "Ivana", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://img.freepik.com/foto-gratis/hermosa-mujer-trabajando-oficina_329181-8856.jpg" },
    { nombre: "Marcela", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://i.pinimg.com/236x/6d/83/ab/6d83ab74346a65903f21b2732d043d47.jpg" },
    { nombre: "Morena", edad: 22, genero: "Femenino", provincia: "Santa Fe", foto: "https://img.freepik.com/foto-gratis/mujer-negocios-trabajando-oficina-computadora_1303-28019.jpg" }
  ];
  
  // Función para mostrar el historial de personas
  function mostrarHistorial() {
    const historialElemento = document.getElementById("historial-personas");
  
    personas.forEach(persona => {
      const personaElemento = document.createElement("div");
      personaElemento.classList.add("persona");
  
      const avatarElemento = document.createElement("img");
      avatarElemento.src = persona.foto;
      avatarElemento.alt = persona.nombre;
      avatarElemento.classList.add("avatar");
      personaElemento.appendChild(avatarElemento);
  
      const detalleElemento = document.createElement("div");
      detalleElemento.classList.add("detalle");
      detalleElemento.innerHTML = `
        <p><strong>Nombre:</strong> ${persona.nombre}</p>
        <p><strong>Edad:</strong> ${persona.edad}</p>
        <p><strong>Género:</strong> ${persona.genero}</p>
        <p><strong>Provincia:</strong> ${persona.provincia}</p>
      `;
      personaElemento.appendChild(detalleElemento);
  
      historialElemento.appendChild(personaElemento);
    });
  }
  
  // Llamar a la función para mostrar el historial al cargar la página
  mostrarHistorial();
  