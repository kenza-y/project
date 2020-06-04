import React,{Component} from 'react';
import {ReactComponentProps} from "react-router-dom";
import Nav_bar from '../Component/Nav_bar.js';

class Mission extends Component {
render(){
return(
  <div>
  <Nav_bar/>
  <div class="centering">
      <h1 class="text-center"> Pourquoi un observatoire ?</h1>
      <p class="text-center" id="paragraphe" style={{fontSize : 18}}>
      L’observatoire digital constitue une référence pour l’ODCO pour le suivi de l’évolution des <br/>
      coopératives marocaines. Il contient des informations sur la distribution géographique, le capital, <br/>
       le nombre d’adhérents , le pourcentage d’employés femmes et hommes, la distribution des coopératives<br/>
        par secteur et par région .. <br/>
        <br/>
L’observatoire est destiné à tout organisme ou individuel désirant s’informer sur l’état des coopératives marocaines. <br/>
 Il s’agit non seulement d’un outil qui peut être utilisé pour attirer l'attention des décideurs politiques et des professionnels <br/>
  de l’industrie sur les coopératives mais qui offre également un point de départ utile pour les chercheurs et universitaires.

      </p>
  </div>
  </div>
);

}
}

export default Mission;
