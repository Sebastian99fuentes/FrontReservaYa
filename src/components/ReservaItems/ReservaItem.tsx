import './ReservaItem.css';
import React from 'react';
import { IonCard,IonCardHeader, IonCardSubtitle, IonContent, IonItem } from '@ionic/react';
import { Link } from 'react-router-dom';

interface ContainerProps {
    name: string;
    route: string;
    imagen: string;
  }
  
  const ReservaItem: React.FC<ContainerProps> = ({ name,route, imagen }) => {

    const ruta =`/${route}`;
    return (
      <div className="carta">
        <IonItem  routerDirection='none' lines='none' className={ `ion-text-center ion-justify-content-center container` }>
      <Link to={`${ruta}`}>
      <IonCard >
        <img alt="Silhouette of mountains" src={imagen} />
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