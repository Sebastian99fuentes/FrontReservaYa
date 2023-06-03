import React ,{ useEffect, useState  }from "react";
import './User.css';
import { IonPage,IonContent, IonFooter, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton, IonButtons, IonInput, IonModal, IonTitle, IonToolbar, IonCardTitle, InputChangeEventDetail, useIonToast } from "@ionic/react";

import FooterContainer from "../../components/FooterContainer/FooterContainer";

import { Link, useHistory } from "react-router-dom";
import UserOso from '../../assets/img/OsoUsers.jpg';
import axios from "axios";
import { link } from "fs";

export {};

interface MyObject {
  mail: string;
  oldPassword: string;
  newPassword: string;

}
const User: React.FC = () => { 


 



  useEffect(() => {
    const user = localStorage.getItem('usuario');
if(user!=null){
  setcorreo(user);
  setusername( user.substring(0, user.indexOf('@')));
}   
  }, []);
 

  const [showModal, setShowModal] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const [username, setusername] = useState<string>('');
  const [correo, setcorreo] = useState<string>('');
  const [passwordold, setPasswordold] = useState('');
  const [password, setPassword] = useState('');


  const history = useHistory();

  const element: HTMLElement | null = document.getElementById('myElement');
  if (element) {
    element.addEventListener('pointerdown', (event: PointerEvent) => {
      // Captura el puntero cuando se hace clic en el elemento
      element.setPointerCapture(event.pointerId);
      history.push('/login');
    });
  
    element.addEventListener('pointerup', (event: PointerEvent) => {
      // Libera el puntero cuando se levanta el clic
      element.releasePointerCapture(event.pointerId);
    });
  }
  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
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

  const handleConfirmPasswordChange2 = (event: CustomEvent<InputChangeEventDetail>) => {
    setPasswordold(String(event.detail.value));
  };

  const redirectToLogin = () => {
    history.push('/login');
    localStorage.clear();
  };

  const [present] = useIonToast();

  const presentToast = () => {
    
    const data: MyObject = {
      mail: correo,
      oldPassword: passwordold,
     newPassword: password
    };
    console.log(data);
    axios.put(`http://localhost:5002/change`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.status);
      if (response.status === 200) {
        present({
          message: 'Cambio de contraseña realizado',
          duration: 1000,
          position: 'middle',
          color: "success"
        });
      
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
  };

 
    return (
      <IonPage >   
          
        
          <IonCard className={ `ion-text-center ion-justify-content-center container img-center` }>
      <img className=" circle" alt="Si" src={UserOso} />
      <IonCardHeader>
        <IonCardTitle> {username}</IonCardTitle>
        <IonCardSubtitle>Usuario</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>

          <IonItem button>
          <IonLabel className="custom-buttons" onClick={redirectToLogin}>Salir</IonLabel>
           </IonItem>
         

           {/* <IonItem button>
     <IonLabel >Ayuda</IonLabel>
           </IonItem> */}
           <IonItem button>
           {/* <IonButton className="custom-button" expand="block"   onClick={() => presentToast()}> Nueva Contraseña</IonButton> */}
     <IonLabel  className="custom-buttons" onClick={() => setShowModal(true)}  >
      Nueva Contraseña</IonLabel>
           </IonItem>

          <IonContent>
          <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} >
            <IonToolbar>
              <IonTitle></IonTitle>
              <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cerrar </IonButton>
              </IonButtons>
            </IonToolbar>
    
        <div>
        <IonCardContent>
        <p>Ingresa tu contraseña actual</p>
          <IonInput    className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                    type="email"    
                    label=""
                    placeholder="password"
                    onIonChange={handleConfirmPasswordChange2}
                   >
          </IonInput>
        </IonCardContent>
        <IonCardContent>
        <p>Ingresa tu nueva contraseña </p>
          <IonInput    className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                    type="email"    
                    label=""
                    placeholder="password"
                    errorText="No son los mismos"
                    onIonBlur={() => markTouched()}
                    onIonChange={handlePasswordChange}
                   >
          </IonInput>
        </IonCardContent>

  
        <IonButton  color="dark" className="custom-button" expand="block" onClick={() => presentToast()}  >Cambiar</IonButton>
          </div>
        </IonModal>


           <p className={ `ion-text-center ion-justify-content-center container img-center` }>Nosotros </p>
           <IonLabel class="ion-text-center ion-justify-content-center  ion-align-items-center ion-flex container">
            <p>ReservaYA! una App para reservas implementos e instalaciones deportivas</p></IonLabel>
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>

      
    );
  }; 

  export default User; 