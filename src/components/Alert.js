import React from 'react'

export default function Alert(props) {
  return (
   props.alert && 
   <div>
     <div className="alert alert-danger" role="alert">
        {props.alert}
     </div>
  </div>
  )
}
