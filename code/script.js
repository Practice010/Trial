
class ToDoList{
    constructor(){
        this.tasks = [];
    }


addTask(task){
    this.tasks.push(task);
}

removeTask(task){
    const index = this.tasks.indexOf(task);
    if(index>-1){
        this.tasks.splice(index,1);
    }
}

displayTasks(){
    console.log("Current Tasks.");
    this.tasks.forEach((task, index) => {
        console.log(`${index+1}.${task}`);
    
    });
}

}

const todoList = new ToDoList();
todoList.addTask("Buy groceries");
todoList.addTask("Go Home");

todoList.displayTasks();