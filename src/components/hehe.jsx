import { signOut } from 'firebase/auth'
import React from 'react'

export default function hehe() {
  return (
    <div>
      <button onClick={signOut(firebaseAuth)}>

      </button>
    </div>
  )
}
