/******************************************
Treehouse Techdegree:
FSJS Project 2 - List Filter and Pagination
By Elizabeth Hinson
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***Created two global variables to store in the DOM, which will call a list of 10 students and student information on a page.***/
const studentInfo = document.querySelectorAll('.student-item');
const numberOfItems = 10;

//console.log(numberOfItems);
//console.log(studentInfo);

function getNumberOfPages() {
   return Math.ceil(studentInfo.length/numberOfItems);
}

/***Created a showPage function to hide all of the items on a page except 10 at a time. For page one just show items 0-9, 
   for page two just show 10-19, and so forth, while hiding the rest ***/
function showPage(studentInfo, page) {
   let startIndex = (page * numberOfItems) - numberOfItems;
   let endIndex = page * numberOfItems;

   for (let i = 0; i < studentInfo.length; i ++) {
      if (i >= startIndex && i < endIndex) {
         studentInfo[i].style.display = 'block'; //showing
      } else {
         studentInfo[i].style.display = 'none'; //hiding
      }
   }
}

//showPage(studentInfo, textContent);
     
/***Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.***/

function appendPageLinks(studentInfo) {
   let page = document.querySelector('.page');
   let div = document.createElement('div');
   let ul = document.createElement('ul');
   div.setAttribute('class', 'pagination');
   page.appendChild(div);
   div.appendChild(ul);

   for(let i = 1; i <= getNumberOfPages(); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', '#');
      ul.appendChild(li);
      li.appendChild(a);
      a.textContent = i;
      if (i == 1){
         a.className = "active"
      } 
      a.addEventListener('click', (e) => {
         let a = document.querySelectorAll('.pagination li a');
         for(let k=0; k <a.length; k++) {
            a[k].className = '';
         }
         e.target.className = 'active';
         showPage(studentInfo, event.target.textContent);
      });
   }
};  

showPage(studentInfo, 1);
appendPageLinks(studentInfo);


