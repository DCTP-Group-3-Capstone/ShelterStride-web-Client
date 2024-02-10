
import { useState } from 'react'
import './Ap.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import Homedata from './Homedata'

function Ap() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Homedata />
    </div>
  )
}

export default Ap