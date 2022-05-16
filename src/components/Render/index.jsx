import React from 'react'
import './style.css'

const Render = ({userId, id, title, completed, body}) => {
  return (
    <li key={id} className='dataList'>
      <p>UserID: {userId}</p>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      {completed!=undefined?<p>Completed: {completed?'Yes':'Not completed'}</p>:null}
      {body!=undefined?<p>Body: {body}</p>:null}
    </li>
  )
}

export default Render