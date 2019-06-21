var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'data/employees.json', true);
xhr.send();

console.log('../data/employees.json');

// $(document).ready(function () {
//   $.getJSON('../data/employees.json', function (data) {
//     var statusHTML = '<ul class="bulleted">';
//     $.each(data,function (index, employee) {
//       if (employee.inoffice === true) {
//         statusHTML +='<li class="in">';
//       } else {
//         statusHTML +='<li class="out">';
//       }
//       statusHTML += employee.name + '</li>';
//     });
//     statusHTML += '</ul>';
//     $('#employeeList').html(statusHTML)
//   }); // end getJSON
// }); // end ready