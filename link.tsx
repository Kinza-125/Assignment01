import React from 'react'
import Link from 'next/link'

const link = () => {
  return (
    <div  className='home'>
        <nav>
            <ul style={{display:"flex,gap:1rem"}}>
<li>
    <Link href="/"><b>Home</b></Link>
</li>
<li>
    <Link href="/about"><b>Aboutt</b></Link>
</li>
<li>
    <Link href="/contact"><b>Contact</b></Link>
</li>
<li>
    <Link href="/service/web-dev"><b>Service</b></Link>
</li>
            </ul>
        </nav>
      
    </div>
  )
}

export default link
