import React from 'react';
import './style.css';

class EventoPopup extends React.Component {
  render() {
    console.log(this.props.event)
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.event.title}</h1>
          <p>Id do Evento: {this.props.event.id}</p>
          <p>Descrição: {this.props.event.description}</p>
          <br />
          <p>Data: {this.props.event.date}</p>
          <p>Início: {this.props.event.start}</p>
          <p>Fim: {this.props.event.end}</p>
        <button onClick={this.props.closePopup}>Fechar</button>
        </div>
      </div>
    );
  }
}


export default EventoPopup;