const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://corsproxy.io/?https://zenquotes.io/api/quotes/random";

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();

  // data is an array with one object, so access first element:

  quote.innerHTML = `"${data[0].q}"`;
  author.innerHTML = `-${data[0].a}`;
}
getquote(api_url);
