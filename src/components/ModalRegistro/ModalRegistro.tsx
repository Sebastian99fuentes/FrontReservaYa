import {  createAnimation,
  IonButtons,
  IonButton,
  IonModal,
  IonToolbar,
  IonTitle,
  IonItem,
  IonCardContent,
  IonInput,
  InputChangeEventDetail,
  IonCard,
  IonText,
  useIonToast, } from '@ionic/react';

import React, { useState  } from 'react';

  
interface Usuario {
  Correo: string;
  clave: string;
}



const ModalRegistro: React.FC = () => {
  
 
  const data: Usuario = {
    Correo:'',
    clave: ''
  };

  const [showModal, setShowModal] = useState(false);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
 
    
  const validateEmail = (email: string) => {
    setCorreo(email);
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




  const handlePasswordChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setPassword(String(event.detail.value));
  };
  const handleConfirmPasswordChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setConfirmPassword(String(event.detail.value));
  };
  const passwordsMatch = password === confirmPassword;
  
  data.clave=password;
  data.Correo=correo;



  const [present] = useIonToast();
  
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
    message: 'Ya estas registrado',
    duration: 1000,
    position: 'middle'
  });
}
}) 
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>Registrate</IonButton>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} >
            <IonToolbar>
              <IonTitle>Ingresa tus datos</IonTitle>
              <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cerrar </IonButton>
              </IonButtons>
            </IonToolbar>
    
        <div>
        <IonCardContent>
        <p>Ingresa tu Correo Electrónico </p>
        <IonItem lines='none'>
               <IonInput 
                  className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="email"    
                  label=""
                  placeholder="ejemplo@Puce.edu.ec"
                  errorText="No es un correo de la PUCE"
                  onIonInput={(event) => validate(event)}
                  onIonBlur={() => markTouched()}
             ></IonInput>
               </IonItem>
      </IonCardContent>
      <IonCardContent>
      <p>Ingresa tu contraseña </p>
        <IonInput    className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="password"    
                  label=""
                  placeholder="contraseña"
                  onIonBlur={() => markTouched()}
                  onIonChange={handlePasswordChange}
                 >
        </IonInput>
      </IonCardContent>
      <IonCardContent>
      <p>Repetir contraseña </p>
        <IonInput className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                  type="password"    
                  label=""
                  placeholder="contraseña"
                  onIonBlur={() => markTouched()}
                  onIonChange={handleConfirmPasswordChange}
                 >
        </IonInput>
      </IonCardContent>  
      <IonCard>
  {passwordsMatch ? (
    <IonCardContent>
     
    </IonCardContent>
  ) : (
    <IonCardContent className={ `ion-text-center ion-justify-content-center container` }>
      <IonText color="danger">Las contraseñas no coinciden</IonText>
    </IonCardContent>
  )}
</IonCard>   
         
      <IonButton className="custom-button" expand="block" onClick={() => presentToast()}>Registrar</IonButton>
        </div>
       
      </IonModal>
    </>
  );
};

export default ModalRegistro;