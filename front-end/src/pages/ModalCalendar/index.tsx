import React, {useState, useEffect} from 'react';


import './styles.scss'

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

  return (
    <section className="containerModal">
      <button onClick={() => setModalActive(false)} className="buttonClose">x</button>
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
          <p>{isDataModal.description} </p>
        </div>
        <div className="mainModal__section--low">
          <p>Início:</p><p>{isDataModal.start} </p>
         <p className="">Fim:</p> <p className="">{isDataModal.finish}</p>
        </div>

      </section>
      
    </section>
  )


}

export default ModalCalendar