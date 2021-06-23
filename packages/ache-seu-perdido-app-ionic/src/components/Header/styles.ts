import styled from 'styled-components';
import { isPlatform } from '@ionic/react';

export const TitleHeader = styled.div`
  background: #66B33B;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: 10px;
    height: 60px;
    margin-top: ${isPlatform('ios') ? '10px' : '0'};
  }
`;