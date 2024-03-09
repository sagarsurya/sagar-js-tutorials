let todo = [];

let req = prompt('Please enter your request');

while(true){
    if(req == 'quit'){
        console.log('Quiting App');
        break;
    }

    if(req == 'list'){
        console.log('-------------');
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('-------------');
    } else if(req == 'add'){
        let task =prompt('Please enter the task do you wanted to add');
        todo.push(task);
        console.log(`${task} Task Added`);
    } else if(req == 'delete'){
        let idx =prompt('Please enter the task index');
        todo.splice(idx,1);
        console.log(`${idx} task has been deleted`);
    } else {
        console.log('Wrong request!');
    }

    req = prompt('Please enter your request');

}