function getData(method, url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
}

const apiKey = "47a34cf7-1720-4f1f-83ad-889fd4be0887";
getData(
  "GET",
  `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${apiKey}`,
  true
)
  // promise handling
  .then((res) => {
    const output = JSON.parse(res.target.responseText);
    document.getElementById("btn").addEventListener("click", display);
    function display() {
      const netOutput = output.data.quote.USD;
      console.log(netOutput);
      document.getElementById("data").innerHTML = `<br> <ul>
            <li><span class="badge badge-primary">Altcoin Market Capital: </span> ${netOutput.altcoin_market_cap} </li> 
            <li><span class="badge badge-secondary">Altcoin Volume 24h: </span> ${netOutput.altcoin_volume_24h} </li> 
            <li><span class="badge badge-success">Altcoin Volume 24h reported:</span> ${netOutput.altcoin_volume_24h_reported} </li> 
            <li><span class="badge badge-danger">Last Updated: </span> ${netOutput.last_updated} </li> 
            <li><span class="badge badge-warning">Total Volume 24h: </span> ${netOutput.total_volume_24h} </li> 
            <li><span class="badge badge-info">Total Volume 24h reported: </span> ${netOutput.total_volume_24h_reported} </li> 
      </ul>`;
    }
  })

  .catch();
