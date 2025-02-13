import express from 'express'
import fs from'fs'
import api from "./api/index.js";
// import NodeRSA = require('node-rsa');
// const axios = require('axios');
const app = express();
const port = 3030;
// axios.post('https://seller.kuajingmaihuo.com/bg/quiet/api/mms/key/login').then((response) => {
//     let publicKey = `-----BEGIN PUBLIC KEY-----${response.data.result.publicKey}-----END PUBLIC KEY-----`
//     console.log(publicKey)
// })
// // const encrypt = new NodeRSA(publicKey);
// // encrypt.setOptions({encryptionScheme: 'pkcs1'})
// // const privateDer = encrypt.encrypt('Fyy990712.','base64');
// // console.log(privateDer)


console.log(api);
/**
 * 註冊所有API
 */
const registerAPI = () => {
    api.forEach(e=>{
        console.log('註冊所有API',e)
        app.use(e.path,e.router)
    })
}
registerAPI()

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
