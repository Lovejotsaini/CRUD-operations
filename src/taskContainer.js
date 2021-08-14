import React, { useState } from 'react'
import FormBox from './FormBox'
import TaskBox from './TaskBox'


const TaskContainer = (props) => {
    const [data, setData] = useState([])
   // console.log(data)


    const taskData = (bioData) => {
        const result = [bioData, ...data]
        setData(result)
    }
    const removeItem = (id) => {
        const result = data.filter((d) => {
            return d.id !== id
        })
        setData(result)
    }

    const editme = (quote) => {
        const result = data.map((q) => {
            if (q.id === quote.id) {
                return { ...q, ...quote }
            } else {
                return { ...q }
            }
        })
        setData(result)
    }

    return (
        <div>
            <h2>TASK CONTAINER</h2>
            <FormBox taskData={taskData} />
            <TaskBox data={data} removeItem={removeItem} editme={editme} />
        </div>
    )
}
export default TaskContainer