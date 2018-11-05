// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

import './menu.css';

const Header = () => (
  <Row>  
    <Navbar id="menufixed"className="grey darken-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li>< a href="/#SobreMim">Sobre Mim</a></li>
      <li><a href="/#Detalhe">Detalhe</a></li>
      <li><a href="/#experiencia">Experiencia</a></li>
      <li><NavLink to="contact">Contato</NavLink></li>
      
    </Navbar>
  </Row>
);

export default Header;