import React, { useEffect, useState } from "react";
import { IonPage,IonHeader, IonContent, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonAlert } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import axios from "axios";

export {};

const implementosCountString = localStorage.getItem('numImplementos');
const implementosCount = implementosCountString ? JSON.parse(implementosCountString) : null;
const areasDeportivasCountString = localStorage.getItem('numInstalaciones'); 
const areasDeportivasCount = areasDeportivasCountString ? JSON.parse(areasDeportivasCountString) : null;


interface Item {
  id: string;
  tipo: string;
  desc: string;
}
const implementos = ["Balones Basquet", "Raquetas PinPon", "Balones Futbol", "Chalecos", "Balones Volley"];
const areasDeportivas = ["Coliseo", "Cancha"];

const MisReservas: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const handleClick = (item: Item) => {
    setSelectedItem(item);
    setMostrarAlerta(true);
  };

  const handleItemDelete = (tipo: string) => {
    if (implementos.includes(tipo)) {
      if (implementosCount["Implementos"]) {
        implementosCount["Implementos"]--;
        localStorage.setItem('numImplementos', JSON.stringify(implementosCount));
      } 
    }
    if (areasDeportivas.includes(tipo)) {
      if (areasDeportivasCount["Areas deportivas"]) {
        areasDeportivasCount["Areas deportivas"]--;
        localStorage.setItem('numInstalaciones', JSON.stringify(areasDeportivasCount));
      } 
    }
  };
  
  const handleDismiss = (res: string) => {
    setMostrarAlerta(false);

    if (res === 'confirm' && selectedItem) {
     
      setData((prevData) => prevData.filter((item) => item.id !== selectedItem.id));
      deleteData(selectedItem.id);
      console.log(selectedItem.tipo);
      handleItemDelete(selectedItem.tipo);
    }

    setSelectedItem(null);
  };

  async function deleteData( res: string ) {
      const response =await axios.delete(`http://localhost:5002/api/Reservas/id?id=${res}`);
      console.log(response.data);
     
  } 
  async function fetchData() {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://localhost:5002/api/Reservas/id?id=${userId}`);
    setData(response.data);
    console.log(response.data);
    
  }

  useEffect(() => {

    fetchData();
  
  },[]);

  return (
    <IonPage>
      <IonHeader>
        <HeaderContainer />
      </IonHeader>
      <IonContent className={`ion-text-center ion-justify-content-center container`}>
        <IonCard>
        {/* <IonButton color="light" onClick={() => fetchData()}>Ver mis Reservas</IonButton> */}
          {data.length === 0 ? (
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>No tienes ninguna reserva </IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          ) : (
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Tus reservas son:</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                {data.map((item: Item) => (
                  <div key={item.id}>
                    <IonCardTitle>{item.tipo} </IonCardTitle>
                    <IonCardSubtitle>{item.desc} </IonCardSubtitle>
                    <IonButton color="warning" onClick={() => handleClick(item)}>Eliminar Reserva</IonButton>
                    <IonAlert
                      isOpen={mostrarAlerta}
                      header="Seguro de borrar tu reserva!"
                      buttons={[
                        {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: () => handleDismiss('cancel'),
                        },
                        {
                          text: 'Aceptar',
                          role: 'confirm',
                          handler: () => handleDismiss('confirm'),
                        },
                      ]}
                      onDidDismiss={() => setMostrarAlerta(false)}
                    />
                   
                  </div>
                ))}
              </IonCardContent>
            </IonCard>
          )}
           
        </IonCard>
      </IonContent>
      <IonFooter>
        <FooterContainer />
      </IonFooter>
    </IonPage>
  );
};

export default MisReservas;
