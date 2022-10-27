import Axios from "axios";
import { DOMAIN,TOKEN } from "../utils/setting/Config";

import React from 'react'
import { get, method } from "lodash";

export const baseServicers = () => {
put= (url,model) =>{
    return Axios({
        url:`${DOMAIN}/${url}`,
        method:'PUT',
        data:model,
        headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}

    })
}
post = (url, model) =>{
    return Axios({
        url:`${DOMAIN}/${url}`,
        method:'POST',
        data:model,
        headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
    })
}
get = (url) =>{
    return Axios({
        url:`${DOMAIN}/${url}`,
        method:'GET',
        data:model,
        headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}
    })
}
// delete = (url) =>{
// return Axios({
//     url:`${DOMAIN}/${url}`,
//     method:'DELETE',
//     headers:{'Authorization':'Bearer ' + localStorage.getItem(TOKEN)}}
// })
// }
}

