import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN

export default (emails) => {

  return emails.reduce((acc, email) => {

    const domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {

      if (!acc[domain]) {

        acc[domain] = 1;
      } else {
        
        acc[domain] += 1;
      }
    }
    return acc;
  }, {});
};

// END