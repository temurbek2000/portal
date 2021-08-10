import{HttpRequestHub} from '../HttpRequestHub';
const BASE_URL = '/api/auth';
const BASE_URL_USER = '/api/user';


//GET MODULES
export const getDistricts =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/districts`
    };
    return HttpRequestHub(config);
};

export const getDistrictByRegionId =(regionId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/districts/region/${regionId}`
    };
    return HttpRequestHub(config);
};

export const getMainSliders =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/mainSliders`
    };
    return HttpRequestHub(config);
};


export const getNews =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/news?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};
export const getPopularNews =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/news/viewCount?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getNewsById =(news_id)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/news/${news_id}`
    };
    return HttpRequestHub(config);
};

export const getNewsCategorys =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/newsCategorys?`
    };
    return HttpRequestHub(config);
};

export const getNewsByCategoryId =(newscategoryId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/news/category/${newscategoryId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getRegions =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/regions`
    };
    return HttpRequestHub(config);
};



export const getVideoLessons =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/videoLessons?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getFile =(fileId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/file/${fileId}`
    };
    return HttpRequestHub(config);
};

export const getConsultations =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/consultations?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getConsultationById =(consultationId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/consultation/${consultationId}`
    };
    return HttpRequestHub(config);
};

export const getConsultationRepliesByReplyId =(replyId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/consultation/reply/${replyId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getConsultationRepliesByReplyIdAll =(replyId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/consultation/reply/${replyId}`
    };
    return HttpRequestHub(config);
};


export const getForums =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/forums?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getForumsPopular =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/forums/popular?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};
export const getForumById =(consultationId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/forum/${consultationId}`
    };
    return HttpRequestHub(config);
};

export const getForumRepliesByReplyId =(replyId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/forums/reply/${replyId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getForumRepliesByReplyIdAll =(replyId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/forums/reply/${replyId}`
    };
    return HttpRequestHub(config);
};

export const getManualCategorys =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/manualCategorys`
    };
    return HttpRequestHub(config);
};

export const getManuals =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/manuals?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getManualsByCategoryId =(manulCategorylId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/manual/${manulCategorylId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};


export const getUsefulLinkCategorys =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/usufulLinkCategorys?`
    };
    return HttpRequestHub(config);
};

export const getUsefulLinks =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/usufulLinks?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const getUsefulLinksByCategoryId =(usefulcategorylId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/usufulLinks/category/${usefulcategorylId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};


export const getContestCategories =()=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/contestCategorys`
    };
    return HttpRequestHub(config);
};




export const getContests =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/contests?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};




export const getContestsByCategoryId =(categoryId,page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/contests/category/${categoryId}?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};


export const getContestyId =(contestId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/contest/${contestId}`
    };
    return HttpRequestHub(config);
};



export const getGalleryById =(galleryId)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/gallery/${galleryId}`
    };
    return HttpRequestHub(config);
};


export const getGallerys =(page,size)=> {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/gallerys?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};




//USER-CONTROLLER


export const postConsultation =(data)=> {
    const config = {
        method: 'POST',
        url: `${BASE_URL_USER}/consultation/save`,
        data:data,
    };
    return HttpRequestHub(config);
};

export const editConsultation =(data,editId)=> {
    const config = {
        method: 'PUT',
        url: `${BASE_URL_USER}/consultation/edit/${editId}`,
        data:data,
    };
    return HttpRequestHub(config);
};

export const deleteConsultation =(id)=> {
    const config = {
        method: 'PUT',
        url: `${BASE_URL_USER}/consultation/delete/${id}`,
    };
    return HttpRequestHub(config);
};


export const postForum =(data)=> {
    const config = {
        method: 'POST',
        url: `${BASE_URL_USER}/forum/save`,
        data:data,
    };
    return HttpRequestHub(config);
};

export const editForum =(data,editId)=> {
    const config = {
        method: 'PUT',
        url: `${BASE_URL_USER}/forum/edit/${editId}`,
        data:data,
    };
    return HttpRequestHub(config);
};

export const deleteForum =(id)=> {
    const config = {
        method: 'PUT',
        url: `${BASE_URL_USER}/forum/delete/${id}`,
    };
    return HttpRequestHub(config);
};
