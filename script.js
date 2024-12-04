// Função para abrir o modal de sucesso
function openModal() {
    document.getElementById('successModal').style.display = 'flex';
  }
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById('successModal').style.display = 'none';
  }
  
  // Manipulador de envio do formulário
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    openModal(); // Abre o modal de sucesso
  });
  