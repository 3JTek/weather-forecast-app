import React from 'react'

//Style
import './Container.scss'

const Container = ({ children }: IContainer) => <div id="container">{children}</div>

interface IContainer {
  children: React.ReactNode
}

export default Container
