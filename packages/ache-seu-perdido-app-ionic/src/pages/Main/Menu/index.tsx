import React from 'react';
import {
  IonContent, 
  IonPage, 
} from '@ionic/react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from '../../layout';
import { Content } from './styles';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Container>
          <Card>
            <Content>
              <h2>Ache seu Perdido</h2>
              <span>Para cadastrar um objeto encontrado <Link to="/main/register">clique aqui</Link>.</span>
              <span>Para buscar um objeto perdido <Link to="/main/search">clique aqui</Link>.</span>
            </Content>
          </Card>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
