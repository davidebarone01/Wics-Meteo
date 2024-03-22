var counter = 0;

var upBtn = document.getElementById('up');
var downBtn = document.getElementById('down');

// upBtn.addEventListener('mousewheel', function(e) {
//     if(e.deltaY < 0) {
//         up();
//     } else {
//         down()
//     }
// });

upBtn.addEventListener('click', up);
downBtn.addEventListener('click', down);


function up() {
    counter++;
    console.log('up', counter);
    render();
}

function down() {
    counter--;
    console.log('down', counter);
    render();
}

function render() {
    var h1 = document.getElementById('counter');
    h1.innerHTML = counter;
}

// var somma = 0;

// for(var i = 0; i <= 100000; i++) {
//     somma += i;
// }

// var h1 = document.querySelectorAll('#pippo');

// h1[0].innerText = somma;


var listValues=[
    {label: 'fare la spesa', done: true },
    {label: 'pisciare il cane', done: false },
    {label: 'fare aperitivo', done: false },
];

var lista = document.getElementById('lista');

function drawList(){
    lista.innerHTML=" ";
    var index=0;
    for(var item of listValues){
        var li = document.createElement('li');
        var text = document.createElement('span');
        var delBtn = document.createElement('button');
        text.innerText = item.label;
        if(item.done===true){
            text.classList.add("done");
        }
        delBtn.innerText = 'X';
        delBtn.addEventListener('click', deleteItem);
        text.addEventListener('click', pippo);
        li.appendChild(text);
        li.appendChild(delBtn);
        lista.appendChild(li);
        
    }    

}
drawList();






var addBtn = document.getElementById('add');
addBtn.addEventListener("click", addMario);

function addMario() {
    var input = document.getElementById('newvalue');
    var newObjects = {
        label: input.value,
        done: false
    };
    listValues.push(newObjects);
    drawList();
    console.log(listValues);
};

function pippo(e) {
    var li = e.target.parentElement;
    for(var i=0; i<lista.children.length; i++){
        if (lista.children[i]===li){
           listValues[i].done =! listValues[i].done;
        }
    }
    drawList();

}


function deleteItem(e) {
    var li = e.target.parentElement;
    for(var i=0; i<lista.children.length; i++){
        if (lista.children[i]===li){
            listValues.splice(i, 1);
            console.log(listValues);
        }
    }
    drawList();
}




