import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// export interface ISEvents {
//   config: {
//   };
//   data: Array<{}>;
//   headers: {};
//   request: XMLHttpRequest;
// }
export interface ISDateEvents {
  title: string;
  date: string;
}
const Dashboard: React.FC = () => {
  const [eventsApi, setEventsApi] = useState([] as any)
  const [dateEvents, setDateEvents] = useState<ISDateEvents[]>([]);
  async function handleSearch() {
    const response = await api.get('/events');
    setEventsApi(response)
    for (var position in eventsApi.data) {
      console.log(position);
      console.log(eventsApi.data[position].date);
      console.log(eventsApi.data[position].title);
      setDateEvents((oldDateEvents) => [
          ...oldDateEvents,
          { 
            title: eventsApi.data[position].title,
            date: eventsApi.data[position].date,
           
          }
        ])
       }
  }
  useEffect(() => {
    handleSearch();  

  }, []);
  return (
    <section className="container">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locale="pt-br"
       events={dateEvents}
    />
    <button onClick={()=> console.log(dateEvents) }className="teste">TESTE</button>
    </section>
  )


}

export default Dashboard