import { useState } from "react"

function ToDoCard({todoText}) {
    const [edit,setEditStatus] = useState(false)
    return (<>
        <div className="todoCard">
            <p></p>
            <div className="todoCard-btn-holder">
                {
                    edit && <>
                        <button className="todoCard-btn" style="background-color:red" onClick={()=>{
                            setEditStatus(false)
                        }}>Delete</button>
                        <button className="todoCard-btn" style="background-color:aqua" onClick={()=>{
                            setEditStatus(true)
                        }}>Edit</button>
                    </>
                }
                {
                    !edit && <>
                    <button className="todoCard-btn" style="background-color:grey" onClick={()=>{
                            setEditStatus(true)
                        }}>Cancel</button>
                        <button className="todoCard-btn" style="background-color:green" onClick={()=>{
                            setEditStatus(true)
                        }}>Save</button>
                    </>
                }

            </div>

        </div>
    </>)
}

export default ToDoCard