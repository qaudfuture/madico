import styled from 'styled-components/native';
// import {}
import { StyleConstants } from 'constants/styleConstants';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: ${StyleConstants.CENTER};
    justify-content: ${StyleConstants.CENTER};
    align-self:${StyleConstants.CENTER};
    padding: 18px;
    border-radius:10;
    shadowColor: 'rgba(0, 0, 0, 0.1)';
    shadowOpacity: 0.8;
    elevation: 6;
    shadowOffset : { width: 1, height: 13};
    width:90%;
`;