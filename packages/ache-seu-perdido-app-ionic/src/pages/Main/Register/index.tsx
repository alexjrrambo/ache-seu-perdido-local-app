import React, { useState } from 'react';
import { 
  IonContent, 
  IonPage,
  IonInput,
  IonButton,
  IonToast
} from '@ionic/react';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from '../../layout';
import { createObject } from '../../../services/api';

const initialFromState = {
  objectName: '',
  objectLocation: '',
  city: '',
  state: '',
  phone: ''
};

const Register: React.FC = () => {
  const [formState, setFormState] = useState(initialFromState);
  const [showToast, setShowToast] = useState({visible: false, message: ""});

  const handleCreateObject = async () => {
    try {
      await createObject(formState);
      setShowToast({ visible: true, message: "Objeto cadastrado" });

      setFormState(initialFromState);
    } catch (error) {
      setShowToast({ visible: true, message: "Por favor, preencha todos os campos." });
    }
  }

  const handleFormState = (field: string, value: string) => {
    setFormState({...formState, [field]: value});
  }

  return (
    <IonPage>
      <IonToast
        isOpen={showToast.visible}
        onDidDismiss={()=>setShowToast({ visible: false, message: "" })}
        message={showToast.message}
        duration={2000}
      />
      <Header />
      <IonContent fullscreen>
        <Container>
          <Card title="Cadastro de objeto">
            <IonInput
              value={formState.state}
              placeholder="Estado" 
              onIonChange={e => handleFormState('state', (e.target as HTMLInputElement).value)} 
              autocomplete="off"
            />
            <IonInput
              value={formState.city}
              placeholder="Cidade" 
              onIonChange={e => handleFormState('city', (e.target as HTMLInputElement).value)} 
              autocomplete="off"
            />
            <IonInput 
              value={formState.objectName}
              placeholder="Nome do objeto" 
              onIonChange={e => handleFormState('objectName', (e.target as HTMLInputElement).value)} 
              autocomplete="off"
            />
            <IonInput 
              value={formState.phone}
              placeholder="Telefone/Cel/Whatsapp" 
              onIonChange={e => handleFormState('phone', (e.target as HTMLInputElement).value)} 
              autocomplete="off"
            />
            <IonInput 
              value={formState.objectLocation}
              placeholder="Onde você encontrou?" 
              onIonChange={e => handleFormState('objectLocation', (e.target as HTMLInputElement).value)} 
              autocomplete="off"
            />
            <IonButton onClick={handleCreateObject} expand="block">CADASTRAR</IonButton>
          </Card>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Register;
