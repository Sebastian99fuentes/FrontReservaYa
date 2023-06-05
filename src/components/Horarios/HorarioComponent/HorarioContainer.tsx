

import  { useState, useEffect  } from 'react';
import {  IonContent, IonCard, IonCardContent, IonItem, IonList, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import axios from 'axios';
import ConfirmacionButton from './ConfirmacionButton/ConfirmacionButton';




function HorarioContainer(){

  const rutaActual = window.location.pathname;
  const palabra = rutaActual.substring(9);
  const userId =localStorage.getItem('userId');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [data, setData] = useState([]);
  const [data2, setData2] = useState<string[]>([]);
  const [selectedHora, setSelectedHora] = useState<string>('');
  const horas: string[] = [
   
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
  ];
 
  interface MyObject {
    id: string;
    desc: string;
    dia: string;

  }

  const handleDayChange = (event: CustomEvent) => {
    setSelectedDay(event.detail.value);
    fetchData();
  };

  const handleHoraChange = (event: CustomEvent) => {
    setSelectedHora(event.detail.value);
  };
 

  async function fetchData() {
    if(selectedDay!=='') {
      const response = await axios.get(`http://localhost:80/api/Horarios/${palabra}Disponibles?dia=${selectedDay}`)
      setData(response.data); 
      console.log(response.data);
    } 
  }

  async function fetchdays() {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDay(); // Obtiene el día actual (0: Domingo, 1: Lunes, etc.)
     setData2( horas.slice(diaActual-1, horas.indexOf('Viernes') + 1));
  }

   useEffect(() => {

    
    fetchdays();
    fetchData();
  },[ selectedDay]);

     

      const formattedArray: string[] = data.map((obj: MyObject) => {
       const desc: string = obj.desc;
       const hour: string = desc.split(':')[0].replace(/^0+/, ''); // "7"
      return hour;
       });
       const concatenatedHours: string = formattedArray.join(',');
       const numerosArray = concatenatedHours.split(',');
       const numerosOrdenados: number[] = numerosArray.map(Number).sort((a, b) => a - b);
       const datos= { dia:selectedDay, horarita:selectedHora ,Tiporita:rutaActual.substring(9) , IdUsuario:userId };



  return (
    
      <IonContent  className={ `ion-text-center ion-justify-content-center  ion-align-items-center ion-flex container` } >
 <IonList className="ion-text-center ion-justify-content-center ion-align-items-center ion-flex container">

 <IonList>
      <IonItem>
        <IonLabel>Selecciona día:</IonLabel>
        <IonSelect
          value={selectedDay}
          placeholder="Selecciona el día"
          onIonChange={handleDayChange}
        >
          {data2.map((hora) => (
          <IonSelectOption key={hora} value={hora}>
            {hora}
          </IonSelectOption>
        ))}
        </IonSelect>
      </IonItem>
    </IonList>  
    </IonList>
    <IonList>
      <IonItem>
        <IonLabel>Selecciona la hora:</IonLabel>
        <IonSelect
          value={selectedHora}
          placeholder="Seleccione una hora"
          onIonChange={handleHoraChange}
        >
          {numerosOrdenados.map((numero) => (
            <IonSelectOption key={numero} >
             {numero}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>  

<IonCard>
  <IonCardContent>
    <h2>Fecha seleccionada</h2>
    <p>Día: {selectedDay}</p>
    <p>Hora: {selectedHora}</p>
  </IonCardContent>
</IonCard> 
<ConfirmacionButton  datos={datos}/>

     </IonContent>
  );
};

export default HorarioContainer;
