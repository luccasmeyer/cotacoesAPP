//monta as UR
// Função para buscar dados de uma moeda
function buscarCotacao(url, elemento) {
    fetch(url) // Faz a requisição
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Filtra os dados específicos
            const moeda = Object.values(data)[0]; // Pega o primeiro objeto retornado
            const { name, code, high, low, bid } = moeda;

            // Insere os dados no HTML
            elemento.querySelector('.nome').innerText = name;
            elemento.querySelector('.code').innerText = `Código: ${code}`;
            elemento.querySelector('.high').innerText = `Alta: R$ ${high}`;
            elemento.querySelector('.low').innerText = `Baixa: R$ ${low}`;
            elemento.querySelector('.bid').innerText = `Valor: R$ ${bid}`;
        })
        .catch(error => console.error('Erro ao buscar cotação:', error));
}


const urls = {
    euro: 'https://economia.awesomeapi.com.br/json/last/EUR-BRL',
    dolar: 'https://economia.awesomeapi.com.br/json/last/USD-BRL',
    bitcoin: 'https://economia.awesomeapi.com.br/json/last/BTC-BRL'
};

// Elementos HTML
const euroDiv = document.getElementById('euro');
const dolarDiv = document.getElementById('dolar');
const bitcoinDiv = document.getElementById('bitcoin');

// Chama a função para cada moeda
buscarCotacao(urls.euro, euroDiv);
buscarCotacao(urls.dolar, dolarDiv);
buscarCotacao(urls.bitcoin, bitcoinDiv);



