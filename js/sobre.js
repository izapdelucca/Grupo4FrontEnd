$('.carousel').carousel({
    interval: 3000 // Tempo de transição em milissegundos 
  })

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));