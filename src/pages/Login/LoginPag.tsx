import React, { useState } from "react";
import { Usuario } from '../../Data/Users';
import { DecodedToken } from '../../Data/Tokencontext';
import {  IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonCol,  IonContent,  IonGrid,  IonIcon,  IonInput, IonPage, IonRow, useIonToast } from '@ionic/react'; 
import ModalRegistro from "../../components/ModalRegistro/ModalRegistro";
import { eye, eyeOff } from 'ionicons/icons';
import jwt_decode from 'jwt-decode';
import '../Login/LoginPag.css';
export {};

const LoginPag: React.FC = () => {  
  const [present] = useIonToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [buttonColor, setButtonColor] = useState('success'); 
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const miUsuario: Usuario = {
    mail: email,
    password: password,
  };


  const validateEmail = (email: string) => {
    setEmail(email);
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



  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handPaswordMail = async () =>{

    console.log(isValid);

    if(password.trim() === '' || isValid===undefined ||isValid===false){
      present({
        message: 'Ingresa correo y contraseña',
        duration: 1000,
        position: 'middle',
        color: 'danger'
      }); 
    }
  };
  const handleLogin = async () => {

    await handPaswordMail();
    try { 
      if(isValid===true && password!==''){
        const response = await fetch('http://localhost:5002/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(miUsuario),
        })
        if (response.status===200) {
          const result = await response.json();
          console.log(result);
          try {
            const decoded: DecodedToken = jwt_decode(result.token);
            console.log(decoded);
            if (decoded) {
              localStorage.setItem('usuario', decoded.sub);
              localStorage.setItem('userId', decoded.id);
              localStorage.setItem('numInstalaciones', decoded.numInstalaciones);
              localStorage.setItem('numImplementos', decoded.numImplementos);
            } else {
              console.error('No se pudo decodificar el token');
            }
          } catch (error) {
            console.error('Error al decodificar el token:', error);
          }
          window.location.href = '/all-reservas';
        }
        if (response.status===400) {
          present({
            message: ' Contraseña no valida ',
            duration: 1000,
            position: 'middle',
            color: 'danger'
          }); 
        }
        }
      
    } catch (error) {
      console.error(error);
      present({
        message: ' error con el host ',
        duration: 1000,
        position: 'middle',
        color: 'danger'
      }); 
    }
    setButtonColor("success");
  };


    return (
        <IonPage >
           <IonContent  className="ion-padding background-image-content">
          <div className="cartalog">
               <IonCard color="primary" className="transparent-card" >
        <IonCardHeader> <IonCardTitle className={ `ion-text-center ion-justify-content-center` }>Login</IonCardTitle></IonCardHeader>
        <IonCardContent>
        <IonCard >
      <IonCardHeader>
        <IonCardTitle></IonCardTitle>   
      </IonCardHeader>
      <IonCardContent >
      <IonInput
  placeholder="tucorreo@Puce.edu.ec"
  type="email"
  className="ion-activated ion-bordered"
  aria-label="Email"
  onIonInput={(event) => validate(event)}
  onIonBlur={() => markTouched()}
></IonInput>
      </IonCardContent >
      <IonCardContent>
      <IonInput
  placeholder="Contraseña"
  type={showPassword ? 'text' : 'password'}
  value={password}
  onIonChange={handlePasswordChange}
  className="ion-activated ion-bordered"
            >
      {showPassword ? (
        <IonIcon
          slot="end"
          icon={eyeOff}
          onClick={toggleShowPassword}
        />
      ) : (
        <IonIcon
          slot="end"
          icon={eye}
          onClick={toggleShowPassword}
        />
      )}
    </IonInput>
      </IonCardContent>
      <IonCardSubtitle>
     </IonCardSubtitle>
    </IonCard>


        </IonCardContent>
        <IonGrid fixed={true}>
        <IonRow className={ `ion-text-center ion-justify-content-center` }>
        <IonButton 
        color={`${buttonColor}` } 
        className={`custom-button`} 
         expand="block" 
        onClick={handleLogin} 
         onTouchStart={() => setButtonColor('light')} 
        >Ingresar
        </IonButton>
        </IonRow>
      </IonGrid>
      <IonRow className={ `ion-text-center ion-justify-content-center` }>
      <IonCol >   <ModalRegistro /> </IonCol>
        </IonRow>
      
      </IonCard>
            
    
          </div> 
        

      </IonContent>
      
        </IonPage>
    );
  }; 

  export default LoginPag; 