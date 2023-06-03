
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import ReservaItem from '../ReservaItems/ReservaItem';
import ColiseoImage from '../../assets/img/Coliseo.jpg';
import CanchaImage from '../../assets/img/Cancha.jpg';
import ImplementosImage from '../../assets/img/Implementos.jpg';
interface ContainerProps {
  name: string;
  
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return ( 
    <div  className={ `ion-text-center ion-justify-content-center container` }>
     <IonGrid fixed={true}>
        <IonRow>
          <IonCol>  <ReservaItem  name="Coliseo" route='HorariosColiseo'  imagen={ColiseoImage} />   </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>  <ReservaItem  name="Estadio" route='HorariosCancha' imagen={CanchaImage}/> </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>    <ReservaItem  name="Implementos" route='ReservaImplementos' imagen={ImplementosImage}/> </IonCol>
        </IonRow>
      </IonGrid>
    
     
    
    </div>
  );
};

export default ExploreContainer;
