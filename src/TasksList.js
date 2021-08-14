import React, { useState } from 'react'
import EditData from './editdata'

const TasksList = (props) => {
    const { id, name, bio, removeItem, editme } = props
    const [toggle, setToggle] = useState(false)

    const handleToggle=()=>{
        const result=!toggle
        setToggle(result)
    }
    return (
        <div>
            {toggle ?
                <div>
                    <EditData
                    id={id}
                    name={name}
                    bio={bio}
                    handleToggle={handleToggle}
                        editme={editme}
                     />
                     <button onClick={handleToggle}>cancel</button>
                </div> :
                <div>
                    <h4>{bio}-{name}</h4>
                    <button onClick={handleToggle}>edit</button>
                    <button onClick={() => {
                        const result = window.confirm("Are you sure")
                        if (result) {
                            removeItem(id)
                        }
                    }}>remove</button>
                </div>
            }
        </div>

    )
}
export default TasksList