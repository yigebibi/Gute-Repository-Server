import express from 'express';
const router = express.Router();

const errorHandler = (err, req, res, next) => {
    res.send(req)
}
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    // console.log(req.data)
    next()
})
export default router
