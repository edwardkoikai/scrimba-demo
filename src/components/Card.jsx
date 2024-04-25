import React from 'react'

function Card(props) {
    return (
        <div className="card">
          <h2>{props.text}</h2>
          {props.children}
        </div>

    )
}

export default Card