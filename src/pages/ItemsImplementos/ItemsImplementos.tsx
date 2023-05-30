import React from "react";
import { IonPage,IonHeader, IonContent, IonGrid, IonFooter } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";

export {};


const ItemsImplementos: React.FC = () => {
    return (
      <IonPage>      
          <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
          
            <IonGrid>
                <ExploreContainer name="Implementos" />
            </IonGrid>
          
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>
    );
  }; 

  export default ItemsImplementos; 