import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, IonLabel, IonInput, IonToast, IonIcon } from '@ionic/react';
import { albumsOutline } from 'ionicons/icons';
import { DescriptionContent, ContentItem, ImageObject, ContentInfos } from './styles';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import { Container } from '../../layout';
import { getObjects } from '../../../services/api';

interface SearchItem
{
    objectName: string, 
    objectLocation: string,
    city: string,
    state: string,
    phone: string,
}

const initialFiltersState = {
  objectName: '',
  city: '',
  state: '',
};

const Search: React.FC = () => {
  const [filters, setFilters] = useState(initialFiltersState);
  const [searchList, setSearchList] = useState<SearchItem[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handleSearch = async () => {
    const objectsData = await getObjects(filters);

    if (objectsData.objects.length > 0) {
      setSearchList(objectsData.objects);
    } else {
      setShowToast(true);
    }
  }

  const handleFilterState = (field: string, value: string) => {
    setFilters({...filters, [field]: value});
  }

  return (
    <IonPage>
      <IonToast
        isOpen={showToast}
        onDidDismiss={()=>setShowToast(false)}
        message="Não foram encontrados objetos :("
        duration={2000}
      />
      <Header />
      <IonContent fullscreen>
        <Container>
          {
            searchList.length > 0 ? (
            <>
              <Card title="Resultados">
                {searchList.map(object => (
                  <ContentInfos key={object.objectName}>
                    <ImageObject>
                      <IonIcon icon={albumsOutline} />
                      <span>Image placeholder</span>
                    </ImageObject>
                    <IonLabel>{object.objectName}</IonLabel>
                    <span>Objeto encontrado em {object.city} - {object.state}. {object.objectLocation}</span>
                    <span>Contato: {object.phone}</span>
                  </ContentInfos>
                ))}               
                <IonButton expand="block" onClick={()=> setSearchList([])}>Voltar</IonButton>
              </Card>
            </>
            ) : 
            (<>
              <DescriptionContent>
                <h4>Perdeu e não sabe onde encontrar?<br/>O <b>Ache seu Perdido</b> te ajuda :)</h4>
              </DescriptionContent>
              <Card title="Pesquise seu objeto perdido">
                  <ContentItem>
                    <IonInput 
                      value={filters.state}
                      placeholder="Estado" 
                      onIonChange={e => handleFilterState('state', (e.target as HTMLInputElement).value)}  
                    />
                    <IonInput 
                      value={filters.city}
                      placeholder="Cidade"
                      onIonChange={e => handleFilterState('city', (e.target as HTMLInputElement).value)}  
                    />
                    <IonInput 
                      value={filters.objectName}
                      placeholder="Nome do objeto"
                      onIonChange={e => handleFilterState('objectName', (e.target as HTMLInputElement).value)}  
                    />
                  </ContentItem>
                <IonButton expand="block" onClick={handleSearch}>BUSCAR</IonButton>
              </Card>
            </>)
        }
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Search;
