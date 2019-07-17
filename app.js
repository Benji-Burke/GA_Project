$(()=>{
    ///////////////////Price of the Coin//////////////////////
    // const coin = 'BTC'
    // const endpoint = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD,JPY,EUR,BTC?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`
    const $marketCapNumber = 100;
    const endpoint=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${$marketCapNumber}&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`
    console.log(endpoint)
   
const handleData = (data) =>{

//    for (let i =0; i<data.length; i++) {

        // Name
        let name = data.Data[0].CoinInfo.FullName;
        //  price
        let price = data.Data[0].DISPLAY.USD.PRICE;
        //   marketcap
        let $marcketCap = data.Data[0].DISPLAY.USD.MKTCAP;
        // symbol e.g btc, xrp, ltc
        let symbol = data.Data[0].DISPLAY.USD.FROMSYMBOL;
        // img 
        // let coinLogo = data.Data[0].DISPLAY.USD.IMAGEURL;
    
        
        
        
        //   created inputs
        const $coinprice = $('<h4>').text(`${price}`)
        const $totalMarketCap = $('<h4>').text(`${$marcketCap}`)
        const $ticker = $('<h4>').text(`${symbol}`)
        const $nameOfCoin = $('<h3>').text(`${name}`)
        // const $imgageOfCoin = $('<h2>').html(`<img: src =`$(coinLogo>`)
        
        const $tableRow = $('<tr>');
        $tableRow.addClass('tableRow');
        
        const $tableData = $('<td>');
        $tableData.addClass('tableData');
        
        let rowOfData = $tableRow.append('.tableData');
        $('body').append(rowOfData);
        






    // append to the dom
    $('.price').append($coinprice)
    $('.marketCap').append($totalMarketCap)
    $('.symbol').append($ticker)
    $('.name').append($nameOfCoin)
    // $('.logo').append(coinLogo)

    
    
}




    $.ajax({
        url: endpoint

    }).then(handleData)

})

