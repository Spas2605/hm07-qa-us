# Sprint 7 project
In this Project, i have performed positive testing using  GET, PUT,POST,DELETE methods,as well as java script comands such as Const, Let, Try, Test,Catch, Expect and toBe. Also I utilized Postman to obtain Json body scripts.
Steps to reproduce trough this project:
Step 1: Connect your GitHub, click the "Link GitHub account" button on top of the project page, confirm that you want to link your GitHub account. 
Step 2. Clone the repo to your computer, Once you’ve linked your Practicum account with GitHub, a repository will be created automatically. The repository name will be hm07-qa-us.
Go to GitHub and clone the new repo to your local computer, using the following steps:
Open your preferred terminal emulator. If you’re on Windows, use Git Bash.
If you haven’t done so already, create a directory to store all of your projects. For example:
 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
  
Clone the repo. The command you use will depend on the authentication strategy that you’re using.
 # if you are using HTTPS
 git clone https://github.com/username/hm07-qa-us.git
 
 # if you are using SSH
 git clone git@github.com:username/hm07-qa-us.git
  run npm install from the console in your project folder.
  Start the server. 
  In config.js, replace the API URL with the unique link generated after the launch of Urban Grocers server. 
  Open VS Code and select File → Open Folder and then select the hm07-qa-us folder that you cloned to your computer.
  Testing getHandlers: 
  Go to Swagger or API docs to retrieve and end point for the GET method
  Go to Postman, choose GET as a method, insert the newly generated URL followed by the end poin api/v1/kits/1. Click on Send to make sure a 200 Status code is deliverd and the resposne body contains For picnic.
  Using VS Code open the hm07-qa-us.git project folder and inside open the file getHandlers.test.js
  Fill in the tamplate with this code:
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
Save the file!
in the console enter comand npx jest /getHandlers and press enter.

Testing postHandlers:
Go to Swagger or API docs to retrieve and end point for the GET method
  Go to Postman, choose POST as a method, insert the newly generated URL followed by the end poin api/v1/orders. Click on Send to make sure a 200 Status code is deliverd and the resposne body contains Order and Go
  Open the file postHandlers.test.js
  Fill in the tamplate with this code:
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
Save the file!
in the console enter comand npx jest /postHandlers and press enter.

Testing putHandlers:
Go to Swagger or API docs to retrieve and end point for the GET method
  Go to Postman, choose POST as a method, insert the newly generated URL followed by the end poin api/v1/kits/8` Click on Send to make sure a 200 Status code is deliverd and the resposne body contains Order and Go
  Open the file putHandlers.test.js
  Fill in the tamplate with this code:
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
Save the file!
in the console enter comand npx jest /putHandlers and press enter.


Testing deleteHandlers:
Go to Swagger or API docs to retrieve and end point for the GET method
  Go to Postman, choose POST as a method, insert the newly generated URL followed by the end poin api/v1/kits. Click on Send to make sure a 200 Status code is deliverd and the resposne body contains OK
  Open the file deleteHandlers.test.js
  Fill in the tamplate with this code:
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
			
			Save the file!
in the console enter comand npx jest /deleteHandlers and press enter.
To add the project to GitHub first update the URL in the Config.js folder and save it.
go to the console and enter the following commands
git add -A
git commit -m message
git push -u
Go to GitHub to see if all the files are uploaded.