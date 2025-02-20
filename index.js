import express from 'express'
import bodyParser from 'body-parser'
import fs from'fs'
import api from "./api/index.js";

const app = express();
const port = 3030;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(bodyParser.text())
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
