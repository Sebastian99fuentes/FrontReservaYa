import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllReservas from './pages/AllReservas/AllReservas';

import Login from './pages/Login/LoginPag';
import Horarios from './components/Horarios/Horarios';
import ReservaImplementos from './pages/ReservaImplementos/ReservaImplementos';

import MisReservas from './pages/MisReservas/MisReservas';
import ItemsImplementos from './pages/ItemsImplementos/ItemsImplementos';
import User from './pages/User/User';
import HorariosItems from './components/HorariosItems/HorariosItems';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

        <IonRouterOutlet>

        
           <Route  path="ItemsImplementos" component={ItemsImplementos} exact/>
           <Route  path="/MisReservas" component={MisReservas} exact/>
            <Route  path="/reservaImplementos" component={ReservaImplementos} exact/>
           <Route  path="/HorariosColiseo" component={Horarios} exact/>
           <Route  path="/HorariosCancha" component={Horarios} exact/>

           <Route  path="/HorariosFutbol" component={HorariosItems} exact/>
           <Route  path="/HorariosPinPon" component={HorariosItems} exact/>
           <Route  path="/HorariosBasket" component={HorariosItems} exact/>
           <Route  path="/HorariosChalecos" component={HorariosItems} exact/>
           <Route  path="/HorariosVolley" component={HorariosItems} exact/>
           <Route  path="/HorariosPinPon" component={HorariosItems} exact/>
           
           <Route path="/login" component={Login} exact/>
          <Route path="/all-reservas" component={AllReservas} exact/>

          <Route path="/user" component={User} exact/>

          <Redirect to="/login"/>
          
        </IonRouterOutlet>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
