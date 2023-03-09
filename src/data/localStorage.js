
function getLocalstorage(){    
    return {
        token:localStorage.getItem('token'),
        user: localStorage.getItem('userid'),
        username: localStorage.getItem('username')
    }
}

function setLocalStorage(tk,us,uname){
    localStorage.setItem('token',tk)
    localStorage.setItem('userid',us)
    localStorage.setItem('username',uname)
}

function deleteLocalstorage(){
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('username')
}

export { setLocalStorage, getLocalstorage, deleteLocalstorage }