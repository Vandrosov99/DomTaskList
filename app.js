const form = document.querySelector('form') // верхняя форма
const tasklist = document.querySelector('.collection') // ul куда будем вставлять li + a
const clearBtn = document.getElementsByClassName('clear-tasks')
// кнопка удаление таска
const filter = document.querySelector('#filter')
// ввод фильтра
const taskInput = document.querySelector('#task')
// Ввод инпута для названия таска

loadEventListeners();



function loadEventListeners() {
    //  наші події 

    form.addEventListener('submit', function (e) {

        if (taskInput.value === '') {
            alert("write some task");
        }
        //create element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item'
        //create text node and append

        li.appendChild(document.createTextNode(taskInput.value))
        console.log(taskInput.value)
        //create krestik link
        const link = document.createElement('a');
        //add classname
        link.className = 'delete-item secondary-content'
        //add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        li.appendChild(link)
        //append li to ul
        tasklist.appendChild(li)

        console.log(tasklist)
        taskInput.value = '';

        e.preventDefault();
    })







}