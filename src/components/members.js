import { Button, Container, Navbar, Nav, Image, Row, Col, InputGroup, Form, Table, Badge, Dropdown, Accordion } from 'react-bootstrap';

const Members = () => {

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" data-bs-theme="light" sticky="top" className='px-3 bg-primary '>
        <Navbar.Brand href="#home">
          <Image
            alt=""
            src="	https://coducers3.s3.amazonaws.com/dev/%20fe12d640-ea86-420e-90fc-992a5df5d9b0.jpg"
            width="40"
            height="40"
            className="d-inline-block "
            roundedCircle
          />{' '}
          Coducer Technologies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mx-auto  text-white ">
            <Nav.Link className='text-white' href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Members</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Questions</Nav.Link>
            <Nav.Link href="#pricing">Surveys</Nav.Link>
          </Nav>
          <Nav className=''>
            <Nav.Item>
              <Nav.Link href="#pricing">English</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Image
                alt=""
                src="https://coducers3.s3.amazonaws.com/dev/8ba90027-3755-46ac-8c16-fb87d6da3efc.jpeg"
                width="40"
                height="40"
                className="d-inline-block   align-top"
                roundedCircle
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className='py-5' style={{ backgroundColor: "#ebf3f7" }}>
        <Container className=''  >
          <div className='d-flex'>
            <h3 className='me-auto'>Members</h3>

            <div className='ms-auto d-flex'  >
              <div className=' d-none d-lg-block'>
                <InputGroup className="mb-3 ">
                  <Form.Control placeholder="Search" />
                </InputGroup>
              </div>
              <Form.Select style={{ height: "40px" }} className='mx-4'>
                <option value="-createdAt">Date - Recent</option>
                <option value="createdAt">Date - Ascending</option>
                <option value="name">Name (A-Z)</option>
                <option value="-name">Name (Z-A)</option>
              </Form.Select>

              <div className='d-none d-lg-block'>
                {/* <Button variant="btn-outline-secondary" className=' btn-outline-secondary' >FilterBy
                </Button> */}
                <Dropdown>
      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
      FilterBy
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className='text-black'>Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='text-black'>Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='text-black'>Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
              </div>
             
            </div>
          </div>

          <div className=' my-2 shadow bg-white d-none d-md-block '>
            <Table responsive className=''>
              <thead >
                <tr >
                  <th className='py-4'>Name</th>
                  <th>Email Addess</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Elakiya</td>
                  <td>elakiya@coducer.com</td>
                  <td>Manager</td>
                  <td>14/06/2023</td>
                  <td><Badge bg="warning">Pending</Badge></td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>tejesh</td>
                  <td>elakiya@coducer.com</td>
                  <td>Manager</td>
                  <td>13/06/2023</td>
                  <td><Badge bg="success">Active</Badge></td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>Tamillselvans</td>
                  <td>elakiya@coducer.com</td>
                  <td>Manager</td>
                  <td>17/06/2023</td>
                  <td><Badge bg="success">Active</Badge></td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>Elakiya</td>
                  <td>elakiya@coducer.com</td>
                  <td>Manager</td>
                  <td>14/06/2023</td>
                  <td><Badge bg="warning">Pending</Badge></td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>Elakiya</td>
                  <td>elakiya@coducer.com</td>
                  <td>Manager</td>
                  <td>14/06/2023</td>
                  <td><Badge bg="warning">Pending</Badge></td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="btn-outline-secondary" id="dropdown-basic">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>7</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>4</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>5</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>6</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>7</td>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                
              </tbody>
            </Table>
          </div>

<div className='my-2'>


          <Accordion  className='d-sm-block d-md-none'>
      <Accordion.Item eventKey="0">
        <Accordion.Header >
          <div className=''>
          <h5>Elakiya</h5>
          <p className='small'>elakiya@coducer.com</p>
          </div>
      
        </Accordion.Header>
        <Accordion.Body>
         <div className='d-flex'>
          <div className='me-auto'>
            <h6>9987654321</h6>
            <h6>Manager</h6>

          </div>
          <div>
          <Badge bg="warning">Pending</Badge>
          <h6>Text3</h6>
            <h6>Text4</h6>
          </div>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >
          <div className=''>
          <h5>Tejesh</h5>
          <p className='small'>tejas@coducer.com</p>
          </div>
      
        </Accordion.Header>
        <Accordion.Body>
         <div className='d-flex'>
          <div className='me-auto'>
            <h6>9876543210</h6>
            <h6>Manager</h6>

          </div>
          <div>
          <Badge bg="success">Active</Badge>
          <h6>Text3</h6>
            <h6>Text4</h6>
          </div>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header >
          <div className=''>
          <h5>Tamillselvans</h5>
          <p className='small'>Tamillselvans@coducer.com</p>
          </div>
      
        </Accordion.Header>
        <Accordion.Body>
         <div className='d-flex'>
          <div className='me-auto'>
            <h6>9876543210</h6>
            <h6>Manager</h6>

          </div>
          <div>
          <Badge bg="success">Active</Badge>
          <h6>Text3</h6>
            <h6>Text4</h6>
          </div>
         </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>
        
        </Container>
      </div>

    </div>
  )
}


export default Members;