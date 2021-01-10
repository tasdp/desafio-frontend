import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import FullCalendar, { Interaction } from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/pt-br';

import moment from 'moment';
import 'moment/locale/pt-br';

import mocados from '../../services/mocados'

import './styles.scss'
import ModalCalendar from '../../components/ModalCalendar';
import Header from '../../components/Header';


export interface ISDateEvents {
  title: string;
  date: string;
}
export interface ISEvent {
  id: string,
  title: string,
  data: string,
  description: string,
  start: number,
  finish: number
}
const Dashboard: React.FC = () => {
  moment.locale('pt-br');
  const [eventsApi, setEventsApi] = useState([] as any)
  const [dateEvents, setDateEvents] = useState<ISDateEvents[]>([]);
  const [openModal, setOpenModal] = useState(true);
  const [isDatasModal, setIsDatasModal] = useState<ISEvent>({
    id: "string",
    title: "string",
    data: "string",
    description: "string",
    start: 0,
    finish: 0
  });
  const [inforEvents, setInforEvents] = useState([]);

  async function handleSearch() {
    // const { data }  = await api.get('/events');
    // const eventsData = data;
    console.log(2)
    setEventsApi(mocados);
    
   
  }

  function handleEventClick (arg: any )  {
    setOpenModal(true)
   
    eventsApi.forEach((event: any) => {
      if(event.title === arg.event.title) {
        setIsDatasModal({
          id: event.id,
          title: arg.event.title,
          data: event.date,
          description: event.description,
          start: event.start,
          finish: event.finish
     })  
      }
    });
    console.log(arg.event.title)
    
  };

  useEffect(() => {
    handleSearch(); 
    
    const newDateEvents =  eventsApi.map((event: any, i: number) => (
      {
       title: event.title,
       date: event.date,
      }
    ))
     setDateEvents(newDateEvents)
      console.log("pq essa merda n da certo")



  }, []);
  return (
    <section className="container">
      <Header/>
      <section className="container__main">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,listWeek'
        }}
        locale={esLocale}
        eventClick={
          function(arg){
            handleEventClick(arg)
          }}

        events={dateEvents}
        contentHeight={400}
        handleWindowResize={true}
        aspectRatio={0.5}
        showNonCurrentDates ={true}
    />
    <button onClick={() => console.log(dateEvents, eventsApi)}>TESTE</button>
 {openModal && <ModalCalendar isDataModal={isDatasModal} infor={inforEvents} modalActive={openModal} setModalActive={setOpenModal}/> 
 
}
      </section>
    </section>
  )


}

export default Dashboard;