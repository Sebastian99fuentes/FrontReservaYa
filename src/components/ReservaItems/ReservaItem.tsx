import './ReservaItem.css';
import React from 'react';
import { IonCard,IonCardHeader, IonCardSubtitle, IonItem } from '@ionic/react';
import { Link } from 'react-router-dom';

interface ContainerProps {
    name: string;
    route: string;
  }
  
  const ReservaItem: React.FC<ContainerProps> = ({ name,route }) => {
    const ruta =`/${route}`;
    return (
      <div className="carta">
      <IonItem  routerDirection='none' lines='none' className={ `ion-text-center ion-justify-content-center container` }>
      <Link to={`${ruta}`}>
      <IonCard >
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardSubtitle>{name}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
     </Link>
      
      </IonItem>
      </div>
    );
  };
  
  export default ReservaItem;