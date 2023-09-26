//1. Import Area 
import Link from 'next/link'
import React from 'react'

//2. Defination Area
 function Leftaside() {
  return (
    <aside className='col-lg-3 col-md-3 col-sm-3 mt-4'>
    <ul className="nav flex-column">
      <li className="nav-item bg-primary mb-2">
        <Link className="nav-link active text-light fs-5" aria-current="page" href="/flight">The Flight</Link>
      </li>
      <li className="nav-item bg-primary mb-2">
      <Link className="nav-link active text-light fs-5" aria-current="page" href="/city">The City</Link>
      </li>
      <li className="nav-item bg-primary mb-2">
      <Link className="nav-link active text-light fs-5" aria-current="page" href="/island">The Island</Link>
      </li>
      <li className="nav-item bg-primary mb-2">
      <Link className="nav-link active text-light fs-5" aria-current="page" href="/food">The Food</Link>
      </li>
    </ul>
  </aside>
  )
}
// 3. Export Area
export default Leftaside;
