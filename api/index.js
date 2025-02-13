import login from './login.js'
const apiList = {login}
let apiListCopy = []
for (const apiListKey in apiList) {
    apiListCopy.push({
        path: `/${apiListKey}`,
        router: apiList[apiListKey],
    })
}
export default apiListCopy
