const axios = require('axios').default;

/**
 * Get Docker Hub connection info
 * 
 * @param {string} host Portainer host
 * @param {string} token JWT token
 */
const getDockerhubInfo = async (host, token) => {
    const url = host + '/api/dockerhub';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};
