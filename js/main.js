
let addButton = document.getElementById('add'), 
taskButton = document.getElementsByClassName('main__name')[0],
templateElement = " <div class=\"task\"><p class=\"task__name\"></p><div class=\"task__control\"><label class=\"labelDelTask\"><input type=\"checkbox\" class=\"delTask\"></label></div></div>",
tasksList = [], list = document.getElementsByClassName('main__tasks')[0],taskName = document.getElementsByClassName('task__name'),
removeTask = document.getElementsByClassName('delTask'), elementTasks;


// Add task when you are upload page
window.onload=function(){
    let elementsArray = localStorage.getItem("test");
    if(elementsArray!=null && elementsArray!=""){
        
        elementsArray=elementsArray.split(",");
        
        elementsArray.forEach(function(item,i,elementsArray){
            list.insertAdjacentHTML('beforeend',templateElement);
            taskName[i].innerHTML=item;
            tasksList.push(item);
        });
      //  console.log(elementsArray);

    }
}

// Add task

addButton.addEventListener('click',function(){
    if(taskButton.value!=''){
        
        tasksList.push(taskButton.value);

        list.insertAdjacentHTML('beforeend',templateElement);
        tasksList.forEach(function(item,i,tasksList){
            taskName[i].innerHTML=item;
        });
       
       
            taskButton.value='';
        
        localStorage.setItem('test',tasksList);   
    }
});

// Remove task
    list.addEventListener("click",function(e){
        arrElem = Array.from(removeTask);
        arrElem.forEach(function(item,i,arrElem){
            labelTasks = document.getElementsByClassName("labelDelTask");
            elementTasks=document.getElementsByClassName('task');
            if(e.target==item) {

            labelTasks[i].style.animationName="onTask";
            elementTasks[i].style.opacity="0";
            elementTasks[i].style.transform = "translateX(100px)"
            setTimeout(removeItem,700,elementTasks,i);
            tasksList.splice(i,1);
            localStorage.setItem('test',tasksList);
            
            }
        });
    })

    function removeItem(elementTasks,i){
        elementTasks[i].remove();
    }