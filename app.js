const form = document.querySelector('form') // верхняя форма
const tasklist = document.querySelector('.collection') // ul куда будем вставлять li + a
const clearBtn = document.querySelector('.clear-tasks')
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

        taskInput.value = '';

        e.preventDefault();
    });

    tasklist.addEventListener('click', function (e) {


        if (e.target.parentElement.classList.contains('delete-item')) {

            e.target.parentElement.parentElement.remove();

        }

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