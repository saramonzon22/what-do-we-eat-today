const sendSingUpToApi = data => {
    console.log('Se están enviando datos al signup:', data);
    return fetch('//localhost:4000/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
};

const objToExport = {

    sendSingUpToApi: sendSingUpToApi,

};

export default objToExport;