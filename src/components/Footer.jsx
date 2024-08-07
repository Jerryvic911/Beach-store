import React from 'react'

function Footer() {
  return (
    <div className='  text-center'>
      <div className='mt-10 pb-10 grid grid-cols-3'>
      <div className='ml-20 '>
            <ul className='flex gap-5 font-jerry'>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </div>
        
        <h1 className='text-2xl font-semibold'>Beach Store</h1>

        <p>Copyright @ 2024 Beach Store</p>
      </div>
        

    </div>
  )
}

export default Footer