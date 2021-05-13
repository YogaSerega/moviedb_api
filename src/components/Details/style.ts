import styled from 'styled-components';
import { Container, Col, Modal } from 'reactstrap';

export const Wrapper = styled(Container)`
  h1 {
    font-size: 1.5rem;
  }
`;

export const ModalStyled = styled(Modal)``;

export const MovieInfo = styled.div`
  flex: 4;
  span {
    font-weight: bold;
  }
`;

export const MovieTopInfo = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;

export const MovieImage = styled.div`
  flex: 1;
  height: 300px;
  margin: auto 0;
  margin-right: 20px;
  margin-bottom: 20px;
  img {
    height: 300px;
    width: auto;
  }
`;

export const MovieLeftInfo = styled(Col)`
  @media (max-width: 1200px) {
    max-width: 100% !important;
  }
`;
