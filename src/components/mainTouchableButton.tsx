import React from "react";

import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { CommonStyles } from "../styles";

type Props = {
    label?: string
    onPress?: (value: string) => void
    styleBtn?: StyleProp<ViewStyle>
    styleLabel?: StyleProp<TextStyle>
}

const MainTouchableButton = (props: Props) => {    
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={[CommonStyles.mainTouchableButton, props.styleBtn]}
            activeOpacity={0.5}
        >
            <Text style={[CommonStyles.mainTouchableButtonLabel, props.styleLabel]}>{props.label}</Text>
        </TouchableOpacity>
    );
};

export { MainTouchableButton };
