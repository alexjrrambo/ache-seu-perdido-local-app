import React from 'react';
import {
  IonHeader,
  IonToolbar
} from '@ionic/react';
import Logo from '../../assets/images/logo.png';
import { TitleHeader } from './styles';

const Header: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <TitleHeader><img src={Logo} alt="logo ache seu perdido"/></TitleHeader>
    </IonToolbar>
  </IonHeader>
);

export default Header;
