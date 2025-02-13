import router from '../middleware/router.js';

// router.get('/', (req, res) => {
//     res.send('Hello World!');
// });

router.post('/', (req, res) => {
    console.log('登錄', req)
    res.send('登錄');
})
export default router
