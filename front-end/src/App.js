import './App.css';
import {useEffect,useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventoPopup from './components/eventoPopup.js'
import api from './services/api';

function App() {
  const [eventosProcessados, setEventosProcessados] = useState([]);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  function formatarData(data) {
    let dataFormatada = ''
    if (data.getDate() < 10) {
      dataFormatada = '0' + data.getDate() + '/'
    } else {
      dataFormatada = data.getDate() + '/'
    }

    if (data.getMonth()+1 < 10) {
      dataFormatada += '0' + (data.getMonth()+1) + '/'
    } else {
      dataFormatada += (data.getMonth()+1) + '/'
    }

    return dataFormatada += data.getFullYear()
  }

  function formatarHora(data) {
    let horaFormatada = ''
    if (data.getHours() < 10) {
      horaFormatada = '0' + data.getHours() + ':'
    } else {
      horaFormatada = data.getHours() + ':'
    }

    if (data.getMinutes() < 10) {
      horaFormatada += '0' + data.getMinutes()
    } else {
      horaFormatada += data.getMinutes()
    }

    return horaFormatada
  }
  useEffect(() => {
    api.get('events').then(response => {
      const eventosCarregados = response.data.map((element)=>({
          id: element.id,
          title: element.title,
          start: Date.parse(element.date) + element.start * 60 * 1000,
          end: Date.parse(element.date) + element.finish * 60 * 1000
        })
      )

      setEventosProcessados(eventosCarregados)
    })
  },[])

  function showEvent(event) {
    setEventoSelecionado(event)
  }

  function hideEvent() {
    setEventoSelecionado(null)
  }

  return (
    <div className="App">
      <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView='timeGridWeek'
        events={eventosProcessados}
        contentHeight='400px'
        locale='pt-br'
        slotLabelFormat={[{
          hour:'2-digit',
          minute:'2-digit',
          hour12:false
        }]}
        slotDuration='00:15'
        eventClick={function(info) {
          const evento = {
            id: info.event.id,
            title: info.event.title,
            date: formatarData(info.event.start),
            start: formatarHora(info.event.start),
            end: formatarHora(info.event.end)
          }
          showEvent(evento)
        }}
      />
      {
        (eventoSelecionado != null) ? <EventoPopup
        event={eventoSelecionado}
        closePopup={hideEvent}
        /> : null
      }
    </div>
  )
}

export default App;
