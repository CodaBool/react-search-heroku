import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function Detail() {
  const history = useHistory()
  const id = history.location.pathname.substring(8) // removes '/detail/'
  
  return (
    <>
      <h1 className="display-4">Detail {id}</h1>
      <Row>
        <Button className="mx-auto w-100" onClick={() => history.push('/')}>Go Back</Button>
      </Row>
    </>
  )
}
