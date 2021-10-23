// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
let count = 0;
const todoContainer = document.querySelector('.todocontainer');

const alertPtag = document.querySelector('.msg');

//input button 
todoBtn.addEventListener('click', function (event) {
   event.preventDefault();
   // console.dir(event);

   //caching user input
   const userInput = todoInput.value;

   if (userInput) {
      // creating todo div
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo';

      // creating the li element
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerText = userInput;
      todoDiv.appendChild(li);

      // creating the edit button 
      const editButton = document.createElement('button');
      editButton.className = 'edit';
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      todoDiv.appendChild(editButton);

      // creating the check button
      const checkButton = document.createElement('button');
      checkButton.className = 'check';
      checkButton.innerHTML = '<i class="fas fa-check">';
      todoDiv.appendChild(checkButton);

      // creating the trash button 
      const trashButton = document.createElement('button');
      trashButton.className = 'trash';
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      todoDiv.appendChild(trashButton);


      todoList.appendChild(todoDiv);
      checkTodoList();
      todoInput.value = '';
   }
   else {
      alert('Please put some task');
   }
});

//edit, check & trash button action
todoList.addEventListener('click', function (event) {
   const clickEvent = event.target;
   const todoDiv = clickEvent.parentNode;

   if (clickEvent.className == 'check') {
      // todoDiv.classList.add('completed');
      todoDiv.className = todoDiv.className + ' completed';

      // clickEvent.remove();
      todoDiv.removeChild(clickEvent);
      console.log(todoDiv);
   } else if (clickEvent.className == 'trash') {
      todoDiv.className += ' drop-effect';
      todoDiv.addEventListener('transitionend', function () {
         todoDiv.remove();
         checkTodoList();

      });
   } else if(clickEvent.className == 'edit') {
      const firstChild = todoDiv.children[0];

      const input =  document.createElement('input');
      input.type = 'text';
      input.className = 'todo-input-box';
      input.value = firstChild.innerText;
      
      todoDiv.insertBefore(input, firstChild);
      firstChild.remove();

      clickEvent.innerHTML = '<i class="fas fa-save"></i>';
      clickEvent.className = 'save';
   } else if(clickEvent.className == 'save') {
      const firstChild = todoDiv.children[0];
      
      const li = document.createElement('li');
      li.className = 'edit-box';
      li.innerText = firstChild.value;
      // console.dir(li);

      todoDiv.insertBefore(li, firstChild);
      firstChild.remove();
      // returen to edit icon
      clickEvent.innerHTML = '<i class="fas fa-edit"></i>';
      clickEvent.className = 'edit';

   }
});

const msgPTag = document.createElement('p');
function checkTodoList() {
   // message element
   // checking list length
   if (todoList.children.length == 0) {
      // alertPtag.style.display = 'inline-block';
      // todoList.style.display = 'none';
      // checking list length
      msgPTag.innerText = 'Hurray you have completed your task';
      msgPTag.className = 'msg';

      todoContainer.append(msgPTag);
   } else {
      // alertPtag.style.display = 'none';
      // todoList.style.display = 'block';
      alertPtag.remove();
   }
}
checkTodoList();

// *******************************************
// two bug; msg alert show, msg not remove 
/*
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
let count = 0;

// message element
const msgDiv = document.querySelector('.div-center');
const alertPtag = document.querySelector('.msg');
//input button
todoBtn.addEventListener('click', function (event) {
   event.preventDefault();
   // console.dir(event);

   //caching user input
   const userInput = todoInput.value;

   if (userInput) {
      // creating todo div
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo';

      // creating the li element
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerText = userInput;
      todoDiv.appendChild(li);

      // creating the check button
      const checkButton = document.createElement('button');
      checkButton.className = 'check';
      checkButton.innerHTML = '<i class="fas fa-check">';
      todoDiv.appendChild(checkButton);

      // creating the trash button
      const trashButton = document.createElement('button');
      trashButton.className = 'trash';
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      todoDiv.appendChild(trashButton);

      todoList.appendChild(todoDiv);
      if (todoList.children.length > 0) {
         alertPtag.remove();
      }
   } else {
      alert('Please put some task');
   }
   todoInput.value = '';
});

//check & trash button action
todoList.addEventListener('click', function (event) {
   const clickEvent = event.target;
   const todoDiv = clickEvent.parentNode;

   if (clickEvent.className == 'check') {
      // todoDiv.classList.add('completed');
      todoDiv.className = todoDiv.className + ' completed';

      // clickEvent.remove();
      todoDiv.removeChild(clickEvent);
      console.log(todoDiv);
   } else if (clickEvent.className == 'trash') {
      todoDiv.className += ' drop-effect';
      todoDiv.addEventListener('transitionend', function () {
         todoDiv.remove();
         checkTodoList();

      });
   }
});

function checkTodoList() {
   const msgPTag = document.createElement('p');
   // checking list length
   if (todoList.children.length == 0) {
      count = count + 1;
      console.log(count);
      msgPTag.innerText = 'Hurray you have completed your task';
      msgPTag.className = 'msg';

      msgDiv.appendChild(msgPTag);
   } else {
      alertPtag.remove();
      console.log('remove p');
   }
}
*/