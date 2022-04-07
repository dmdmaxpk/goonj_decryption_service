const rc4 = require('rc4-cipher');
var MD5Key = '93424FF683D1E616A06711CFA710FC12';

async function decodeToBase64(encryptedStr){
    var decrypt = Buffer.from(encryptedStr, 'base64');
    var decryptStr = decrypt.toString();
    console.log("decryptStr", decryptStr);
    const msisdn = rc4.decrypt(decryptStr, MD5Key);
    console.log("msisdn", msisdn)   
}

decodeToBase64('C86DYmepAzyMeJ2y');