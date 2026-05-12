// Seleciona o botão do menu hambúrguer
const menuToggle = document.getElementById("menuToggle");

// Seleciona o container dos links do menu
const navLinks = document.getElementById("navLinks");

// ===============================
// ABRIR / FECHAR MENU MOBILE
// ===============================
menuToggle.addEventListener("click", (e) => {
  // Impede que o clique propague para o document
  // evitando que o menu feche instantaneamente
  e.stopPropagation();

  // Adiciona ou remove a classe "active"
  // responsável por mostrar/esconder o menu
  navLinks.classList.toggle("active");
});

// =========================================
// IMPEDIR FECHAMENTO AO CLICAR NO MENU
// =========================================
navLinks.addEventListener("click", (e) => {
  // Mantém o menu aberto ao clicar dentro dele
  e.stopPropagation();
});

// =========================================
// FECHAR MENU AO CLICAR FORA
// =========================================
document.addEventListener("click", () => {
  // Remove a classe "active"
  // fechando automaticamente o menu
  navLinks.classList.remove("active");
});
