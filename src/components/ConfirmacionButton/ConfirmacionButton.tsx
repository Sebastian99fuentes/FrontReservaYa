import React from 'react';
import { IonAlert, IonButton, useIonToast  } from '@ionic/react';
import Reserva from '../../Data/reservascontext';

function ConfirmacionButton(props: any) {

    const [present] = useIonToast();

    const data: Reserva = {
      Dia:  props.datos.dia,
      Hora:  props.datos.hora,
      Tipo: props.datos.Tipo,
      IdUsuario: props.datos.IdUsuario
    };
    
    console.log('Response:', data);
    const presentToast = () => {

      fetch('http://localhost:5002/api/Reservas/reservarInstalacion', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Response:', data);
  if(data.status!==200){
      present({
    message: ' Error al realizar la Reserva ',
    duration: 1000,
    position: 'middle'
  });
  }
  else{
    present({
      message: 'Reserva Realizada',
      duration: 1000,
      position: 'middle'
    });
  }

})
   
    };

  return (
    <>
      <IonButton id="present-alert"  onClick={() => presentToast()} >Reservar</IonButton>

    </>
  );
}
export default ConfirmacionButton;