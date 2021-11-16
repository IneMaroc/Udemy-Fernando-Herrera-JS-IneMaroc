import { Todo } from "../classes";
import { todoList } from "../index";

//Referencias HTML

const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

   const htmlTodo = `
   <li class="${(todo.completado) ? 'completed': ''}" data-id="${todo.id}">
      <div class="view">
         <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': ''}>
         <label>${ todo.tarea }</label>
         <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
   </li>`;

   const div = document.createElement ('div');

   div.innerHTML = htmlTodo;

   divTodoList.append( div.firstElementChild );

   return div.firstElementChild;
};

// EVENTOS 

txtInput.addEventListener('keyup', (e) => {

   if ( e.keyCode === 13 && txtInput.value.length > 0 ) {
      
      const nuevoTodo = new Todo(txtInput.value);
      todoList.nuevoTodo(nuevoTodo);
      console.log(todoList);

      crearTodoHtml(nuevoTodo);

      txtInput.value = '';
   };
})

divTodoList.addEventListener('click', (e) => {
   const nombreElemento = e.target.localName;
   const todoElemento = e.target.parentElement.parentElement;
   const todoId = todoElemento.getAttribute('data-id');

   if (nombreElemento.includes('input')) {
      todoList.marcarCompletado(todoId);
      todoElemento.classList.toggle('completed');
   }

   console.log(todoList);
});