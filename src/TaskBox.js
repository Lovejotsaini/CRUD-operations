import React from 'react'
import TasksList from './TasksList'

const TaskBox = (props) => {
    const { data, removeItem, editme} = props

    return (
        <div>
            <h2>Taskbox - {data.length}</h2>
            {data.map((ele)=>{
                return (
                    <TasksList
                    key={ele.id}
                    {...ele}
                    removeItem={removeItem}
                        editme={editme}/>
                )
            })}

        </div>
    )
}

export default TaskBox