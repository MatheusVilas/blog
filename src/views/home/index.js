import React, { Fragment } from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <p>Home</p>
      <Link to="post">Post</Link>
    </Fragment>
  )
}
