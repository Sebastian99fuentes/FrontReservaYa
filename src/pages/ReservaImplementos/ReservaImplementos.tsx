import React from "react";
import { IonPage,IonHeader, IonContent, IonGrid, IonFooter, IonCol, IonRow } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import ImplementosReservaContainer from "../../components/ImplementosReservaContainer/ImplementosReservaContainer";

export {};


const ReservaImplementos: React.FC = () => {
    return (
      <IonPage>      
          <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
          <IonGrid>
        <IonRow>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Balones Futbol" route='Horarios'  />
          </IonCol>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Raquetas Pin Pon" route='Horarios'  />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Balones Basket" route='Horarios'  />
          </IonCol>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Chalecos" route='Horarios'  />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Balones Volley" route='reserva-coliseo'  />
          </IonCol>
          <IonCol size="6"> 
          <ImplementosReservaContainer name="Pelotas Pin Pon" route='reserva-coliseo'  />
          </IonCol>
        </IonRow>
      </IonGrid>
           
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>
    );
  }; 

  export default ReservaImplementos; 