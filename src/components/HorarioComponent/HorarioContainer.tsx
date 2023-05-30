
import { format, parseISO } from 'date-fns';
import  { useState, useEffect  } from 'react';
import {  IonContent, IonDatetime, IonCard, IonCardContent } from '@ionic/react';
import axios from 'axios';
import ConfirmacionButton from '../ConfirmacionButton/ConfirmacionButton';


function HorarioContainer(){

  const rutaActual = window.location.pathname;
  const palabra = rutaActual.substring(9);
  

  const [data, setData] = useState([]); 
  
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>('');
  const [fechaSeleccionadatrans, setFechaSeleccionadatranss] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [Horas, setHoras] = useState<string>('');
  const [Dia, setDia] = useState<string>('');
  const [Hora, setHora] = useState<string>('');

  interface MyObject {
    id: string;
    desc: string;
    dia: string;
  }

   useEffect(() => {
    // Obtenemos la fecha actual
    const today = new Date();
    // Actualizamos los valores del año y mes en el estado
    setCurrentDate(today);
    setHoras("2");
    
  }, []);

  const handleChange = (event: CustomEvent) => {
    setFechaSeleccionada(event.detail.value ?? ''); 
    const formattedString = format(parseISO(event.detail.value ?? ''), 'MMM d,HH:mm');
    const formattehora = format(parseISO(event.detail.value ?? ''), 'HH');
    setHora(formattehora);
    setFechaSeleccionadatranss(formattedString);
    const dateValue = event.detail.value;
    const date = parseISO(dateValue ?? '');
    const dayOfWeek = date.toLocaleDateString('es-ES', { weekday: 'long' }).replace(/^\w/, (c) => c.toUpperCase());
    console.log(dayOfWeek);
     setDia(dayOfWeek);
    async function fetchData() {
      const response = await axios.get(`http://localhost:5002/api/Horarios/${palabra}Disponibles?dia=${dayOfWeek}`)
      setData(response.data);
     
    }
    fetchData();

  }; 
      const obtenerFechasSemana = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay(); 
        const today = new Date();
        const today1 = new Date();
        const diasHastaViernes = (5 + 7 - today1.getDay()) % 7;
        const fechaViernes = new Date(today1.getFullYear(), today1.getMonth(), today1.getDate() + diasHastaViernes);
        return utcDay !== 0 && utcDay !== 6 && date  >= today && date <= fechaViernes;
       
      }

      const formattedArray: string[] = data.map((obj: MyObject) => {
       const desc: string = obj.desc;
       const hour: string = desc.split(':')[0].replace(/^0+/, ''); // "7"
      return hour;
       });
       const concatenatedHours: string = formattedArray.join(',');
       
      
       const datos= { dia: Dia, hora: Hora,Tipo:palabra , IdUsuario: ' ' };
     
     
  return (

      <IonContent  className={ `ion-text-center ion-justify-content-center  ion-align-items-center ion-flex container` } >
      <IonDatetime
        isDateEnabled={obtenerFechasSemana} 
        hourValues={concatenatedHours}
        minuteValues="00"
        size='cover'
        yearValues={`${currentDate.getFullYear()}`} 
        monthValues={`${currentDate.getMonth() + 1}`}
       value={fechaSeleccionada} 
       onIonChange={handleChange} 
      >
      </IonDatetime>

<IonCard>
  <IonCardContent>
    <h2>Fecha seleccionada</h2>
    <p>Es: {fechaSeleccionadatrans}</p>
  </IonCardContent>
</IonCard>
        <ConfirmacionButton  datos={datos}/>
     
     </IonContent>
  );
};

export default HorarioContainer;
