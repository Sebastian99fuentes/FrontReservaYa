import React from "react";
// import './LoginPag.css';
import {  IonContent,  IonFooter,  IonHeader,  IonItem,  IonLabel,  IonList,  IonPage } from '@ionic/react'; 
import HorarioContainer from "./HorarioComponent/HorarioContainer";
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
            <IonList>
              <IonItem>
              <IonLabel class="ion-text-center ion-justify-content-center  ion-align-items-center ion-flex container"> 
              Selecciona día y hora</IonLabel>
              </IonItem>
            </IonList> 
        <HorarioContainer />
         </IonContent>
         <IonFooter>
            <FooterContainer />
          </IonFooter>
        </IonPage>
    );
  }; 

  export default Horarios; 