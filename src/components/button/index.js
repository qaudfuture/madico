import { View, Text } from "react-native";
import React from "react";
import { ButtonContainer } from './styles'

const Button = ({ onPressButton }) => {
    return (
        <ButtonContainer onPress={onPressButton}>
            <Text stye={{ color: "red", fontWeight: "bold" }}>button</Text>
        </ButtonContainer>
    );
};

export default Button;
