import React from "react";

type taskType = {
    id: number
    title: string
    isDone: boolean
}


type todolistType = {
    title: string
    tasks: Array<taskType>
}

export const Todolist = (props: todolistType) => {
    return <div>
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t=><li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    </div>

}