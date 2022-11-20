import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View, Platform, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import { saveLoginUser } from "../actions/reduxActions/userReduxActions";
import { CustomAlert, Spinner, CustomInput, MainTouchableButton } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonStyles, LoginStyles } from '../styles';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const { rowCenter, userInteractionText } = CommonStyles
const { eyeIcon, socialButton, registerButton, mainWrapper, container } = LoginStyles

const Login = () => {

    const dispatch = useDispatch();
    const [spinner, setSpinner] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisibility, setPasswordVisibility] = useState(true);


    useEffect(() => {
        setSpinner(false)
    }, []);


    const formValid = () => {
        let emailCheckRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let isEmailValid = emailCheckRegex.test(email) && !!password
        return isEmailValid
    }

    const loginSuccess = () => {
        dispatch(saveLoginUser({ email, password }))
    }

    const login = () => {
        if (formValid()) {
            setSpinner(true)
            setTimeout(() => {
                loginSuccess()
                setSpinner(false)
            }, 1000)
        } else {
            CustomAlert("Error", "Invalid Email", "OK")
        }
    }


    const renderForm = () => {
        return (
            <>
                <CustomInput
                    placeHolder="Email"
                    value={email}
                    onChange={(value) => setEmail(value)}
                    keyboardType="email-address"
                />
                <View style={rowCenter}>
                    <CustomInput
                        placeHolder="Password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                        secureTextEntry={passwordVisibility}
                        style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setPasswordVisibility(!passwordVisibility)}
                        style={eyeIcon}
                    >
                        <FontAwesomeIcon icon={passwordVisibility ? faEyeSlash : faEye} size={20} color="#484848" />
                    </TouchableOpacity>
                </View>
                <MainTouchableButton label='Giriş Yap' onPress={() => login()} />
            </>
        )
    }

    const renderSocialChoices = () => {
        let images = [require('../images/logos/google.png'), require('../images/logos/facebook.png'), require('../images/logos/apple.png')]
        return (
            <View style={rowCenter}>
                {images?.map((img, i) => (
                    <TouchableOpacity key={i} style={socialButton}>
                        <Image source={img} style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    const renderRegisterField = () => {
        return (
            <View style={[rowCenter, { marginTop: 15 }]}>
                <Text style={userInteractionText} >Hesabın Yok mu?</Text>
                <Text testID="register_button" style={registerButton} onPress={() => CustomAlert("İşlem", "Kayıt Ol", "Kapat")}>Kayıt Ol</Text>
            </View>
        )
    }

    const forgotPasswordField = () => {
        return (
            <>
                <Text style={userInteractionText} onPress={() => CustomAlert("İşlem", "Şifremi Unuttum", "Kapat")}>Şifremi Unuttum</Text>
                <Text style={[userInteractionText, { color: '#8b7374', fontSize: 12 }]} >------------ VEYA ------------</Text>
            </>
        )
    }

    const renderContent = () => {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={mainWrapper}>
                <Image source={require('../images/logos/gemmabaker.png')} style={{ alignSelf: 'center' }} />
                {renderForm()}
                {forgotPasswordField()}
                {renderSocialChoices()}
                {renderRegisterField()}
            </KeyboardAvoidingView>
        )
    }


    return (
        <SafeAreaView style={container}>
            {spinner ? (
                <Spinner />
            ) :
                renderContent()
            }
        </SafeAreaView>
    );
};

export { Login };
