import React from 'react'
import EmojiButton from './EmojiButton'

function Headers(props) {
    console.log(props)
  return (
    <header>
        <h1>PetLand</h1>
        <nav>
          <EmojiButton emoji="👤" labelText = "Login" />
        </nav>
      </header>
  )
}

export default Headers