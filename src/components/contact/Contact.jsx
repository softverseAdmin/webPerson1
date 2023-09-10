import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Container, Row, Form, Button } from 'react-bootstrap';

export default function Contact() {
  const [valueCountry, setCountryValue] = useState('')
  const [valueLang, setLangValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeCountryHandler = valueCountry => {
    setCountryValue(valueCountry)
  }
  const changeLangHandler = valueLang => {
    setLangValue(valueLang)
  }
  const LanguageOption = [
    { value: '0', label: 'EN-US' },
    { value: '1', label: 'JP-JPN' },
    { value: '2', label: 'KR-KRN' }
  ]
  return (<>
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh', margin: 'auto' }}>
      <Row className='w-75 h-50 overflow-scroll z-index-2'>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your company name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your contact number" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <Form.Group controlId="countrySelect">
              <Form.Label>Country Select</Form.Label>
              <Select className='text-dark ' options={options} value={valueCountry} id="countrySelect" onChange={changeCountryHandler} />
            </Form.Group>
            <Form.Group controlId="languageSelect">
              <Form.Label>Language Select</Form.Label>
              <Select className='text-dark ' options={LanguageOption} value={valueLang} id="languageSelect" onChange={changeLangHandler} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </Row>
    </Container>
  </>)
}
