import React from 'react'
import EmojiButton from './EmojiButton'
import Card from './Card'

function HomePage() {
  return (
    <main>
        <Card text = "Welcome to PetLand!">
        <em>Find your dream pet</em>
        </Card>
        <Card text = "What pets would you like to see?">
        <div>
            <EmojiButton emoji="😸" labelText="Cats" />
            <EmojiButton emoji="🐕" labelText="Dogs" />
          </div>
        </Card>
      </main>
  )
}

export default HomePage