const axios = require('axios');

async function fetchDataFromJavgg(query) {
    try {
        const response = await axios.get(`https://javgg.me/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from javgg.me:', error);
        return [];
    }
}

async function fetchDataFromJavx357(query) {
    try {
        const response = await axios.get(`https://javx357.com/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from javx357.com:', error);
        return [];
    }
}

module.exports = { fetchDataFromJavgg, fetchDataFromJavx357 };
