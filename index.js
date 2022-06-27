function global() {
  const form1 = document.querySelector('.form');
  const ola = document.querySelector('.ola')
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const nome = form1.querySelector('.nome');
    const sobrenome = form1.querySelector('.sobrenome');
    const idade = form1.querySelector('.idade');
    const peso = form1.querySelector('.peso');
    const altura = form1.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      peso: peso.value,
      altura: altura.value,
    });

    const altura2 = altura.value * altura.value;
    const result = peso.value / altura2
    const imc = result * 10000;

    console.log(result);

    console.log(pessoas);

    ola.innerHTML += `<p>Hi ${nome.value} ${sobrenome.value}, welcome to the IMC Calculator.</p>`;
    resultado.innerHTML += `<h2>Your IMC is ${imc.toFixed(2)}</h2>`;

    console.log(ola);
    console.log(resultado);

  }

  form1.addEventListener('submit', recebeEventoForm);

};

global();
