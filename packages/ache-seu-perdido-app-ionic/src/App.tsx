import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
import { PublicRoutes } from './routes';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <PublicRoutes />
    </IonReactRouter>
  </IonApp>
);

export default App;
