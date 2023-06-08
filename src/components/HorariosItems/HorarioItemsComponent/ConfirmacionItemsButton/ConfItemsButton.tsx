import React from 'react';
import { IonAlert, IonButton, useIonToast  } from '@ionic/react';
import axios from 'axios';

interface ItemsReserva{
  implementoID:  string, //Lunes
  usuarioID:string, //Coliseo
  dia:string  //123123
}
const reloadPage = () => {
  window.location.reload();
};

function ConfirmacionItemsButton(props: any) {

    const [present] = useIonToast();
    const implementosCountString = localStorage.getItem('numImplementos');
    const implementosCount = implementosCountString ? JSON.parse(implementosCountString) : null;
    
    const data: ItemsReserva = {
      implementoID:  props.datos.IdItem, //Lunes
      dia: props.datos.Dia, //Coliseo
        usuarioID:props.datos.IdUsuario  //123123
    };
    
    console.log('Response:', data);

    async function revision() {

      if(implementosCount["Implementos"]>=3){
        present({
          message: 'maximo puedes realizar 3 reservas para implementos deportivos a la semana',
          duration: 1000,
          position: 'middle',
          color: "warning"
        });
      }
    

    }

    const presentToast = () => {
      console.log(implementosCount["Implementos"]);
       revision();
     
    

      if(implementosCount["Implementos"]<3){
        if(data.dia.trim()===""){
          present({
            message: 'Selecciona un día',
            duration: 1000,
            position: 'middle',
            color: "warning"
          });
         }
        if(data.dia.trim()!==""){
          axios.post(`http://172.16.0.135:80 /api/Reservas/reservarImplemento`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
         
          .then(response => {
            console.log('Response:', response.status);

            if (response.status === 200) {
              implementosCount["Implementos"]++;
              localStorage.setItem('numImplementos', JSON.stringify(implementosCount));
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
              message: 'Error en la solicitud',
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
export default ConfirmacionItemsButton;