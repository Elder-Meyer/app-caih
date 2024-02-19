import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavAdmin } from './NavAdmin'

export const PanelControl = () => {
  return (
    <div>
        <NavAdmin/>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}
