import React from "react";
// import './LoginPag.css';
import {  IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonContent,  IonFooter,  IonGrid,  IonHeader,  IonIcon,  IonImg,  IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar, createAnimation } from '@ionic/react'; 
import { Link } from "react-router-dom";
import ModalRegistro from "../../components/ModalRegistro/ModalRegistro";
import ModaRecuperarContraseña from "../../components/ModalRecuperarContraseña/ModalRecuperarContraseña";

export {};

const LoginPag: React.FC = () => {


    return (
        <IonPage >
              <IonHeader className={ `ion-text-center ion-justify-content-center` }>
               
            </IonHeader>
          <div className="carta">
          <IonCard  >
      <IonCardHeader>
        <IonCardTitle></IonCardTitle>   
      </IonCardHeader>
      <IonCardContent >
        <IonInput  placeholder="Correo " type="email" label="">
        </IonInput>
      </IonCardContent >
      <IonCardContent>
        <IonInput placeholder="Contraseña " type="password" label="" >
        </IonInput>
      </IonCardContent>
      <IonCardSubtitle>
     Olvidaste contraseña
     </IonCardSubtitle>

        <Link to='all-reservas'>
        <IonButton className="custom-button" expand="block" href="" >Ingresar</IonButton>
     </Link>
     <ModalRegistro />
     <ModaRecuperarContraseña />
      <IonContent className="ion-padding">
     
      <ModalRegistro />
        
      </IonContent>



    </IonCard>
          </div> 
          <IonFooter className={ `ion-text-center ion-justify-content-center` }>
          <IonGrid className="ion-no-margin ion-no-padding">
          <p>2023</p>
           </IonGrid>
        </IonFooter>
        </IonPage>
    );
  }; 

  export default LoginPag; 