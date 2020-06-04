import React,{Component,useState, useEffect} from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import odcologo from "../odcologo.png";
import {NavLink} from "react-router-dom";
import {Map1} from "../Map/Map1";
import Statcoop from "./Statcoop.js";
import {ReactComponentProps} from "react-router-dom";



const Nav_bar :React.FC<Props> = ({history}) => {
  const [input, setInput] = useState('');

  var icon = (
      <span class="logo">
        <a href="/">
          <img src={odcologo} height="70" width="290" alt="ODCO" /></a>
      </span>
    );

  return (
    <div>
    <Navbar>
    <Navbar.Brand>
              {icon}
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      <NavDropdown title="ODCO" id="basic-nav-dropdown">
        <NavDropdown.Item>
              <NavLink to="/presentation" style={{color : '#2d3436', textDecoration: 'none'}}>Présentation</NavLink>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <NavLink to="/mission" style={{color : '#2d3436', textDecoration: 'none'}}>Missions</NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    <Nav.Link><NavLink to="/Stat" style={{color : '#7f8c8d', textDecoration: 'none'}}>Statistiques</NavLink></Nav.Link>
      <Nav.Link><NavLink to="/Map" style={{color : '#7f8c8d', textDecoration: 'none'}}>Cartographie</NavLink></Nav.Link>
    </Nav>
    <Form inline>
    <Button variant="success">
      <NavLink to="/formulaire" style={{color : '#FFF', textDecoration: 'none'}}>Ajouter une coopérative</NavLink>
    </Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
);

}


export default Nav_bar;
