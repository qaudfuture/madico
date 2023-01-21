import { View, Text } from "react-native";
import React from "react";
import { ButtonContainer } from './styles'

const Button = ({ onPressButton }) => {
    return (
        <ButtonContainer onPress={onPressButton}>
            <Text>button</Text>
        </ButtonContainer>
    );
};

export default Button;
