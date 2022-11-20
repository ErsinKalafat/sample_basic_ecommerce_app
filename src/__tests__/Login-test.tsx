jest.useFakeTimers();
import 'react-native';
import React from "react";
import { create } from 'react-test-renderer'
import { Provider } from "react-redux";

import store from "../store";
import AccountContainer from "../routingFlow/non_session/accountContainer";

const tree = create(
    <Provider store={store}>
        <AccountContainer />
    </Provider>
)

test('Register Button Name is Exist', async () => {
    const btn = await tree?.root?.findByProps({ testID: "register_button" })?.props.children 
    await expect(btn)?.toEqual("Kayıt Ol")
})