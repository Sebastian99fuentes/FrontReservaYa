import React from "react";
import { IonPage,IonHeader, IonContent, IonGrid, IonFooter, IonCol, IonRow } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import ReservaItem from "../../components/ReservaItems/ReservaItem";

import BalonBasketImage from '../../assets/img/BalonesBasket.jpg';
import BalonSoccerImage from '../../assets/img/BalonesSoccer.png';
import BalonVolleyImage from '../../assets/img/BalonesVolley.jpg';
import RaquetasPinPonImage from '../../assets/img/RaquetasPinPon.png';
import ChalecosImage from '../../assets/img/Chalecos.jpg';
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
          <ReservaItem name="Balones Futbol" route='HorariosFutbol' imagen={BalonSoccerImage} />
          </IonCol>
          <IonCol size="6"> 
          <ReservaItem name="Balones Basket" route='HorariosBasket' imagen={BalonBasketImage}  />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6"> 
          <ReservaItem name="Raquetas PinPon" route='HorariosPinPon'  imagen={RaquetasPinPonImage} />
          </IonCol>
          <IonCol size="6"> 
          <ReservaItem name="Chalecos" route='HorariosChalecos'  imagen={ChalecosImage} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6"> 
          <ReservaItem name="Balones Volley" route='HorariosVolley'   imagen={BalonVolleyImage}/>
          </IonCol>
          <IonCol size="6"> 
          {/* <ReservaItem name="Pelotas PinPon" route='HorariosPinPon' imagen={BalonSoccerImage}  /> */}
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