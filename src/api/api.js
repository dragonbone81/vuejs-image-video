const client_id = '5bc320d89fc9071';
const baseUrl = 'https://api.imgur.com';

const getImages = async (username, token) => {
    const url = `${baseUrl}/3/account/${username}/images/`;
    const response = await fetch(url, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    return response.json()
};

const uploadImage = async (token, formData) => {
    const url = `${baseUrl}/3/image`;
    const response = await fetch(url, {
        headers: {"Authorization": `Bearer ${token}`},
        method: 'POST',
        body: formData
    });
    return response.json()
};
const getLoginUrl = (state) => {
    return `${baseUrl}/oauth2/authorize?client_id=${client_id}&response_type=token&state=${state}`
};

export default {getImages, getLoginUrl, uploadImage}