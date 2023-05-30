import { homeOutline } from 'ionicons/icons';

import {   IonTabBar, IonTabButton,IonFooter,IonIcon,IonLabel } from '@ionic/react';


function FooterContainer(){
  return (
    <div >
     <IonFooter>
     <IonTabBar slot="bottom">
          <IonTabButton tab="all-reservas" href="/all-reservas">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </div>
  );
};

export default FooterContainer;