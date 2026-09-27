const { fetchDataFromJavgg, fetchDataFromJavx357 } = require('./fetchData');

async function combineData(query) {
    const dataFromJavgg = await fetchDataFromJavgg(query);
    const dataFromJavx357 = await fetchDataFromJavx357(query);
    return [...dataFromJavgg, ...dataFromJavx357];
}

module.exports = combineData;
