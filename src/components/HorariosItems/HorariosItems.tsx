import React from "react";
// import './LoginPag.css';
import {  IonContent,  IonFooter,  IonHeader,  IonPage } from '@ionic/react'; 
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import FooterContainer from "../FooterContainer/FooterContainer";
import HorarioItemsContainer from "./HorarioItemsComponent/HorarioItemsContainer";

export {};



const HorariosItems: React.FC = () => {

    return (
        <IonPage >
           <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
        <HorarioItemsContainer />
         </IonContent>
         <IonFooter>
            <FooterContainer />
          </IonFooter>
        </IonPage>
    );
  }; 

  export default HorariosItems; 