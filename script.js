const botaoBuscar = document.getElementById('btn-buscar');
const inputCEP = document.getElementById('input-cep');
const mensagemErroCepInvalido = document.querySelector('.mensagem-erro-cep-invalido');
const mensagemErroCepNaoEncontrado = document.querySelector('.mensagem-erro-cep-nao-encontrado');
const cardResultado = document.querySelector('.card-resultado');
const textoCEP = document.getElementById('resultado-cep');
const textoRua = document.getElementById('resultado-rua');
const textoBairro = document.getElementById('resultado-bairro');
const textoCidade = document.getElementById('resultado-cidade');
const textoEstado = document.getElementById('resultado-estado');


async function buscarCEP() {
  const cep = inputCEP.value;
  mensagemErroCepInvalido.style.display = 'none';
  mensagemErroCepNaoEncontrado.style.display = 'none';


  if (cep.length !== 8 || isNaN(Number(cep))) {
    mensagemErroCepInvalido.style.display = 'block';
    return;
  }


  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();


    if (dados.erro == "true") {
      mensagemErroCepNaoEncontrado.style.display = 'block';
      return;
    }


    textoCEP.textContent = dados.cep;
    textoRua.textContent = dados.logradouro;
    textoBairro.textContent = dados.bairro;
    textoCidade.textContent = dados.localidade;
    textoEstado.textContent = dados.estado;
    cardResultado.style.display = 'block';
  } catch (erro) {
    mensagemErroCepNaoEncontrado.style.display = 'block';
  }
}


botaoBuscar.addEventListener('click', buscarCEP);


function tratarInputCEP() {
  const cep = inputCEP.value;


  const teste = "";
  const cortado = "123456-78"


  if (cep.length > 5) {
    cep = cep.slice(0, 5) + '-' + cep.slice(5, 8)
  }
 
}


inputCEP.addEventListener('input', tratarInputCEP)

