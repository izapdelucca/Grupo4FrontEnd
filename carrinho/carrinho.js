document.addEventListener("DOMContentLoaded", function() {
  const carrinhoContainer = document.getElementById('carrinho');
  const itensCarrinho = getItensCarrinho();

  if (itensCarrinho.length > 0) {
      renderizaCarrinho(itensCarrinho, carrinhoContainer);
  } else {
      carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio!</p>";
  }

  const confirmarPedidoBtn = document.getElementById('confirmarPedido');
  confirmarPedidoBtn.addEventListener('click', function() {
      mostrarModalPedido(itensCarrinho);
  });
});

function getItensCarrinho() {
  const itens = localStorage.getItem('carrinhoItens');
  return itens ? JSON.parse(itens) : [];
}

function renderizaCarrinho(itens, container) {
  let html = "<div class='list-group'>";
  itens.forEach(item => {
      html += `
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${item.nome}</h5>
                  <small>R$${item.preco}</small>
              </div>
              <button onclick="removerItem('${item.nome}')" class="btn btn-danger btn-sm">Remover</button>
          </a>
      `;
  });
  html += "</div>";
  container.innerHTML = html;
}

function mostrarModalPedido(itens) {
  const modal = document.getElementById('pedidoModal');
  const modalContent = document.getElementById('pedidoConfirmado');
  let total = 0;

  // Adiciona o cabeçalho em negrito antes da lista de itens
  let conteudoModal = `<b>Seu pedido:</b><br><br>`;

  // Constrói a lista de itens, incluindo o nome e o preço de cada um
  itens.map(item => {
      total += parseFloat(item.preco.replace(',', '.'));
      conteudoModal += `${item.nome} - R$${item.preco}<br>`;
  }).join("");

  // Adiciona o preço total no final da lista
  conteudoModal += `<br><b>Preço total:</b> R$${total.toFixed(2)}`;

  // Configura o conteúdo do modal e exibe o modal
  modalContent.innerHTML = conteudoModal;
  modal.style.display = 'block';
}


function removerItem(nomeItem) {
  let itens = getItensCarrinho();
  itens = itens.filter(item => item.nome !== nomeItem);
  localStorage.setItem('carrinhoItens', JSON.stringify(itens));
  document.getElementById('carrinho').innerHTML = "";
  renderizaCarrinho(itens, document.getElementById('carrinho'));
}
