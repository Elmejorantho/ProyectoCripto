const divisaId = document.querySelector('#divisa');
const coinId = document.querySelector('#crypto');
const formu = document.querySelector('#form');
const infoDiv = document.querySelector('#coin-info');
const inputCotizar = document.querySelector('.input-cotizacion')

//Eventos


formu.addEventListener('submit', async e => {
    e.preventDefault();
    const coinSelected = [...divisaId.children].find(option => option.selected).value;
    const divisaSelected = [...coinId.children].find(option => option.selected).value;
    const montoCotizar = inputCotizar.value;
    const URL = (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${divisaSelected}&tsyms=${coinSelected}`);
    const response = await (await fetch( URL,{method: 'GET'})).json();
    const price = (response.DISPLAY[divisaSelected][coinSelected].PRICE);
    const high = (response.DISPLAY[divisaSelected][coinSelected].HIGH24HOUR);
    const low = (response.DISPLAY[divisaSelected][coinSelected].LOW24HOUR);
    const porcentaje = (response.DISPLAY[divisaSelected][coinSelected].CHANGEPCT24HOUR);




if (!montoCotizar) {
    infoDiv.innerHTML = `
    <p>El precio actual es: <span class='coin-value'>${price}</span></p>
    <p>El precio mas alto es: <span class='coin-value'>${high}</span></p>
    <p>El precio mas bajo es: <span class='coin-value'>${low}</span></p>
    <p>Diferencia porcentual: <span class='coin-value'>${porcentaje}%</span></p>
    `
} else {

    const montoValor = (response.RAW[divisaSelected][coinSelected].PRICE);
    const result = (montoCotizar / price).toFixed(4)
    infoDiv.innerHTML = `
    <p>El precio actual es: <span class='coin-value'>${price}</span></p>
    <p>El precio mas alto es: <span class='coin-value'>${high}</span></p>
    <p>El precio mas bajo es: <span class='coin-value'>${low}</span></p>
    <p>Diferencia porcentual: <span class='coin-value'>${porcentaje}%</span></p>
    <p>Puedes comprar: <span class='coin-value'>${result}${coinSelected}</span></p>
    `


}





    
})
