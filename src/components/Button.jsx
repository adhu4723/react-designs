
import React from 'react'

function Button({label,onClick = () => {}}) {
  return (
    <button onClick={onClick} className='border px-4 py-2 rounded-xl hover:bg-black hover:text-white'>
   {label}
    </button>
  )
}

export default Button
