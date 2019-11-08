import styled from 'styled-components';
export const CenterApp = styled.div`
    margin: 0 auto
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 10rem;
`;

export const CharacterCard = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  margin: 2rem;
  padding: 2rem;
  1justify-content: space-around;
`;

export const AvatarImage = styled.img`
  width: 35%;
  margin: 10px;
`;
export const CharacterInfo = styled.div`
  h2 {
    margin: 0.5rem;
  }
  p {
    margin: 0.5rem;
  }
`;
