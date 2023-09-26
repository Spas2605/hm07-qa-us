// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyCreateKit = {
    "name": "test kit",
    cardId: 1
}

test('Response body deletes the kit', async () => {
    //add post request to create a kit
    let kitId;
    try {
        // like this? i've used the fetch to get the kit with the id of 7
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBodyCreateKit)
        });
        const postResponseBody = await response.json();
        kitId = postResponseBody.id;
    } catch(error) {
            console.error(error);
    }

    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
            method: 'DELETE'
        })
        const postResponseBody = await response.json();
        actualResponseBody = postResponseBody["ok"];
    } catch(error) {
        console.error(error);
    }
    // Checking that the resposne body contains ok: true for deleting the kit
    expect(actualResponseBody).toBe(true);
}); 


test('Should be 200 status code for successfully deleting a kit', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Checking that the actual status is 200 
    expect(actualStatus).toBe(200);
});
			
			

