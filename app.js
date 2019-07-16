$(()=>{

    const coin = 'BTC'
    const endpoint = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD,JPY,EUR,BTC?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`
    
    console.log(endpoint)

const handleData = (data) =>{
    console.log(data)

    const $coindata = $('<h1>').text(data.USD)
    $('.cointainer').append($coindata)
}
    $.ajax({
        url: endpoint

    }).then(handleData)

});