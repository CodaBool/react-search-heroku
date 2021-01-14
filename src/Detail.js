import React from 'react'
import { useHistory } from 'react-router-dom'
import { ArrowLeft, FileEarmarkText } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import allData from './constants/data.json'
import useScreen from './constants/useScreen'

export default function Detail({ result }) {
  const history = useHistory()
  const id = history.location.pathname.substring(8) // removes '/detail/'
  const data = getDataById(id)
  let screen = useScreen()
  if (!screen) screen = 'medium'

  function getDataById(id) {
    let match = null
    allData.forEach(item => {
      if (item._id === id) {
        match = item
      }
    })
    return match
  }

  console.log(data)
  
  return (
    <>
      <Button className="mt-4" variant="outline-secondary" onClick={() => history.push('/')}>
        <ArrowLeft className="mb-1 mr-3" size={22} />
        <p className="d-inline">Back</p>
      </Button>
      {data && 
        <>
          <Row className="mt-3">
            <Col>
              <h2 className="display-4 d-inline">{data._source.title}</h2>
              {screen.includes('small')
                ? <FileEarmarkText className="mb-4 ml-3" size={30} />
                : <FileEarmarkText className="mb-4 ml-3" size={60} />
              }
              
            </Col>
          </Row>
          <Row>
            <Col className="p-5">
              <p className="text-muted">Confluence</p>
              <p>&emsp;{data._source.body}</p>
            </Col>
          </Row>
          <Row>
            <Col className="p-5">
              <h3 className="text-muted text-center">&emsp;Extra Details and Links Here</h3>
            </Col>
          </Row>
        </>
      }
    </>
  )
}
