"use strict";
const https = require('https');
const params = JSON.stringify({
    customer: 826821,
    preferred_bank: 'test-bank',
});
const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/dedicated_account',
    method: 'POST',
    headers: {
        Authorization: 'Bearer sk_test_15fed987ed8e42bf1d68ac6503757e4bf29cdcf0 ',
        'Content-Type': 'application/json',
    },
};
const req = https
    .request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
})
    .on('error', (error) => {
    console.error(error);
});
req.write(params);
req.end();
