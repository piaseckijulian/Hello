const message = document.getElementById('message');

const getData = async () => {
  const url = 'http://ip-api.com/json/';

  const response = await fetch(url);
  const data = await response.json();

  getMessage(data.countryCode.toLowerCase(), data.query);
};

const getMessage = async (lang, ip) => {
  const url = `https://stefanbohacek.com/hellosalut/?mode=auto`;

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
    message.innerText = helloMessage;
  } else {
    message.innerText = hello;
  }
};
