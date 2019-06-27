const https = require('https');
const http = require('http');

// console.log("hello world");
// console.error('this is for logging error messages');
// console.dir({name: "Jax", age: "23"});

//Print error message
function printError(error) {
    console.error(error.message);
}

//Problem: we need a simple way to look at a users badge count and javascript points
//Solution: use node.js to connect to treehouses api to get profile information to print out

//Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} total points in JavaScript`;
    console.log(message);
 };

 function get(username) {
    try {
        //connect to the api url (https://teamtreehouse.com/username.json)
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            // console.log('statusCode:', response.statusCode);
            // console.log('headers:',response.headers)
            if (response.statusCode === 200) {
                let body = "";

                response.on('data', (data) => {
                    //process.stdout.write(data);
                    //Read the data
                    body += data.toString();
                    
                });

                response.on('end', ()=> {
                    try {
                        const profile = JSON.parse(body);
                        //Parse the data
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                        //print the data  
                    } catch (error) {
                        printError(error)
                    }
                });

            } else {
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
            
            
            
        });

        request.on('error', printError);
    } catch (error) {
        printError(error);
    }
    

}

module.exports.get = get;