var itemslist = document.getElementById("tasks")

function additems(){
    var task = document.getElementById("todo-item")
    if (task.value.length > 0){
        var items = document.createElement("li")
    
    var itemstext = document.createTextNode(task.value)
    
    items.appendChild(itemstext)
    itemslist.appendChild(items)
    console.log(itemslist)
    task.value = ""

    
    var spanforbtn = document.createElement("span")
    spanforbtn.setAttribute("class","spbtn")
    // creating edit btn
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("class","edi")
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.appendChild(edittext)
    spanforbtn.appendChild(editbtn)


    // creating delete btn 

    var dltbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    dltbtn.setAttribute("class","del")
    dltbtn.setAttribute("onclick","delitem(this)")
    dltbtn.appendChild(deltext)
    spanforbtn.appendChild(dltbtn)


    items.appendChild(spanforbtn)

    }
    else{
        alert("please enter a task")
    }
    

}

function delitem(e){
    e.parentNode.parentNode.remove()

}

function deleteAll(){
    itemslist.innerHTML = ""
}

function edititem(e){
    // console.log(e.parentNode.parentNode.firstChild)
    var editValue = prompt("edit task : ",e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue = editValue
    
}