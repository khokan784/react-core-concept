// export default function Todo({task,isDone}){
//     return (
//         <li>task : {task}</li>
//     )
// }

// conditional rendering option 1

// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>Finished {task}</li>
//     }
//     else{
//         return <li>Work one :{task}</li>
//     }
// }

// conditional rendering option 2


// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished {task}</li>
//     }
//     return <li>Work one :{task}</li>
// }

// conditional rendering option 3


// export default function Todo({task,isDone}){
//         return (
//             <li> {isDone? 'Finished':'work one' } {task}</li>
//         )
//     }

// conditional rendering option 4


// export default function Todo({task,isDone}){
//         return (
//             <li>{task} {isDone && ': Done'}</li>
//         )
//     }


// conditional rendering option 5


// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


// conditional rendering option 2


export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished {task}</li>
    }
    else{
        listItem = <li>Work one :{task}</li>
    }
    return listItem
}