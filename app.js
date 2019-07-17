$(() => {
  ///////////////////Price of the Coin//////////////////////
  // const coin = 'BTC'
  // const endpoint = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD,JPY,EUR,BTC?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`
  const $marketCapNumber = 100;
  const endpoint = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${$marketCapNumber}&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`;
  console.log(endpoint);

  const handleData = data => {
    // Figuring out how to add rows
    for (let i = 0; i < $marketCapNumber; i++) {
      $('.a').append(
        "<tr class='tableRowData'>" +
          "<td class='rank data' id = '1'> </td>" +
          "<td class='name data' id = '2'> </td>" +
          "<td class=' symbol data' id= '3'> </td>" +
          "<td class=' marketCap data' id ='4'> </td>" +
          "<td class='price data' id='5'> </td>" +
          "</tr>"
      );
    }
  
    //data from the API
    for (let j = 0; j < 100; j++) {
      // Name
      
      let name = data.Data[j].CoinInfo.FullName;
      // symbol e.g btc, xrp, ltc
      let symbol = data.Data[j].DISPLAY.USD.FROMSYMBOL;
      //  price
      let price = data.Data[j].DISPLAY.USD.PRICE;
      //   marketcap
      let $marcketCap = data.Data[j].DISPLAY.USD.MKTCAP;

    
      //   created inputs
      const $nameOfCoin = $('<p>').text(`${name}`);
      const $ticker = $('<p>').text(`${symbol}`);
      const $coinprice = $('<p>').text(`${price}`);
      const $totalMarketCap = $('<p>').text(`${$marcketCap}`);
      // assigning variable to class names
        const nameClass = $('.name');
        const symbolClass= $('.symbol');
        const priceClass = $('.price');
        const marketCapClass = $('.marketCap');
      // append to the <td>
      $(nameClass).append($nameOfCoin);
      $(symbolClass).append($ticker);
      $(priceClass).append($coinprice);
      $(marketCapClass).append($totalMarketCap);
      
    }
  };
  $.ajax({
    url: endpoint
  }).then(handleData);
});
