/* Creating a variable called helloDiv and assigning it the value of the element with the id of hello. */
const helloDiv = document.getElementById('hello');

/**
 * It fetches the user's IP address and country code from the ipapi.co API, then passes the data to the
 * getMessage function.
 */
const getData = async () => {
  const url = 'https://ipapi.co/json/';

  const response = await fetch(url);
  const data = await response.json();

  const countryCode = data.country_code.toLowerCase();
  const countryName = data.country_name;
  const userIP = data.ip;

  getMessage(countryCode, userIP, countryName);
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
