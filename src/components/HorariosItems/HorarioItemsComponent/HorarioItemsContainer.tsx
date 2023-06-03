import { format, parseISO } from 'date-fns';
import  { useState, useEffect  } from 'react';
import {  IonContent, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption, IonItem, IonList } from '@ionic/react';
import axios from 'axios';
import ConfirmacionButton from '../../Horarios/HorarioComponent/ConfirmacionButton/ConfirmacionButton';
import ConfirmacionItemsButton from './ConfirmacionItemsButton/ConfItemsButton';



function HorarioItemsContainer(){

  const rutaActual = window.location.pathname;
  const palabra = rutaActual.substring(9);
  const userId = localStorage.getItem('userId');

  var iditem :string="";
  var cantidad :number=0;
  const [data, setData] = useState([]); 
  const [selectedDay, setSelectedDay] = useState<string>('');
  const miArray: { id: string, desc: string, cant: number }[] =data;

  async function fetchData() {
    const response = await axios.get(`http://localhost:5002/api/Implementos`)
    setData(response.data); 
    console.log(palabra); 
  }
  
   useEffect(() => {
    
    fetchData();
   
  },[]);

   function buscarItem() {
 console.log(data);
    if (miArray[0]?.cant) {
      if(palabra==='Futbol'){
        console.log(miArray[0].cant);
        cantidad=miArray[0].cant;
        iditem=miArray[0].id;
      }
      if(palabra==='Basket'){
        console.log(miArray[1].cant);
        cantidad=miArray[1].cant;
        iditem=miArray[1].id;
      }
      if(palabra==='PinPon'){
        console.log(miArray[3].cant);
        cantidad=miArray[3].cant;
        iditem=miArray[3].id;
      }
      if(palabra==='Volley'){
        console.log(miArray[2].cant);
        cantidad=miArray[2].cant;
        iditem=miArray[2].id;
      }
      if(palabra==='Chalecos'){
        console.log(miArray[4].cant);
        cantidad=miArray[4].cant;
        iditem=miArray[4].id;
      }
      
    } else {
      console.log("No se encontró el objeto");
    }
  
  }
  
  buscarItem();

      const datos= { IdItem: iditem,Dia:selectedDay,IdUsuario: userId };
     
      const handleDayChange = (event: CustomEvent) => {
        setSelectedDay(event.detail.value);
      };


  return (

      <IonContent  className={ `ion-text-center ion-justify-content-center  ion-align-items-center ion-flex container` } >
   
   {cantidad === 0 ? (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>Por el momento no tenemos{palabra} Disponibles</IonCardSubtitle>
    </IonCardHeader>
  </IonCard>
) : (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>{palabra}:</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
    <IonCardTitle>Se encuentra disponible  </IonCardTitle>
    <IonCardSubtitle></IonCardSubtitle>
    <IonList>
      <IonItem>
        <IonSelect aria-label="Fruit" interface="action-sheet" placeholder="Selecciona el dia"  value={selectedDay} onIonChange={handleDayChange}>
        <IonSelectOption value="Lunes">Lunes</IonSelectOption>
      <IonSelectOption value="Martes">Martes</IonSelectOption>
      <IonSelectOption value="Miércoles">Miércoles</IonSelectOption>
      <IonSelectOption value="Jueves">Jueves</IonSelectOption>
      <IonSelectOption value="Viernes">Viernes</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>

    </IonCardContent>
  </IonCard>
)}

        <ConfirmacionItemsButton  datos={datos}/>
     
     </IonContent>
  );
};

export default HorarioItemsContainer;
