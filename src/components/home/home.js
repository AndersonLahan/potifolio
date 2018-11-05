// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'

import teste from '../../images/company2.png';
import linguagemC from '../../images/c.png'

import css3 from '../../images/CSS3.png';
import html from '../../images/HTML.png';
import java from '../../images/java.png';

import './home.css';



const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle" id="SobreMim">Sobre Mim</h5>
        <Card>
          <div >
            <p>Estudante de análise e Desenvolvimento de Sistemas na UTFPR campus Cornélio Procópio-PR desde 2014.</p>
          </div>
        </Card>

        <h5 className="subtitle" id="Detalhe">Detalhes</h5>
        <Card>
          <div>
            <p><b>INTERESSES</b></p>
            <p>*Desenvolvimento Web</p>
            <p>*Mobile</p>
            <p>*Jogos</p>
            <br/>
            <p><b>IDIOMA</b></p>
            <p>*Português - Nativo</p>
            <p>*Espanhol - Básico</p>
            <br/>
            <p><b>FORMAÇÃO</b></p>
            <p>*2014-atual/UTFPR – Análise e Desenvolvimento de Sistemas.</p>
            <p>*2009 - Ensino Médio.</p>
           
          </div>
        </Card>



        <h5 className="subtitle" id="experiencia">Experiencias </h5>
   

        {/* Experiencias*/}
       <Experience title="linguagemC"
                    avatar={linguagemC}                    
        /> 
        <Experience title="HTML5"
                    avatar={html}                    
        />
         <Experience title="CSS3"
                    avatar={css3}                    
        />
         <Experience title="JAVA"
                    avatar={java}                    
        />
    </Col>
  </Row>
);

export default Home;