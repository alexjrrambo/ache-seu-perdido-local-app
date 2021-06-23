import styled from 'styled-components';

export const DescriptionContent = styled.div`
  h1 {
    color: #333;
    font-weight: lighter;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentInfos = styled.div`
  padding: 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 1px solid #ccc;

  span {
    font-size: 12px;
  }  
`;

export const ImageObject = styled.div`
  height: 100px;
  width: 100px;
  background: #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 8px;
  }
`;
