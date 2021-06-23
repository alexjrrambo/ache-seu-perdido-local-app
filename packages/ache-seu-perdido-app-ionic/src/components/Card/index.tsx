import React from 'react';
import {
  IonCardContent,
  IonCardHeader,
} from '@ionic/react';
import {
  TitleCardHeader,
  Separator,
  CardContainer,
} from './styles';

interface Props {
  title?: string,
}

const Card: React.FC<Props> = ({ children, title }) => (
  <CardContainer>
    {title && (
      <>
        <IonCardHeader>
          <TitleCardHeader>{title}</TitleCardHeader>
        </IonCardHeader>
        <Separator />
      </>
    )}
    <IonCardContent>
      {children}
    </IonCardContent>
  </CardContainer>
);

export default Card;
