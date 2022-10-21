import AxiosRequest from '../utils/AxiosRequest'

export const getConfig = async (id) => {
    const request = {
        url : `${process.env.REACT_APP_API}/configuration/${id}`,
        method : 'get',
    }
    return await AxiosRequest(request)
}

export const setConfig = async (data) => {
    const request = {
        url : `${process.env.REACT_APP_API}/configuration/${data.id}`,
        method : 'post',
        data : data,
    }
    return await AxiosRequest(request)
}