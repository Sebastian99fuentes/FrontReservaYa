
import {  IonHeader, IonTitle, IonToolbar,IonAvatar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add } from 'date-fns';
import { Link } from 'react-router-dom';

function HeaderContainer(){
  return (
    <div >
     <IonHeader>
        <IonToolbar>
        <IonTitle>ReservaYa! prueba</IonTitle>
        <Link to='/user'  slot="end">
        <IonAvatar>
           <img alt="Silhouette of a person's head" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />

          </IonAvatar>
        </Link>
      
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default HeaderContainer;