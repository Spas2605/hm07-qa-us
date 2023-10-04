// eslint-disable-next-line no-undef
const config = require('../config');
//A GET request to retrieve an existing kit
test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual status is 200 
	expect(actualStatusCode).toBe(200);

});


test('Response Body should contain For Picnic', async () => {
	let actualResponsBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		//Assigning the actual response body to the actualResponseBody variable
		actualResponsBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the resposne body contains For picnic
	expect(actualResponsBody.name).toBe('For picnic');
});
