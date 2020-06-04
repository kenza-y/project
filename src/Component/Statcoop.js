import * as React from 'react';
import {ReactComponentProps} from "react-router-dom";
import {useState, useEffect} from "react";
import Nav_bar from '../Component/Nav_bar.js';
import {Card} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';




const Statcoop = ({match}) => {

  const [id, setid] = useState('');
  const [nom,setnom] = useState('');
  const [date,setdate] =useState('');
  const [secteur,setsecteur] =useState('');
  const [employee_femme,setnombrefemme] =useState('');
  const [employee_homme,setnombrehomme] =useState('');
  const [region,setregion] =useState('');
  const [chiffre,setchiffre] =useState('');

  const search = () =>{
    fetch(`https://odcoserver.herokuapp.com/cooperatives?nom_coop=${match.params.nom}`)
     .then(res => res.json())
     .then(res => {
     console.log(res);
     setnom(res[0].nom_coop);
     console.log(res[0].nom_coop);
     setdate(res[0].date_creation);
     setsecteur(res[0].secteur);
     setnombrefemme(res[0].employee_femmes);
     setnombrehomme(res[0].employee_hommes);
     setregion(res[0].region);
     setchiffre(res[0].chiffreaffaires);
   }
  )
  }

  useEffect(() => {search();}, []);

return (
<div>
<Nav_bar/>

<Container style ={{marginTop: 100}}>
<Row>
<Col >
        <div>
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title>Le chiffre d'affaires : </Card.Title>
         <Card.Subtitle className="mb-2 text-muted">En Dirham</Card.Subtitle>
         <Card.Text style={{fontSize: 30}}>
         {chiffre}
         </Card.Text>
        </Card.Body>
        </Card>
        </div>
</Col>
<Col >
        <div>
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title>La coopérative : </Card.Title>
         <Card.Text style={{fontSize: 30}}>
         {nom}
         </Card.Text>
        </Card.Body>
        </Card>
        </div>
</Col>
<Col>
      <div>
      <Card border="success" style={{ width: '18rem' }}>
      <Card.Body>
       <Card.Title>La date de création : </Card.Title>
       <Card.Text style={{fontSize: 30}}>
       {date}
       </Card.Text>
      </Card.Body>
      </Card>
      </div>
</Col>
</Row>
<Row style={{marginTop:30}}>
  <Col>
      <div>
      <Card border="success" style={{ width: '18rem' }}>
      <Card.Body>
       <Card.Title>Employées femmes : </Card.Title>
       <Card.Text style={{fontSize: 30}}>
       {employee_femme}
       </Card.Text>
      </Card.Body>
      </Card>
      </div>
 </Col>
 <Col>
     <div>
     <Card border="success" style={{ width: '18rem' }}>
     <Card.Body>
      <Card.Title>Employés hommes: </Card.Title>
      <Card.Text style={{fontSize: 30}}>
      {employee_homme}
      </Card.Text>
     </Card.Body>
     </Card>
     </div>
 </Col>
 <Col>
     <div>
     <Card border="success" style={{ width: '18rem' }}>
     <Card.Body>
      <Card.Title>Le secteur d'activité : </Card.Title>
      <Card.Text style={{fontSize: 30}}>
      {secteur}
      </Card.Text>
     </Card.Body>
     </Card>
     </div>
 </Col>
</Row>
</Container>
</div>

);
}

export default Statcoop;
