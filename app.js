// ---------> LINK da API COM A CHAVE;
const apiURL = `https://openexchangerates.org/api/latest.json?app_id=12aa20bdb04b4a30bb8d11e98711eb33`;
//--------------------------------
//---------> Função para chamar a API, utilizando o Async para tornar mais fácil a sincronização da API;
async function getApi(){
//---------------------------------------------------------------------
// ------------------> Fetch para pegar os dados da API;
    const api = await fetch(apiURL);
//------------------------------------------------------------------
//---------> .json() para converter os dados da API
    const data = await api.json();
// ------------------------------------------
//--------------------> Manipulação de elementos inseridos no DOM;
    const realValue = document.querySelector(".realValue");
    const dolInsert = document.querySelector(".dolInsert");
    const converted = document.querySelector(".converted");
//---------------------------------------------------------------
//------------------> Acessando os dados de dentro da API, confirmei que o parâmetro para pegar a moeda brasileira é o rates.BRL, por isso o valor foi passado desta forma,
//------------------>Como o valor da moeda vem com muitas casas depois da vírgula, usei o toFixed(2) pegando apenas as duas casas depois da vírgula.
    const dolarHoje = data.rates.BRL.toFixed(2);
//-------------------------------------------------------
//--------------> Aqui eu passei a variável que está constantemente atualizada para dentro do HTML, assim sempre que o usuário abrir a página verá o valor do Dolar;
    dolInsert.innerHTML = ` R$${dolarHoje}`;
// -----------------------------------------------------------------

//----------> Função para converter o Real para Dólar;
    function conversor(){
//--------------------------------------------------------------------
//-------------> Não tem mistério, é o valor passado no input * o valor atual do dólar, valor este fornecido e atualizado diariamente pela API.
        const valorConvertido = (realValue.value * dolarHoje).toFixed(2);
        converted.innerHTML = ` R$${valorConvertido}`;
//--------------------------------------------------------------------      
    }
//------------------> Evento para que os valores passados no input sejam convertidos imediatamente.
    realValue.addEventListener("input", conversor);
//---------------------------------------------------------------
}

//-----------> Por fim, função invocada.
getApi()



