
export const SetLocalstorage=(key,value)=>{
    localStorage.setItem(key,value)
    // window.location.reload()
}

export const DeleteLocalStorage=(value)=>{
    localStorage.removeItem(value)
}

export let GetLanguage=()=>{
    return localStorage.getItem("news_project")==='UZ'
}
export let GetEnLanguage=()=>{
    return localStorage.getItem("news_project")==='EN'
}
export let GetRuLanguage=()=>{
    return localStorage.getItem("news_project")==='RU'
}
export let getValue=()=>{
    return localStorage.getItem("news_project");
}
