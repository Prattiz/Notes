import styled from 'styled-components';


export const Container = styled.button`
  background: none;
  color: ${({ theme, $Active }) => $Active? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
  font-size: 16px;
`;
