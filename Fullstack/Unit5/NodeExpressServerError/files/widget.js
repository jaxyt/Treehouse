let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = `<ul class="bulleted">`;
        for (let i = 0; i < employees.length; i++) {
            const employee = employees[i];
            let isIn = employee.inoffice;
            let firstName = employee.name;
            if (isIn) {
                statusHTML += `<li class="in">${firstName}</li>`;
            } else {
                statusHTML += `<li class="out">${firstName}</li>`;
            }
        }
        statusHTML += `</ul>`;
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', './employees.json');
xhr.send(); 

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        var rooms = JSON.parse(ajax.responseText);
        var statusHTML = `<ul class="bulleted">`;
        for (let i = 0; i < rooms.length; i++) {
            const roomObj = rooms[i];
            let isAvailable = roomObj.available;
            let roomNum = roomObj.room;
            if (isAvailable) {
                statusHTML += `<li class="empty">${roomNum}</li>`;
            } else {
                statusHTML += `<li class="full">${roomNum}</li>`;
            }
        }
        statusHTML += `</ul>`;
        document.getElementById('roomList').innerHTML = statusHTML;
    }
};
ajax.open('GET', './rooms.json');
ajax.send(); 