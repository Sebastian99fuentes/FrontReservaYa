import { homeOutline, person, search, woman } from 'ionicons/icons';

import {   IonTabBar, IonTabButton,IonFooter,IonIcon,IonLabel, IonAvatar } from '@ionic/react';
import { Link } from 'react-router-dom';
import User from '../../pages/User/User';


function FooterContainer(){
  return (
    <div >
     <IonFooter>
     <IonTabBar slot="bottom">
          <IonTabButton tab="all-reservas" href="/all-reservas">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Usuario</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MisReservas" href="/MisReservas" >
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Ver mis reservas</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </div>
  );
};

export default FooterContainer;