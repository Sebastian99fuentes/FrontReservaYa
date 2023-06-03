import {  
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
import '../ModalRegistro/ModalRegristro.css';

interface Usuario {
  mail: string;
  password: string;
}

const ModalRegistro: React.FC = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
  const [isValidPasw, setisValidPasw] = useState<boolean>(true);
 
    
  const validateEmail = (email: string) => {
    setCorreo(email);
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
  function validarCadena(cadena: string): boolean {
    const regex = /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return regex.test(cadena);
  }
  const handlePasswordChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setPassword(String(event.detail.value));
    if(password.trim()!==''){
      setisValidPasw(validarCadena(password));
    }
   
  };
  const handleConfirmPasswordChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setConfirmPassword(String(event.detail.value));
  };
  const passwordsMatch = password === confirmPassword;

  const [present] = useIonToast();
  const presentToast = () => {
    const data: Usuario = {
      mail:correo ,
      password: password ,
    };
    console.log(`http://localhost:5002/register?mail=${data.mail}&password=${data.password}`);


    fetch(`http://localhost:5002/register?mail=${data.mail}&password=${data.password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          present({
            message: ' algo salio mal  ',
            duration: 1000,
            position: 'middle',
            color: "danger"
          });
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        present({
              message: 'Te Registraste correctamente',
              duration: 1000,
              position: 'middle',
              color: "success"
            });
            setShowModal(false);
        console.log(data);
      })
      .catch(error => console.error(error));

  };
  

  return (
    <>
      <p onClick={() => setShowModal(true)} >Registrate! </p>
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
                  placeholder="tucorreo@Puce.edu.ec"
                  errorText="No es un correo de la PUCE"
                  onIonInput={(event) => validate(event)}
                  onIonBlur={() => markTouched()}
             ></IonInput>
               </IonItem>
      </IonCardContent>
      <IonCardContent>
      <p>Ingresa tu contraseña </p>
        <IonInput    className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
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
   {isValidPasw ? (
    <IonCardContent>
     
    </IonCardContent>
  ) : (
    <IonCardContent className={ `ion-text-center ion-justify-content-center container` }>
      <IonText color="danger">Tiene que contener caracteres especiales @#! letras en Mayusculas y minimo 8 caracteres</IonText>
    </IonCardContent>
  )}
</IonCard>   
         
      <IonButton color="dark" className="custom-button" expand="block" onClick={() => presentToast()}>Registrar</IonButton>
        </div>
       
      </IonModal>
    </>
  );
};

export default ModalRegistro;