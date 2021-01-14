import React, { useState, useRef, useEffect, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { X, Search } from 'react-bootstrap-icons'
import { debounce, DEBOUNCE_TIME, axios } from './constants'
import Result from './Components/Result'
import data from './constants/data.json'

// Bootstrap React Components
// https://react-bootstrap.netlify.app/components/forms

// Bootstrap React Icons
// https://icons.getbootstrap.com

export default function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const input = useRef(null)

  useEffect(() => {
  }, [])

  function clear() {
    input.current.value = ""
    input.current.focus()
    setResults([])
  }

  function handleSearch(e) {
    e.preventDefault()
    setLoading(true)
    startDebounce(e.target.value)
  }
  
  function performSearch(query) {
    setLoading(false)
    setResults(data)
  }

  // performance function to limit the call to only once the user stops typing
  const startDebounce = useCallback(
		debounce(value => performSearch(value), DEBOUNCE_TIME), // 1000ms
		[] // will be created only once initially
  )

  return (
    <>
      <h1 className="display-1 my-2"><Search className="mb-4 mr-4 sway" size={60} />Search</h1>
      <Form className="my-4 mx-auto w-100" onSubmit={(e) => e.preventDefault()}>
        <Tabs defaultActiveKey="search">
          <Tab eventKey="search" title="Search">
            <InputGroup className="my-5">
              <FormControl ref={input} autoFocus onChange={handleSearch} placeholder="Search Here" />
              <InputGroup.Prepend onClick={clear}>
                <InputGroup.Text>Clear <X className="mt-1 p-0" size={20} /></InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
            {loading 
              ? 
                <Row>
                  <Spinner animation="border" variant="info" className="mx-auto" />
                </Row>
              :
                results.map(result => (
                  <Result result={result} key={result._id}/>
                ))
            }
          </Tab>
          <Tab eventKey="settings" title="Settings">
            <Form.Group className="my-5">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option value="">--Please choose a role--</option>
                <option value="intern">Intern</option>
                <option value="cloud-eng">Cloud Engineer</option>
                <option value="cloud-app-admin">Cloud Application Administrator</option>
                <option value="business-analyst">Principal Business Analyst</option>
              </Form.Control>
            </Form.Group>
          </Tab>
        </Tabs>
      </Form>
    </>
  )
}
