import styled, { injectGlobal } from 'styled-components';
import { font } from '../../utils';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  background-color: #34495e;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${font.default};
`;

export const ErrorMessage = styled.div`
  font-size: 2.5rem;
`;

export const Board = styled.div`
  width: 700px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 12px 0 rgba(233, 235, 235, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  margin: 1rem 0;
  font-size: ${({ main }) => (main ? '2.55rem' : '1.3rem')};
  text-transform: uppercase;
`;
