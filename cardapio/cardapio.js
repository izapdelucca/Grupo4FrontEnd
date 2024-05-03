const pedidoForm = document.getElementById('pedidoForm');

pedidoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const pedidosSelecionados = [];
  const pedidos = document.querySelectorAll('input[name="pedido"]:checked');

  pedidos.forEach(pedido => {
    pedidosSelecionados.push(pedido.value);
  });

  document.cookie = `pedidos=${JSON.stringify(pedidosSelecionados)}`;

  window.location.href = "../carrinho/carrinho.html";
});

//BUG: nao consigo adicionar o preco
function adicionarAoCarrinho(item) {
  let pedidos = getPedidosFromCookie();
  pedidos.push(item);
  document.cookie = `pedidos=${JSON.stringify(pedidos)}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
}