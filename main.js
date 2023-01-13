/* Creating a variable called helloDiv and assigning it the value of the element with the id of hello. */
const helloDiv = document.getElementById('hello');

/**
 * It fetches the data from the API, then parses it into JSON, then passes the country code, IP
 * address, and country name to the getMessage function.
 */
const getData = async () => {
  const url = 'http://ip-api.com/json/';

  const response = await fetch(url);
  const data = await response.json();

  getMessage(data.countryCode.toLowerCase(), data.query, data.country);
};

/**
 * It takes three arguments, makes a request to the API, and then displays the result in the DOM
 * @param lang - The language code of the language you want to display hello.
 * @param ip - The IP address of the user.
 * @param country - The country of the user.
 */
const getMessage = async (lang, ip, country) => {
  const url = `https://stefanbohacek.com/hellosalut/?lang=${lang}&ip=${ip}`;

  const response = await fetch(url);
  const data = await response.json();

  const hello = data.hello;

  helloDiv.innerHTML = `In <b>${country}</b> we say <b>${hello}</b>!`;
};
