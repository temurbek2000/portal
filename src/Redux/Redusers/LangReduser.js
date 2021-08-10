import {GetEnLanguage, GetLanguage, SetLocalstorage} from "../../Utilitil";

const initialState = {
    uzLang: false,
    enLang:false,
};

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case "uzlang":

            SetLocalstorage("news_project","UZ")
            return {
                uzLang: true,
                enLang:false,
            }
        case "enLang":

            SetLocalstorage("news_project","EN")
            return {
                uzLang: false,
                enLang:true,
            }
        case "ruLang":

            SetLocalstorage("news_project","RU")
            return {
                uzLang: false,
                enLang:false,
            }

        default:

        {!GetLanguage()?SetLocalstorage("news_project","UZ"):!GetEnLanguage()?SetLocalstorage("news_project","EN"):SetLocalstorage("news_project","Ru")}
            return {
                uzLang:true,
                enLang:false
            };
    }
};
