import { Alert } from "react-native";

const CustomAlert = (title: string, description: string, buttonText: string) => {
  return (
    Alert.alert(title, description, [{ text: buttonText }])
  );
};

export { CustomAlert };
