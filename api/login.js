import router from '../middleware/router.js';
import express from 'express'
import {encrypted} from "../utils/rsa.js";
import axios from 'axios';

router.post('/',async (req, res) => {
    let body = []
    console.log('登錄', req.body)
    const { username, password } = req.body
    const data = {
        loginName: username,
        encryptPassword: await encrypted(password),
        keyVersion: '1'
    }
    const response = await axios.post({url: 'https://seller.kuajingmaihuo.com/bg/quiet/api/mms/login', data, headers: {
        'Content-Type': 'application/json'
        }}).catch(err=>{
        console.log(err)
        res.send( {
            "code": 200,
            "data": JSON.stringify(err)
        });
    })

    res.send( {
        "code": 200,
        "data": JSON.stringify(data)
    });
})
export default router
