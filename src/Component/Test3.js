import React,{useState,useEffect} from "react";

const Test3 = () => {

const [resultat,setresultat]=useState(5);

  const chart = () => {
    let resultat;
        fetch("https://frozen-savannah-57040.herokuapp.com/secteurs/Totalsec")

        .then( res => {
        console.log(res);
    })
}

useEffect(() => {chart();});

return(
  <div>
  <div>
  <div></div>
  </div>
  </div>
);


};



export default Test3;
