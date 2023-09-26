# Sprint 7 project
In this Project, i have performed positive testing using  GET, PUT,POST,DELETE methods,as well as java script comands such as Const, Let, Try, Test,Catch, Expect and toBe. Also I utilized Postman to obtain Json body scripts.
My testing started with the Get method to retrive the status code and the response body code of and existing data in the API (see under )
test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);

});


test('Response Body should contain For Picnic', async () => {
	let actualResponsBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponsBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponsBody.name).toBe('For picnic');
});

My second test started with the POST method to obtain the status code and the response body code, by creatin a new kit and order (see under
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
	expect(actualResponsBody["courierService"]).toBe('Order and Go');
});)
Next test was using the PUT method to update/change an existing kit ( see under)
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
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
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
	expect(actualStatusCode).toBe(200);

});

test('Response body should be true', async () => {
	let actualResponsBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
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
	expect(actualResponsBody.ok).toBe(true);

});
In my last test I created a dynamic kit in Visual Studio using const requestBodyCreateKit and the POST method to create it and then deleted it using the DELETE method, again in order to obtain response status code of 200 and response body wich confirms deleting the kit. (see under)
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
		