//BUG: fazer o preco total dos produtos e mostrar em carrinho e no modal
function getPedidosFromCookie() {
  //BUG: nao pega o preco so o item
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'pedidos') {
      const pedidos = JSON.parse(decodeURIComponent(value)); 
      return pedidos.map(pedido => {
        const [item, preco] = pedido.split('|');
        return { item, preco: parseFloat(preco) }; 
      });
    }
  }
  return [];
}

function exibirPedidosNoCarrinho() {
  const pedidos = getPedidosFromCookie();
  const carrinhoDiv = document.getElementById('carrinho');
  carrinhoDiv.innerHTML = '';

  pedidos.forEach(pedido => {
    const pedidoDiv = document.createElement('div');
    //BUG: nao exibe o nome do item e seu preço
    pedidoDiv.textContent = `${pedido.item} - R$ ${pedido.preco.toFixed(2)}`; 
    carrinhoDiv.appendChild(pedidoDiv);
  });
}

function exibirModal() {
  const modal = document.getElementById('pedidoModal');
  const pedidoConfirmado = document.getElementById('pedidoConfirmado');
  const pedidos = getPedidosFromCookie();
  let mensagem = '<b>Pedido confirmado:</b><br>';
  let precoTotal = 0;
  const taxaEntrega = 10;

  mensagem += `<br><b>Itens:</b><br>`;

  pedidos.forEach(pedido => {
    mensagem += `${pedido.item} - R$ ${pedido.preco.toFixed(2)}<br>`;
    precoTotal += pedido.preco;
  });

  precoTotal += taxaEntrega;

  mensagem += `<br><b>Taxa de Entrega:</b> R$ ${taxaEntrega.toFixed(2)}<br><br>`;
  mensagem += `<b>Preço Total:</b> R$ ${precoTotal.toFixed(2)}`;
  pedidoConfirmado.innerHTML = mensagem;
  modal.style.display = 'block';
}

function changePage(page) {
  window.location.href = page;
}

const confirmarPedidoButton = document.getElementById('confirmarPedidoButton');
confirmarPedidoButton.addEventListener('click', function () {
  exibirModal();
  limparPedidos();
});

function limparPedidos() {
  document.cookie = 'pedidos=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

//BUG: nao adiciona o preco so o nome
function adicionarAoCarrinho(item) {
  let pedidos = getPedidosFromCookie();
  pedidos.push({ item, preco: precosDosItens[item] });
  document.cookie = `pedidos=${JSON.stringify(pedidos)}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
}

window.addEventListener('beforeunload', function (event) {
});

exibirPedidosNoCarrinho();