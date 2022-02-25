import CryptoJS from 'crypto-js'
export function md5(str){
    return CryptoJS.md5(str)
}
export function sha1(str){
    return CryptoJS.sha1(str)
}
export function hmacMd5(str,secret){
    return CryptoJS.hmacMd5(str,secret)
}