import React,{Component} from 'react';
import {ReactComponentProps} from "react-router-dom";
import Nav_bar from '../Component/Nav_bar.js';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Formulaire extends Component {

  state={
      nom: "",
      date:"",
      region:"",
      emply_femmes:"",
      emply_hommes: "",
      chiffre_affaires:""
  }


handleChange= (event,fieldName) => {
  this.setState({[fieldName] : event.target.value});

}

handleSubmit= () => {
console.log(this.state.nom);
 alert("Votre coopérative a été ajoutée");
 fetch('https://odcoserver.herokuapp.com/cooperatives', {
      method: 'POST',
      body: {
            "nom_coop": this.state.nom,
            "date_creation": this.state.date,
            "secteur": this.state.region,
            "employee_femmes": this.state.region,
            "employee_hommes": this.state.emply_femmes,
            "région": this.state.region,
            "chiffreaffaires": this.state.chiffre_affaires
      },
    });
  }


render(){
return(
<div>
<Nav_bar/>
<div>
<h1 style={{marginTop:50,marginLeft:50}}>
Ajouter une coopérative
</h1>
</div>
<div>
<Form  onSubmit={this.handleSubmit} style={{marginLeft: 150,marginRight:150,marginTop:30,marginBottom:100}} >
 <Form.Row>
  <Form.Group onChange={event => this.handleChange(event,"nom")}>
    <Form.Label>Nom de la coopérative</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState" onChange={event => this.handleChange(event,"categorie")}>
      <Form.Label>Catégorie</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Agriculture</option>
        <option>Artisanat</option>
        <option>Habitat</option>
        <option>Argane</option>
        <option>Forêt</option>
        <option>Pêche</option>
        <option>Denrée alimentaire</option>
        <option>Alphabétisation</option>
        <option>Transport</option>
        <option>Autre</option>

      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" onChange={event => this.handleChange(event,"region")}>
        <Form.Label>Région</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Casablanca-Settat</option>
          <option>Marrakech-Safi</option>
          <option>Béni Mellal-Khénifra</option>
          <option>l'Oriental</option>
          <option>Rabat - Salé - Kenitra</option>
          <option>Drâa-Tafilalet</option>
          <option>Tanger-Tetouan - Al Hoceima</option>
          <option>Souss - Massa</option>
          <option>Fes - Meknes</option>
          <option>Laayoune - Sakia El Hamra</option>

        </Form.Control>
      </Form.Group>

    <Form.Group onChange={event => this.handleChange(event,"date")}>
      <Form.Label>Date</Form.Label>
      <Form.Control  />
    </Form.Group>

  </Form.Row>

  <Form.Group onChange={event => this.handleChange(event,"emply_femmes")} >
    <Form.Label>nombre d'employées femmes:</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Group onChange={event => this.handleChange(event,"emply_hommes")} >
    <Form.Label>nombre d'employées hommes:</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Group onChange={event => this.handleChange(event,"chiffre_affaires")} >
    <Form.Label>Chiffre d'affaires</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Button type="submit" variant="success">
    <div style={{paddingLeft: 20,paddingRight: 20}}>Envoyer</div>
  </Button>
</Form>

</div>
</div>
);
}
}

export default Formulaire;
