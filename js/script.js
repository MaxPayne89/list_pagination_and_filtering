/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//global variables
const studentList = document.querySelectorAll(".student-item");
const numOfItemsToDisplay = 10;

const showPage = (list, page) => {
   let pageList = [];
   let firstIndex = (page * 10) - 10;
   let lastIndex = (page * 10);
   if (lastIndex >= list.length){
      lastIndex = list.length;
   }
   for(let i = 0; i < list.length; i++){
      //hide all elements
      list[i].style.display = 'none';
      //if the index is within the range of the page, display those elements
      if(i >= firstIndex && i < lastIndex){
         list[i].style.display = '';
      }
   }
}

const appendPageLinks = (list) => {
   //calculates the number of pages needed
   const numOfPages = Math.ceil(studentList.length / numOfItemsToDisplay);
   //selects the existing main div
   const pageDiv = document.querySelector(".page");
   let div = document.createElement('div');
   div.classList.add("pagination");
   pageDiv.appendChild(div);

   //ul for pagination links
   const ul = document.createElement("ul");
   div.appendChild(ul);
   for(let i = 1; i <= numOfPages; i++){
      let aTag = document.createElement("a");
      let li = document.createElement("li");
      aTag.innerHTML = i;
      li.appendChild(aTag);
      ul.appendChild(li);
   }
   //add event listener for the buttons
   const paginationLinks = document.querySelectorAll("div.pagination a");
   for(let i = 0; i < paginationLinks.length; i++){
      paginationLinks[i].addEventListener('click', (e) => {
         for(let i = 0; i < paginationLinks.length; i++){
            paginationLinks[i].classList.remove("active");
         }
         let target = e.target;
         const page = target.innerHTML;
         target.classList.add("active");
         showPage(studentList, page)
      })
   }
}
//initial call to set the webpage to page one
showPage(studentList, 1);
//sets the page numbers. Every other call will be handled by the event listeners.
appendPageLinks(studentList);