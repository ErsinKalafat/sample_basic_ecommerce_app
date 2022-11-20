import CommonOptions from "../helpers/CustomStyleSheet"

export const LoginStyles = CommonOptions((common) => ({
    container: {
        backgroundColor: '#F7D1D3',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 100
    },
    mainWrapper: {
        paddingVertical: 35,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: common.colors.primaryBorderColor,
        flex: 1,
        width: '80%',
        justifyContent: 'space-between'
    },
    eyeIcon: {
        borderBottomWidth: 0.5,
        borderColor: common.colors.secondaryBorderColor,
        flex: 1,
        paddingTop: 10
    },
    socialButton: {
        borderColor: common.colors.secondaryBorderColor,
        borderWidth: 1,
        borderRadius: 50,
        width: 55,
        height: 55,
        margin: 10,
        justifyContent: 'center'
    },
    registerButton: {
        color: common.colors.primary,
        fontWeight: 'bold', 
        alignSelf: 'center', 
        paddingLeft: 10, 
        fontSize: common.fontSizes.medium,
    }

}))
