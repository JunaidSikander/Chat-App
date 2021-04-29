import React, {useState} from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Chat, Join} from "pages";

function App() {
    const [state, setState] = useState({name: '', room: ''});

    return (
        <BrowserRouter>
            <Route exact path='/' render={(props) => <Join state={state} setState={setState} {...props}/>}/>
            <Route path='/chat' render={(props) => <Chat state={state} setState={setState} {...props}/>}/>
        </BrowserRouter>
    )
};

export default App;
