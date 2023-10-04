// eslint-disable-next-line no-undef
const config = require('../config');
//Using a PUT request to update a kit

const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 6,
            "quantity": 2
        }
    ]
}


test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status code is 200 
	expect(actualStatusCode).toBe(200);

});

test('Response body should be true', async () => {
	let actualResponsBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponsBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the resposne body contains ok: true 
	expect(actualResponsBody.ok).toBe(true);

});
