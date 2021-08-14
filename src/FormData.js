import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FormData = (props) => {
    const { addData, id: sno, name: author, bio: bioInput, handleToggle } = props
    const [name, setName] = useState(author ? author : '')
    const [bio, setBio] = useState(bioInput ? bioInput : '')
    const [id, setId] = useState(sno ? sno : uuidv4())
    // console.log(data)

    const handleTextChange = (e) => {
        setName(e.target.value)
    }

    const handleBioChange = (e) => {
        setBio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const bioData = {
            id: id,
            name: name,
            bio: bio
        }
        addData(bioData)
        //  console.log(bioData)
        if (handleToggle) {
            handleToggle()
        }

        //reset
        setName('')
        setBio('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" value={name} onChange={handleTextChange} /><br />

                <label>Add Bio</label><br />
                <textarea value={bio} onChange={handleBioChange}></textarea><br />

                <input type="submit" value="save" />
            </form>
        </div>
    )

}
export default FormData