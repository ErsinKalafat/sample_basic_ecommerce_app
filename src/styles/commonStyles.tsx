import CommonOptions from "../helpers/CustomStyleSheet"

export const CommonStyles = CommonOptions((common) => ({
  container: {
    backgroundColor: '#FEF4F4',
    flex: 1
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(129, 152, 151, 0.2)',
    zIndex: 999,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: common.colors.secondaryBorderColor,
    fontSize: common.fontSizes.medium,
    paddingBottom: 3
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTouchableButton: {
    backgroundColor: common.colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20
  },
  mainTouchableButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: common.fontSizes.large,
  },
  userInteractionText: {
    color: common.colors.primaryTextColor,
    alignSelf: 'center',
    padding: 5,
    fontSize: common.fontSizes.medium,
  }
}))
