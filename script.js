const botaoAbrirMenu = document.getElementById('abrir-menu');
const menuLateral = document.getElementById('menu-lateral');
botaoAbrirMenu.addEventListener('click', () => {
  menuLateral.showModal();
});