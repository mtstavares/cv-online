// Opções do html2pdf (certifique-se de que está antes da função generatePDF)
const options = {
    margin: [0, 0, 0, 0],
    filename: 'curriculo-matheus-tavares.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: {
      format: 'a4',
      orientation: 'portrait',
      unit: 'mm',
      compressPdf: true,
      autoRotate: true,
      putOnlyUsedFonts: true
    }
  };

  function generatePDF() {
    const element = document.getElementById('area-cv');
    const optionsContainer = document.querySelector('.options');
  
    // Oculta os elementos
    optionsContainer.style.display = 'none';

  
    // Aplica escala para ajuste no PDF
    element.style.transform = 'scale(0.80)';
    element.style.transformOrigin = 'top left';
    element.style.width = '121%';
    element.style.height = 'auto';
    element.style.overflow = 'hidden';
  
    html2pdf()
      .set(options) // Agora `options` está definido corretamente
      .from(element)
      .save()
      .finally(() => {
        // Restaura os estilos e exibe novamente os elementos ocultos
        element.style.transform = '';
        element.style.transformOrigin = '';
        element.style.width = '';
        element.style.height = '';
        element.style.overflow = '';
  
        optionsContainer.style.display = 'flex';
        
      });
  }
  
  // Evento no botão
  document.getElementById('generate-pdf').addEventListener('click', generatePDF);
  
  

//   Dark mode

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Função que atualiza o ícone do botão com base no tema atual
function updateIcon() {
  toggleButton.innerHTML = body.classList.contains('dark-mode')
    ? '<i class="fa-solid fa-sun"></i>' // Sol para modo escuro
    : '<i class="fa-solid fa-moon"></i>'; // Lua para modo claro
}

// Verifica se já existe preferência salva
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}
updateIcon(); // Aplica ícone correto ao carregar

// Alterna tema e ícone
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Salva preferência
  localStorage.setItem(
    'dark-mode',
    body.classList.contains('dark-mode') ? 'enabled' : 'disabled'
  );

  updateIcon(); // Atualiza ícone
});

