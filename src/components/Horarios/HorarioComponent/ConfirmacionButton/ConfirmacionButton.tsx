import React from 'react';
import { IonAlert, IonButton, useIonToast  } from '@ionic/react';
import Reserva from '../../../../Data/reservascontext';
import axios from 'axios';

const reloadPage = () => {
  window.location.reload();
};

function ConfirmacionButton(props: any) {


  const implementosCountString = localStorage.getItem('numInstalaciones');
    const implementosCount = implementosCountString ? JSON.parse(implementosCountString) : null;
  

    const [present] = useIonToast();
    
    const data: Reserva = {
      dia:  props.datos.dia,
      hora: props.datos.horarita,
      usuarioID: props.datos.IdUsuario,
      tipo: props.datos.Tiporita
    };
    
    console.log('Response:', data);

async function revision() {

  if(data.hora===undefined||data.dia===undefined){
    data.dia='';
    data.hora='';
  }
  if(data.dia.trim()==='' ||data.hora.trim()===''  ){
    present({
      message: 'Selecciona Día y hora',
      duration: 1000,
      position: 'middle',
      color: "warning"
    
    });
  }
  if(implementosCount["Areas deportivas"]>=3){
    present({
      message: ' maximo puedes realizar 3 reservas para espacios deportivos a la semana',
      duration: 1500,
      position: 'middle',
      color: "warning"
    
    });
   }
}


    const presentToast = () => {

      revision();
       if(implementosCount["Areas deportivas"]<3){
       
        if(data.dia.trim()!=='' ||data.hora.trim()!==''){
  
          axios.post(`http://172.16.0.135:80 /api/Reservas/reservarInstalacion?dia=${data.dia}&hora=${data.hora}&usuarioID=${data.usuarioID}&tipo=${data.tipo}`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
         
          .then(response => {
            console.log('Response:', response.status);
            if (response.status === 200) {
              implementosCount["Areas deportivas"]++;
              localStorage.setItem('numInstalaciones', JSON.stringify(implementosCount));
              present({
                message: 'Reserva realizada',
                duration: 1000,
                position: 'middle',
                color: "success"
              });
              const duration = 1000; // Duración del mensaje presentado en milisegundos
               const timer = setTimeout(reloadPage, duration);
                return () => clearTimeout(timer);
            
            } else {
              present({
                message: 'Error al realizar la reserva',
                duration: 1000,
                position: 'middle',
                color: "danger"
              
              });
            }
          })
          .catch(error => {
            console.error('Error:', error);
            present({
              message: 'Error con el host',
              duration: 1000,
              position: 'middle',
              color: "danger"
            });
          });
        }
       }
      
     
    };

  return (
    <>
      <IonButton id="present-alert"  onClick={() => presentToast()} >Reservar</IonButton>

    </>
  );
}
export default ConfirmacionButton;