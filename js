let input = document.querySelector('.input');
const form = document.getElementById('form');
const todosUL = document.getElementById('todo');
const btn = document.querySelector('.btn');
    
btn.addEventListener('click', (e) =>{
e.preventDefault();
 addToDo()
})
function addToDo(todo){

    let todoText = input.value
    if(todoText){
      const todoEL = document.createElement('li');
      todoEL.innerText = todoText
      
        todoEL.addEventListener('click', ()=>{
        todoEL.classList.add(`completed`)
        todoEL.innerText = (`${todoEL.innerText} marked complete`)
        
        todoEL.value = '';
      })
      todoEL.addEventListener('auxclick', (e)=>{
       e.preventDefault();
       alert(`This task will be removed from the list`)
       todoEL.remove()
      })
      todosUL.appendChild(todoEL)
      input.value = ''
  }
}
