// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

import './profile.css';

const UserProfile = () => (
  <div id="profile">
  <Card>
      <Row>
        
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" id="profile" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Anderson Lahan</h5>
        
      </Row>
  </Card>
  </div>
);

export default UserProfile;