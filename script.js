const divResult = document.getElementById('divResult');
const form = document.getElementById('formId');

form.addEventListener('submit', event => {
    event.preventDefault();
    const cep = document.getElementById('cepInput').value;
    console.log(cep);
    chamaAPI(cep);
})

async function chamaAPI(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    // fetch(url)
    //     .then(function(response) {
    //         console.log('Resposta do primeiro then', response);
    //         return response.json();
    //     })
    //     .then(function(result) {
    //         console.log('resposta da segunda requisicao', result);
    //         return result
    //     });

    const response = await fetch(url)
    const result = await response.json();

    console.log(response);

    renderList = document.createElement('li');

    renderList.innerHTML = `
        <span>${result.logradouro}</span>, 
        <span>${result.bairro}</span>,
        <span>${result.uf}</span>
    `;

    divResult.append(renderList);

}