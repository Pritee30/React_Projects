import React from 'react'
// passing props
export default function Product(props) {

    // console.log(props.name)
    

  return (
    <div>
      <h2>hiii am react component form another component {props.name + props.email} </h2>
    </div>
  )
}
