import NodeRSA from 'node-rsa'
import axios from'axios'
// Fyy990712.
const publicKeyStatic = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJpaLPONg3qWfi2kdwauqOT3L7AEK6lrMZqKYZv0ikWPZtzTqnVLMeolsE7x3Sc4UxS6ews+WS0ijwIEU8GAbhr2aJh0F+o6bpYQgWosHBts4lMW/IdtKg45DSGgBWg8gWDTK7K+T+zWfTjEQGwEgNHsZ2NbQBtTEZ35CDWUP7iQIDAQAB'
export const encrypted = async (password) => {
    // const response = await axios.post('https://seller.kuajingmaihuo.com/bg/quiet/api/mms/key/login')
    let publicKey = `-----BEGIN PUBLIC KEY-----${publicKeyStatic || response.data.result.publicKey}-----END PUBLIC KEY-----`
    console.log(publicKey)
    const encrypt = new NodeRSA(publicKey);
    encrypt.setOptions({encryptionScheme: 'pkcs1'})
    const encryptPassword = encrypt.encrypt(password,'base64');
    console.log(encryptPassword)
    return encryptPassword;
}
