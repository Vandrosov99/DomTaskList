const form = document.querySelector('form') // верхняя форма
const tasklist = document.querySelector('.collection') // ul куда будем вставлять li + a
const clearBtn = document.querySelector('.clear-tasks')
// кнопка удаление таска
const filter = document.querySelector('#filter')
// ввод фильтра
const taskInput = document.querySelector('#task')
// Ввод инпута для названия таска

loadEventListeners();

function removeTaskFromLocalStorage(taskItem) {
    console.log('asdasd')
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent = task) {
            tasks.splice(index, 1) // видалить 1 елемент по индксу шо зустрине
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function storeInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

function getTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (task) {
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item'
        //create text node and append

        li.appendChild(document.createTextNode(task))
        // console.log(taskInput.value)
        //create krestik link
        const link = document.createElement('a');
        //add classname
        link.className = 'delete-item secondary-content'
        //add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        li.appendChild(link)
        //append li to ul
        tasklist.appendChild(li)

    })
}

function loadEventListeners() {
    //  наші події 
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', function (e) {

        if (taskInput.value === '') {
            alert("write some task");
            // break;
        }
        //create element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item'
        //create text node and append

        li.appendChild(document.createTextNode(taskInput.value))
        // console.log(taskInput.value)
        //create krestik link
        const link = document.createElement('a');
        //add classname
        link.className = 'delete-item secondary-content'
        //add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        li.appendChild(link)
        //append li to ul
        tasklist.appendChild(li)

        e.preventDefault();

        // сохраняем в локальное хранилище 
        storeInLocalStorage(taskInput.value);

        taskInput.value = '';


        e.preventDefault();
    });

    tasklist.addEventListener('click', function (e) {


        if (e.target.parentElement.classList.contains('delete-item')) {

            e.target.parentElement.parentElement.remove();
        }
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    });
    // удаление ттпа очередь первого добавил первого и удалил
    // clearBtn.addEventListener('click', function () {
    //     console.log(tasklist.children.length)
    //     for (let i = 0; i <= tasklist.children.length; i++) {
    //         console.log(tasklist.children[i])
    //         tasklist.children[i].remove();
    //         break;
    //     }
    // })

    // удаление типа стек первого добавил последним удалил
    // clearBtn.addEventListener('click', function () {
    //     console.log(tasklist.children.length)
    //     for (let i = tasklist.children.length - 1; i >= 0; i--) {
    //         console.log(tasklist.children[i])
    //         tasklist.children[i].remove();
    //         break;
    //     }
    // })
    // удаление всех
    clearBtn.addEventListener('click', function () {
        while (tasklist.firstChild) {
            tasklist.firstChild.remove()
        }
    })

    filter.addEventListener('keyup', function (e) {

        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(function (task) {

            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';

            } else {
                task.style.display = 'none';
            }
        })
    })
}