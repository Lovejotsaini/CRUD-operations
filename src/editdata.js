import React from 'react'
import FormData from './FormData'

const EditData = (props) => {
    const { id, name, bio, editme,handleToggle } = props

    const addData = (bioData) => {
        editme(bioData)
    }
    return (
        <div>
            <FormData
                id={id}
                name={name}
                bio={bio}
                handleToggle={handleToggle}
                addData={addData}
            />
        </div>
    )
}
export default EditData