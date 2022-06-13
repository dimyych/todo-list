let sel = selector => document.querySelector(selector);

sel(".list__btn").addEventListener('click', function () {
    if (sel('.list__iput').value) {
        sel('.list__inner').innerHTML += `<p class="task">${sel('.list__iput').value}</p>`;
    } else {
        sel('.warning-addTask').classList.toggle('warning-active');
    }
});

function delet() {
    let i = 0;
    for (const iterator of document.getElementsByClassName('task')) {
        i++;
    }
    if(i > 1){
        if (event.target.className == 'task') {
            event.target.remove();
        }
    }
    else{
        sel('.warning-tasks').classList.toggle('warning-active');
    }
};

sel(".warning-addTask__close").addEventListener('click', function () {
    sel('.warning-addTask').classList.toggle('warning-active');
});

sel(".warning-tasks__close").addEventListener('click', function () {
    sel('.warning-tasks').classList.toggle('warning-active');
});