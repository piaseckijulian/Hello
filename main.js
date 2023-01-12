const helloDiv = document.getElementById('hello');

const getData = async () => {
  const url = 'https://ip-api.com/json/';

  const response = await fetch(url);
  const data = await response.json();

  getMessage(data.countryCode.toLowerCase(), data.query, data.country);
};

const getMessage = async (lang, ip, country) => {
  const url = `https://stefanbohacek.com/hellosalut/?lang=${lang}&ip=${ip}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  let hello = data.hello;

  if (hello.includes('&') && hello.includes('#') && hello.includes(';')) {
    hello = hello.replace(/&/g, '');
    hello = hello.replace(/#/g, '');
    hello = hello.replace(/;/g, ' ');

    let unicode = '';
    let letters = '';

    for (const letter of hello) {
      if (letter % 1 === 0) {
        unicode += letter;
      } else {
        letters += letter;
      }
    }
    unicode = unicode.slice(0, -1);
    unicode = unicode.split(' ');

    for (let i = 0; i < unicode.length; i++) {
      unicode[i] = Number(unicode[i]);
    }

    let uniChars = '';
    unicode.map((uniChar) => {
      uniChars += String.fromCharCode(uniChar);
    });

    const helloMessage = letters + uniChars;
    helloDiv.innerHTML = `In <b>${country}</b> we say <b>${helloMessage}</b>`;
  } else {
    helloDiv.innerHTML = `In <b>${country}</b> we say <b>${hello}</b>`;
  }
};
