import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from 'react-router-dom';
// import { FaOpencart } from "react-icons/fa6";





function Header() {
  return (
  
    <div>
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="bg-slate-900" fixed='top'>
          <Container fluid >
            <Navbar.Toggle className="border-none bg-slate-500 text-white"
            aria-controls="offcanvasNavbar"
                placement="start"
            />
            <Navbar.Brand href="#" placement="" className="text-white">
              CEO of Next
            </Navbar.Brand>
            <div className="hidden sm:block">
              <Link to='/Register'>
              <button  className="nav-btn1 border-0 rounded-3xl bg-lime-300 m-2 w-20 h-8">
                Sign up
              </button>
              </Link>
              <button className="nav-btn2 border-0 rounded-3xl bg-lime-300 m-2 w-20 h-8">
              {/* <FaOpencart /> */}
              cart
                            </button>
            </div>
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className="navbar-dar">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CEO of Next
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <hr />
                  <Nav.Link href="#action1">Page 2</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Page 3</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Page 4</Nav.Link>
                  <hr />
                  <Nav.Link href="#action2">Page 5</Nav.Link>
                  <hr />
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Shopping
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">
                      Complaint section
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Instructions for seller{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                  <Button variant="outline-success">Search</Button>
                </Form>
                <br />
                <select>
                  <option>Pakistan</option>
                  <option>China</option>
                  <option>Afghanistan</option>
                  <option>India</option>
                  <option>Iran</option>
                  <option>Bangladesh</option>
                </select>
                {/* hidden 3xl:block invisible sm:block */}
                <div className="">
                <Link to='/Register'>
                  <button className="nav-btn1 border-0 rounded-3xl bg-lime-300 m-2 w-20 h-8">
                    Sign up
                  </button>
                  </Link>
                  <button className="nav-btn2 border-0 rounded-3xl bg-lime-300 m-2 w-20 h-8">
                    Shop
                  </button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
</div>
  );
}

export default Header;