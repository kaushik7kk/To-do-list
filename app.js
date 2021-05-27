const ul = document.querySelector('.list-group');
const todoForm = document.querySelector('#todoForm');

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    const todo = todoForm.elements.todo.value;
    addLi(todo);
    todoForm.elements.todo.value = '';
});

ul.addEventListener('click', function(e){
    (e.target.className === "check" || e.target.className === "fas fa-check") && e.target.offsetParent.classList.toggle('done');
    (e.target.className === "remove" || e.target.className === "fas fa-minus") && e.target.offsetParent.remove()
});


const addLi = function(todo){
    const newEl = {
        newLi : document.createElement('li'),
        newSpan : document.createElement('span'),
        newCheck : document.createElement('button'),
        newRemove : document.createElement('button'),
        remIcon : document.createElement('i'),
        checkIcon : document.createElement('i')
    }
    addCss(newEl);
    createLi(newEl,todo);
    ul.append(newEl.newLi);
}


const createLi = function({newLi, newSpan, newCheck, newRemove, remIcon, checkIcon},todo){
    newCheck.append(checkIcon);
    newRemove.append(remIcon);
    newSpan.append(newCheck);
    newSpan.append(newRemove);
    newLi.append(todo);
    newLi.append(newSpan);
}

const addCss = function({newLi, newSpan, newCheck, newRemove, remIcon, checkIcon}){
    newLi.classList.add('list-group-item');
    newCheck.classList.add('btn','check');
    newRemove.classList.add('btn','remove');
    remIcon.classList.add('fas','fa-minus');
    checkIcon.classList.add('fas','fa-check');
    newCheck.dataset.toggle = "tooltip";
    newCheck.title = "Mark as Done";
    newRemove.dataset.toggle = "tooltip";
    newRemove.title = "Remove Todo";
}
