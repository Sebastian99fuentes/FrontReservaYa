import { IonModal, IonButton, IonCard, IonCardContent, IonInput, IonButtons, IonTitle, IonToolbar, useIonToast, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

interface RecuperarCuenta {
  Correo: string;
 
}
const ModaRecuperarContraseña: React.FC = () => {

  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);


  const handleConfirm = () => {
    // Hacer algo antes de redirigir

    // Redirigir a otra página
    history.push('/Login');
  } 

  const [showModal, setShowModal] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
  const [isValidPasw, setisValidPasw] = useState<boolean>(true); 
  const [password, setPassword] = useState(''); 
  
  const validateEmail = (email: string) => {
    return email.match(
      /^[a-zA-Z0-9._%+-]+@[pP]uce\.edu\.ec$/
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

  const validate2 = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValid(undefined);
    if (value === '') return;
    validatePasword(value)  !== null ? setisValidPasw(true) : setisValidPasw(false);
  };
  const validatePasword = (pasword: string) => {
    setPassword(pasword);
    return pasword.match(
      /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    );
  };


  const [present] = useIonToast();
  const data: RecuperarCuenta = {
    Correo:''
  };

  const presentToast = () => {

    fetch('http://localhost:80/api/Reservas/reservarInstalacion', {
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
  setShowModal(false);
}
}) 
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>  Olvidaste contraseña </IonButton>
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


      

        <IonButton  onClick={() => setShowAlert(true)}>Mostrar confirmación</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Confirmar'}
        message={'¿Está seguro de que desea continuar?'}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => console.log('Cancelado')
          },
          {
            text: 'Confirmar',
            handler: handleConfirm
          }
        ]}
      />
      </IonModal>
    </>
  );
};

export default ModaRecuperarContraseña;