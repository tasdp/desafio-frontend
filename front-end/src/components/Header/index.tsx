import React from 'react';

import Agenda from '../../assets/agenda.svg'

import './styles.scss'



const Header: React.FC = () => {

  return (
    <header className="containerHeader">
      <section className="containerHeader__main">
        <img src={Agenda} alt="Agenda em svg"/>
        <h1>Agenda de Eventos</h1>
      </section>
       
    </header>
  )


}

export default Header