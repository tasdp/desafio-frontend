import React, {useState, useEffect} from 'react';

import Close from '../../assets/close.svg'

import './styles.scss'

import moment from 'moment';

interface ModalCalendarProps {
  setModalActive(bool: any): void;
  isDataModal: {
    id: string,
    title: string,
    data: string,
    description: string,
    start: number,
    finish: number
  };
  modalActive: boolean;
  infor: Array<{}>;
 
}
const ModalCalendar: React.FC<ModalCalendarProps> = ({
  modalActive, setModalActive, infor, isDataModal
}) => {

  function getTimeFromMins(mins: number) {
    var h = mins / 60 | 0,
    m = mins % 60 | 0;
    return moment.utc().hours(h).minutes(m).format("hh:mm A");
    }

  return (
    <section className="containerModal">
      <button onClick={() => setModalActive(false)} className="buttonClose">
        <img src={Close} alt="" className=""/>
      </button>
      <section className="mainModal">
        <div className="mainModal__section--top">
          <h1>
          {isDataModal.title}
          </h1>
        
        </div>
        <div className="mainModal__section--main">
          <div className="main--left">
            <h2>Data:</h2>
          <h2>  
          {isDataModal.data}
          </h2>
          <h3>ID:</h3>
          <h3 className="">
          
          {isDataModal.id}
          </h3>
          </div>
          
          <p>Descrição:  {isDataModal.description} </p>
        </div>
        <div className="mainModal__section--low">
          <div>
            <p>Início do evento:</p><p>{ getTimeFromMins(isDataModal.start)}  </p>
          </div>
          <div>
            <p>Fim do evento:</p> <p className="">{getTimeFromMins(isDataModal.finish)} </p>
          </div>
         
        </div>

      </section>
      
    </section>
  )


}

export default ModalCalendar