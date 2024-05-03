document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('pedidoForm');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  let itensSelecionados = [];

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              // Adiciona o item ao carrinho
              itensSelecionados.push({
                  nome: checkbox.value,
                  preco: checkbox.dataset.preco
              });
          } else {
              // Remove o item do carrinho
              itensSelecionados = itensSelecionados.filter(item => item.nome !== checkbox.value);
          }
      });
  });

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita o envio do formulário

      if (itensSelecionados.length > 0) {
          adicionaAoCarrinho(itensSelecionados);
          window.location.href = '../carrinho/carrinho.html'; // Redireciona para a página do carrinho
      } else {
          alert("Por favor, selecione pelo menos um item para adicionar ao carrinho.");
      }
  });

  function adicionaAoCarrinho(itens) {
      // Salva os itens no localStorage
      localStorage.setItem('carrinhoItens', JSON.stringify(itens));
      alert("Itens adicionados ao carrinho: " + itens.map(item => `${item.nome} (R$${item.preco})`).join(", "));
  }
});
