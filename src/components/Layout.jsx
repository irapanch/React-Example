import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export  const Layout = () => {
  return (
    <LayoutWrapper>
        <Navbar/>
        <WrapperOutlet>
            <Outlet/>
        </WrapperOutlet>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
`
const WrapperOutlet =  styled.div`
    padding: 20px;
    padding-left: 290px;
`