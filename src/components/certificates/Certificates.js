import React from "react";
import certificadoHenry from "../../assets/certificadoHenry.png";
import './certificate.css'
import utn from '../../assets/UTN3.png'

export default function Certificate() {
  return (
    <div className="container">
    <h1 className="h1">Certificates</h1>
      <img className="img" src={certificadoHenry} alt="nop" />
      <img className="img" src={utn} alt="nop" />
    </div>
  );
}
