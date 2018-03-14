  // YOUR CODE GOES HERE

//API1 - NY TIMES

let updateWidget2 = function(data) {

  console.log("Got NY Times data: ", data)

      currentSummary = data.response.docs['0'].web_url
      currentPreview = data.response.docs['0'].snippet
      currentAuthor = data.response.docs['0'].byline.original

          console.log(currentPreview)
          console.log(currentSummary)
          console.log(currentAuthor)

      $(articleAuthor).html(currentAuthor)
      $(articlePreview).html(currentPreview)
      $(articleSummary).html(currentSummary)

}

//API News API

  let updateWidget3 = function(data2) {

    console.log("Got News Api data: ", data2)

        articleTitle = data2.articles["0"].title
        articleLink = data2.articles["0"].url
        articleAuthor = data2.articles["0"].author

        console.log(articleTitle)
        console.log(articleLink)
        console.log(articleAuthor)

        $(h42).html(articleTitle)
        $(p2).html(articleAuthor)
        $(l2).html(articleLink)
}


//API - OneForge (Currency Exchange)

let updateWidget4 = function(data3) {

  console.log("Got Currency data: ", data3)

      pUSDEUR = data3['0'].price
      pGBPEUR = data3['1'].price
      pEURSEK = data3['2'].price
      pEURJPY = data3['3'].price
      pGBPUSD = data3['4'].price
      pGBPCAD = data3['5'].price

      console.log(pUSDEUR)
      console.log(pGBPEUR)
      console.log(pEURSEK)
      console.log(pEURJPY)
      console.log(pGBPUSD)
      console.log(pGBPCAD)

      $(iUSDEUR).html("USDEUR" + "  " + pUSDEUR)
      $(iGBPUSD).html("USDGBP" + "  " + pGBPUSD)
      $(iEURSEK).html("EURSEK" + "  " + pEURSEK)
      $(iEURJPY).html("EURJPY" + "  " + pEURJPY)
      $(iGBPUSD).html("GBPUSD" + "  " + pGBPUSD)
      $(iGBPCAD).html("GBPCAD" + "  " + pGBPCAD)

}


//API - NYTIMES
  let newYorkTimes = function(location) {

  //  let apiKey = '61ff4b7eb7b04bc6a9f270508ac3c408'; // Added my key
    let newYorkTimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=61ff4b7eb7b04bc6a9f270508ac3c408&q=financial'

  fetch(newYorkTimesURL).then(convertToJSON).then(updateWidget2).catch(displayError);

  }


//API - NewsAPI
let newsApi = function(location2) {

var url = 'https://newsapi.org/v2/top-headlines?' +
          'q=stocks&' +
          'apiKey=233cd85eecae4a0dac4aeded80246fca';
var req = new Request(url);


fetch(url).then(convertToJSON).then(updateWidget3).catch(displayError);

}


//API - OneForge

let oneForge = function(currency) {

//  let apiKey = 'o9wKdlhvtECfiL2o5uO9OJl7WQp8rj';
  let exrateURL = 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,EURGBP,EURSEK,EURJPY,GBPUSD,GBPCAD,GBPJPY,AUDUSD,AUDCAD,AUDJPY&api_key=o9wKdlhvtECfiL2o5uO9OJl7WQp8rjh2'

  fetch(exrateURL).then(convertToJSON).then(updateWidget4).catch(displayError);

}


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

window.onload = newYorkTimes();
window.onload = newsApi();
window.onload = oneForge();
$('#crazy_exchange').on('click',oneForge)
