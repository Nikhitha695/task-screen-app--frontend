import React,{useState} from 'react'
import './TaskData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

function TaskData(props) {

    return (
    <div className='taskdata'>
        <table>
            <tbody className='body'>
                <tr className='row'>{props.text}{""}
                    <FontAwesomeIcon icon={faTrash} className='icon2' onClick={props.deleteTask}/>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default TaskData;