import React from 'react'
import Directory from '../../components/Directory/Directory.component'
import '../../components/Directory/Directory.style.scss'
import {Outlet} from 'react-router-dom'

function Home() {
  return (
      <div>
          <Directory />
          <Outlet />
    </div>
  )
}

export default Home