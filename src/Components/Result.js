import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom'

export default function Result({ result }) {
  const history = useHistory();
  // console.log('DEBUG', result)

  function handleClick() {
    // TODO: this current implementation does not save the search result state
    history.push(`/detail/${result._id}`)
  }

  return (
    <Card className="result my-3 shadow rounded" onClick={handleClick}>
      <Card.Body>
        <Card.Title>{result._source.title}</Card.Title>
        <Card.Text>
          {result._source.body.substring(0, 500) + '...'}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-muted">es-ID: {result._id} | source-ID: {result._source.id} | score: {result._score}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}
