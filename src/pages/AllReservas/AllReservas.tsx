import React, { useEffect, useState } from "react";
import { IonPage,IonHeader, IonContent, IonGrid, IonRow, IonFooter } from "@ionic/react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/FooterContainer/FooterContainer";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import axios from "axios";

export {};


interface Item {
  id: string;
  tipo: string;
  desc: string;
}

const implementos = ["Balones Basquet", "Raquetas PinPon", "Balones Futbol", "Chalecos", "Balones Volley"];
const areasDeportivas = ["Coliseo", "Cancha"];


const AllReservas: React.FC = () => {

  const [data, setData] = useState<Item[]>([]);

  const implementosCount: { [tipo: string]: number } = {};
  const areasDeportivasCount: { [tipo: string]: number } = {};

  async function fetchData() {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`http://172.16.0.135:80 /api/Reservas/id?id=${userId}`);
    setData(response.data);
    console.log(response.data);
  
    handleReserva();
  }
 
  const handleReserva = () => {

    for (const elemento of data) {
      const tipo = elemento.tipo;
    
      if (implementos.includes(tipo)) {
        if (implementosCount["Implementos"]) {
          implementosCount["Implementos"]++;
        } else {
          implementosCount["Implementos"] = 1;
        }
      }
    
      if (areasDeportivas.includes(tipo)) {
        if (areasDeportivasCount["Areas deportivas"]) {
          areasDeportivasCount["Areas deportivas"]++;
        } else {
          areasDeportivasCount["Areas deportivas"] = 1;
        }
      }
    }
    if (!implementosCount["Implementos"]) {
      implementosCount["Implementos"] = 0;
    }
  
    if (!areasDeportivasCount["Areas deportivas"]) {
      areasDeportivasCount["Areas deportivas"] = 0;
    }
  console.log("Cantidad de implementos:", implementosCount);
console.log("Cantidad de áreas deportivas:", areasDeportivasCount);
localStorage.setItem('numInstalaciones', JSON.stringify(areasDeportivasCount));
localStorage.setItem('numImplementos', JSON.stringify(implementosCount));
  };
  
  useEffect(() => {

    fetchData();
   
  },[]);
  useEffect(() => {
    handleReserva();
  }, [data]);



    return (
      <IonPage>      
           <IonHeader >
        <HeaderContainer />
          </IonHeader>
          <IonContent>
            <IonGrid>
                <IonRow>
                <IonGrid>
                <ExploreContainer name="Props test " />
            </IonGrid>
                </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <FooterContainer />
          </IonFooter>
      </IonPage>
    );
  }; 

  export default AllReservas; 