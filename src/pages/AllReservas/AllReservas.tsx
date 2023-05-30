import React from "react";
import { IonPage,IonHeader, IonContent, IonGrid, IonRow, IonFooter } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";

export {};

const AllReservas: React.FC = () => {
    return (
      <IonPage>      
           <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
            <IonGrid>
                <IonRow>
                <IonGrid>
                <ExploreContainer name="Props test " />
            </IonGrid>
                </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>
    );
  }; 

  export default AllReservas; 