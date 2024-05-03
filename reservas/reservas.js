document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservaForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Exibindo o modal de reserva confirmada
      exibirModalReserva();
    });
  });
  
  function exibirModalReserva() {
    const modal = document.getElementById('reservaModal');
    const reservaConfirmada = document.getElementById('reservaConfirmada');
  
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const data = new Date(document.getElementById('data').value);
    const horario = document.getElementById('horario').value;
    const pessoas = document.getElementById('pessoas').value;
    const ambiente = document.getElementById('ambiente').value;
  
    const mensagem = `
      <b>Reserva Confirmada:</b><br><br>
      <b>Nome:</b> ${nome}<br>
      <b>Telefone:</b> ${telefone}<br>
      <b>Data:</b> ${data.toLocaleDateString('pt-BR')}<br>
      <b>Horário:</b> ${horario}<br>
      <b>Número de Pessoas:</b> ${pessoas}<br>
      <b>Ambiente:</b> ${ambiente}<br><br>
      Sua reserva foi confirmada. Entraremos em contato para mais detalhes!
    `;
  
    reservaConfirmada.innerHTML = mensagem;
    modal.style.display = 'block';
  }
  