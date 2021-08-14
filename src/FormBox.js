import React from 'react'
import FormData from './FormData'

const FormBox=(props)=>{
    const {taskData}=props

const addData=(bioData)=>{
//console.log("formbox",bioData)
taskData(bioData)
}

    return (
        <div>
            <h2>Form Box</h2>
            <FormData addData={addData}/>
        </div>
    )

}
export default FormBox