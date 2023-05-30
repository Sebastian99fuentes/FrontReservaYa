import { IonModal, IonButton, IonCard, IonCardContent, IonInput, IonButtons, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import React, { useState } from 'react';

interface RecuperarCuenta {
  Correo: string;
 
}
const ModaRecuperarContraseña: React.FC = () => {
  const [showModal, setShowModal] = useState(false);



  
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^[a-zA-Z0-9._%+-]+@Puce\.edu\.ec$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };



  const [present] = useIonToast();
  const data: RecuperarCuenta = {
    Correo:''
  };

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
  message: ' algo salio mal  ',
  duration: 1000,
  position: 'middle'
});
}
else{
  present({
    message: 'Se envio un correo',
    duration: 1000,
    position: 'middle'
  });
}
}) 
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>Olvidaste </IonButton>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonToolbar>
              <IonTitle>Olvidaste tu contraseña</IonTitle>
              <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cerrar </IonButton>
              </IonButtons>
            </IonToolbar>
        <div>
        <IonCardContent>
        Se enviara una clave temporal a  tu correo electronico
     </IonCardContent>
      <IonCardContent>
      <IonInput 
                  className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="email"    
                  placeholder="ejemplo@Puce.edu.ec"
                  label=""
                 
                  onIonInput={(event) => validate(event)}
                  onIonBlur={() => markTouched()}
             ></IonInput>
      </IonCardContent>

    <IonButton className="custom-button" expand="block"   onClick={() => presentToast()}>Enviar</IonButton>
        </div>
      </IonModal>
    </>
  );
};

export default ModaRecuperarContraseña;