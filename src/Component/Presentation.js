import React,{Component} from 'react';
import {ReactComponentProps} from "react-router-dom";
import Nav_bar from '../Component/Nav_bar.js';

class Presentation extends Component {
render(){
return(
  <div>
  <Nav_bar/>
  <div class="centering">
      <h1 class="text-center"> Qui est l'ODCO ?</h1>
      <p class="text-center" id="paragraphe" style={{fontSize : 18}}>
      L’Office de développement de la coopération (ODCO) est l’agence publique
      chargée de faire appliquer la politique gouvernementale <br/> en matière de
      développement des coopératives et de leurs unions : enregistrement, accompagnement, formation, gestion et contrôle. <br/>
      <br/>
      L’ODCO est administré par un conseil administratif composé de représentants des départements ministériels, <br/>
      d’établissements publics, de banques et de coopératives et présidé par <br/>
      Madame Nadia Fettah Alaoui ministre du Tourisme,
      de l’Artisanat, du Transport Aérien et de l’Economie Sociale.

      </p>
  </div>
  </div>
);

}
}

export default Presentation;
