
import {  IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import '../HeaderContainer/HeaderContainer.css';

function HeaderContainer(){
  return (
    <div >
      <IonHeader>
        <IonToolbar className={ `midtitle` }>
       <IonTitle className={ `ion-text-center ion-justify-content-center container` }>ReservaYa!</IonTitle>
        {/* <Link to='/user'  slot="end">
        <IonAvatar>
           <img alt="Silhouette of a person's head" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />
          </IonAvatar>
        </Link> */}
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default HeaderContainer;