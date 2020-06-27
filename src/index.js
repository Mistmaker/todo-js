
// import { saludar } from './js/componentes.js';
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

console.log( todoList.todos );

// todoList.todos.forEach( todo => crearTodoHtml(todo) ); //FORMA LARGA
todoList.todos.forEach( crearTodoHtml ); //SI ES SOLO UN ARGUMENTO TAMBIÉN ES VÁLIDO

// const newTodo = new Todo('Tramitar matrícula');
// todoList.nuevoTodo(newTodo);

todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos', todoList.todos );

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);
// console.log( todoList );

// tarea.completado = true;

// crearTodoHtml ( tarea );

// localStorage.setItem('myKey','123456');
// sessionStorage.setItem('myKey','123456');

// setTimeout(()=>{
//     localStorage.removeItem('myKey');
// },1500)