import React from 'react'

function EmojiButton(props) {
    return (
        <button>
            <span role="img">{props.emoji}</span>
            {props.labelText}
        </button>
    )
}

export default EmojiButton