import React, { useEffect, useState } from "react";
import { IonPage,IonHeader, IonContent, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import axios from "axios";

export {};


interface Reserva {
  id: string;
  tipo: string;
  desc: string;
}


const MisReservas: React.FC = () => {
  
  const [data, setData] = useState<Reserva[]>([]);

  useEffect(() => {
 
    async function fetchData() {
      const response = await axios.get(`http://localhost:5002/api/Reservas/id?id=aa7cace6-fd92-40d2-b265-95cdac42c081`)
      setData(response.data);
      console.log(response.data)
    }
    fetchData();
    
  }, []);
  
    return (
      <IonPage>      
          <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent className={ `ion-text-center ion-justify-content-center container` }>
          
          <IonCard>
      {data.length === 0 ? (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>No hay reservas</IonCardSubtitle>
    </IonCardHeader>
  </IonCard>
) : (
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>Tus reservas son:</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
    
       {data.map((item: { id: string; tipo: string; desc: string;  }) => (
  <div key={item.id}>
    <IonCardTitle>{item.tipo}</IonCardTitle>
    <IonCardSubtitle>{item.desc}</IonCardSubtitle>
  </div>
))}
    </IonCardContent>
  </IonCard>
)}
       {/* Por el momento todo tranquilo... */}


    </IonCard>
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>
    );
  }; 

  export default MisReservas; 