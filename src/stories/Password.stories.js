import React from "react";
import { storiesOf } from "@storybook/react";
import PasswordInput from "../components/PasswordInput/PasswordInput";


const stories = storiesOf('AppTest', module);

stories.add('App',()=> {
    return ( <PasswordInput/> )
})