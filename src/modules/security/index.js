import CryptoJS from 'crypto-js'
export function md5(str){
    return CryptoJS.MD5(str).toString()
}
export function sha1(str){
    return CryptoJS.SHA1(str).toString()
}
export function sha256(str){
    return CryptoJS.SHA256(str).toString()
}
export function sha512(str){
    return CryptoJS.SHA512(str).toString()
}
export function hmacMd5(str,secret){
    return CryptoJS.HmacMD5(str,secret).toString()
}
export function  aesEncrypt(text,secret,ivstr){
    const key = CryptoJS.enc.Utf8.parse(secret);  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse(ivstr);   
    let srcs = CryptoJS.enc.Utf8.parse(text);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString();
}
export function aesDecrypt(text,secret,ivstr){
    let encryptedHexStr = CryptoJS.enc.Hex.parse(text);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const key = CryptoJS.enc.Utf8.parse(secret);  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse(ivstr); 
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}