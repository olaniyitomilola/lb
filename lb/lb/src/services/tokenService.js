const setAccessToken = (token) =>{
    localStorage.setItem('lb_ac_tk', token)
}

const getAccessToken = ()=>{
    return localStorage.getItem('lb_ac_tk')
}

const removeAccessToken = ()=>{
    localStorage.removeItem('lb_ac_tk')
}

module.exports = {setAccessToken,getAccessToken,removeAccessToken}