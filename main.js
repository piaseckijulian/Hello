/* Creating a variable called helloDiv and assigning it the value of the element with the id of hello. */
const helloDiv = document.getElementById('hello');

/**
 * It's an async function that fetches data from an API, parses it, and then passes it to another
 * function.
 */
const getData = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '51f74c4f0cmsh9a84f657a6708cap1bb793jsn44041051020c',
      'X-RapidAPI-Host':
        'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    },
  };

  const url =
    'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';

  const response = await fetch(url, options);
  const data = await response.json();

  const lang = data.languages.slice(0, 2);
  const country = data.country;
  const ip = data.ip;

  getMessage(lang, ip, country);
};

/**
 * It takes a language, an IP address, and a country name, and then it uses the language and IP address
 * to get a greeting from the API, and then it displays the greeting in the country name
 * @param lang - The language code of the language you want to get the greeting for.
 * @param ip - The IP address of the user.
 * @param country - The country code of the user's location.
 */
const getMessage = async (lang, ip, country) => {
  const proxy = 'https://api.allorigins.win/get?url=';
  const url = `https://www.stefanbohacek.com/hellosalut/?lang=${lang}&ip=${ip}`;

  const response = await fetch(`${proxy}${encodeURIComponent(`${url}`)}`);
  const data = await response.json();

  const hello = JSON.parse(data.contents).hello;

  helloDiv.innerHTML = `In <b>${country}</b> we say <b>${hello}</b>!`;
};

/* It's calling the getData function when the window loads. */
window.onload = getData;
