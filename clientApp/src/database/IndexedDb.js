import {openDB} from 'idb';

export function DoesIndexDbSupport(){
    if ('indexedDB' in window) {
        console.log("this browser supports indexdb!");
        return true;
    }
}

export async function DBSetUp(){
    const dbPromise = await openDB('TasksDB',1,{
        upgrade(db){
            console.log('Creating a new object store...');

            if (!db.objectStoreNames.contains('Task')) {
                db.createObjectStore('Tasks', {keyPath: 'id', autoIncrement: true});
            }
        }
    });

    return dbPromise;
}

export async function GetAllTask(dbPromise){
    const tx = dbPromise.transaction('Tasks', 'readonly');
    const allTask = await tx.store.getAll();
    return allTask;

}


export async function GetTask(dbPromise,id){
    const value = await dbPromise.get('Tasks', id);
    return value;

}

//add and update task
export async function UpdateTask(dbPromise,Task){
    const tx = dbPromise.transaction('Tasks', 'readwrite');
    const taskData = {
        taskTitle : Task.taskTitle,
        taskDetails : Task.taskDetails,
        dueDate : Task.dueDate,
        category : Task.category,
        status : Task.status
    };

    if (Task.id != null || Task.id != undefined){
        taskData.id = Task.id;
    }
        await Promise.all([
        tx.store.put(taskData),
        tx.done
    ]);
    return true;

}


export async function DeleteTask(dbPromise,id){
    const tx = dbPromise.transaction('Tasks', 'readwrite');
    await Promise.all([
        tx.store.delete(id),
        tx.done
    ]);

    return true;
}


