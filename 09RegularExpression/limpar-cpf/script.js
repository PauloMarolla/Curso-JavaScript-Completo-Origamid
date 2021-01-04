const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText)
}

const limparCpf = (cpf) => {
  // D maisculo, tudo q n for digito
  return cpf.replace(/\D/g, '');
}

const construirCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCpf);
}


const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })

  console.log(cpfsFormatados);
}


substituirCPFS(cpfsList);