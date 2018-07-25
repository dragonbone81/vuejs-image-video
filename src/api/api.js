const client_id = '5bc320d89fc9071';
const baseUrl = 'https://api.imgur.com';
const loginUrl = `${baseUrl}/oauth2/authorize?client_id=${client_id}&response_type=token&state=running`;

const getImages = async (username, token) => {
    const url = `${baseUrl}/3/account/${username}/images/`;
    const response = await fetch(url, {
        headers: {"Authorization": `Bearer ${token}`}
    });
    return response.json()
};

export default {getImages, loginUrl}