import React ,{ useState  }from "react";
import './User.css';
import { IonPage,IonHeader, IonContent, IonGrid, IonFooter, IonRippleEffect, IonItem, IonLabel, IonAvatar, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton, IonButtons, IonInput, IonModal, IonTitle, IonToolbar } from "@ionic/react";

import FooterContainer from "../../components/FooterContainer/FooterContainer";
import { isValid } from "date-fns";
import { Link } from "react-router-dom";


export {};


const User: React.FC = () => { 

  const [showModal, setShowModal] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };



    return (
      <IonPage >     
    <IonContent >
          <div className="wrapper" >
        <div className="ion-activatable ripple-parent circle">
           <img alt="Silhouette of a person's head" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" />
        <IonRippleEffect type="unbounded"></IonRippleEffect>
        </div>
        <h1>ssfuentes</h1>
      </div>
    </IonContent>
          <IonContent >
          <IonItem button>
          <Link to='/MisReservas' >
          <IonLabel>Mis Reservas</IonLabel>
          </Link>
           </IonItem>
          <IonItem button>
          <Link to='/login' >
          <IonLabel>Salir</IonLabel>
          </Link>
           </IonItem>
           <IonItem button>
     <IonLabel>Nosotros</IonLabel>
           </IonItem>
           <IonItem button>
     <IonLabel >Ayuda</IonLabel>
           </IonItem>
           <IonItem button>
     <IonLabel onClick={() => setShowModal(true)} >
      Nueva Contraseña</IonLabel>
           </IonItem>

          <IonContent>
          <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} >
            <IonToolbar>
              <IonTitle></IonTitle>
              <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>Cerrar </IonButton>
              </IonButtons>
            </IonToolbar>
    
        <div>
        <IonCardContent>
        <p>Ingresa tu contraseña </p>
          <IonInput    className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                    type="password"    
                    label=""
                    placeholder="password"
                    errorText="Invalid password"
                    onIonInput={(event) => validate(event)}
                    onIonBlur={() => markTouched()}
                   >
          </IonInput>
        </IonCardContent>
        <IonCardContent>
        <p>Repetir contraseña </p>
          <IonInput className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                    type="password"    
                    label=""
                    placeholder="password"
                    errorText="Invalid password"
                    onIonInput={(event) => validate(event)}
                    onIonBlur={() => markTouched()}
                   >
          </IonInput>
        </IonCardContent>  
  
        <IonButton className="custom-button" expand="block" >Cambiar</IonButton>
          </div>
        </IonModal>
          </IonContent>



          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>

      
    );
  }; 

  export default User; 