import React from "react";

import { KeyboardTypeOptions, StyleProp, TextInput, TextStyle } from "react-native";
import { CommonStyles } from "../styles";

type Props = {
    placeHolder?: string
    value?: string
    onChange?: (value: string) => void
    style?: StyleProp<TextStyle>
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
}

const CustomInput = (props: Props) => {
    return (
        <TextInput
            style={[CommonStyles.textInput, props.style]}
            placeholder={props.placeHolder}
            value={props.value}
            onChangeText={(value) => props.onChange(value)}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
        />
    );
};

export { CustomInput };
