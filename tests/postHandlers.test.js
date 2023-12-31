// eslint-disable-next-line no-undef
const config = require('../config');
//A POST request to create an order
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

test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
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
	expect(actualStatusCode).toBe(201);
});

test('Response Body should contain Order and Go', async () => {
	let actualResponsBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		
		});
		actualResponsBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the resposne body contains Order and Go
	expect(actualResponsBody["courierService"]).toBe('Order and Go');
});