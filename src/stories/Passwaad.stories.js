import React from "react";
import { storiesOf } from "@storybook/react";
import Passwaad from "../components/PasswordInput/Passwaad";


const stories = storiesOf('AppTest', module);

stories.add('App',()=> {
    return ( <Passwaad/> )
})