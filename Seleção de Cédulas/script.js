const linksCedulas = {
    "1 Real": "https://filatelicavitoriaregia.com.br/wp-content/uploads/2023/12/cedula-1-real-2001-anverso.jpg",
    "2 Reais": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSs2Q34ho0mdpyG6uP9Kues39iDHTo-ynSRA&s",
    "5 Reais": "https://www.bcb.gov.br/novasnotas/assets/img/section/5/5_front.jpg",
    "10 Reais": "https://www.bcb.gov.br/novasnotas/assets/img/section/10/10_front.jpg",
    "20 Reais": "https://extra.globo.com/incoming/25533889-e67-697/w448/download.jpg",
    "50 Reais": "https://www.bcb.gov.br/novasnotas/assets/img/section/50/50_front.jpg",
    "100 Reais": "https://www.bcb.gov.br/novasnotas/assets/img/section/100/100_front.jpg"
};

const cedulaSelect = document.getElementById("cedula-select");
const exibirBtn = document.getElementById("exibir-btn");
const imagemCedula = document.getElementById("imagem-cedula");
const infoText = document.getElementById("info-text");

exibirBtn.addEventListener("click", () => {
    const selectedCedula = cedulaSelect.value;

    if (!selectedCedula) {
        infoText.textContent = "Por favor, selecione uma cedula.";
        imagemCedula.style.display = "none";
        return;
    }

    const imageUrl = linksCedulas[selectedCedula];
    if (imageUrl) {
        imagemCedula.src = imageUrl;
        imagemCedula.alt = `Imagem da cédula de ${selectedCedula}`;
        imagemCedula.style.display = "block";
        infoText.textContent = `Voce selecionou a cedula de ${selectedCedula}.`;
    } else {
        infoText.textContent = "Erro ao carregar a imagem. Verifique o link.";
        imagemCedula.style.display = "none";
    }
});
