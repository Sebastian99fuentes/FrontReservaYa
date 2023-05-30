import React from "react";
// import './LoginPag.css';
import {  IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonContent,  IonFooter,  IonGrid,  IonHeader,  IonIcon,  IonInput, IonPage, IonToolbar } from '@ionic/react'; 
import { arrowBack, shapesOutline } from "ionicons/icons";
import HorarioContainer from "../HorarioComponent/HorarioContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import FooterContainer from "../FooterContainer/FooterContainer";

export {};



const Horarios: React.FC = () => {

    return (
        <IonPage >
           <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
        <HorarioContainer />
         </IonContent>
         <IonFooter>
            <FooterContainer />
          </IonFooter>
        </IonPage>
    );
  }; 

  export default Horarios; 