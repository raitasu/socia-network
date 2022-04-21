import React from 'react';
import {addMessageAC, updateTextForMessageAC} from "../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";



export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            (store) => {

                const state = store.getState()

                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }
                const updateTextForMessage = (newMessage: string) => {
                    store.dispatch(updateTextForMessageAC(newMessage))
                }

                return <Dialogs addMessage={addMessage} updateTextForMessage={updateTextForMessage}
                                dialogsPage={state.dialogsPage}/>
            }
        }
    </StoreContext.Consumer>

};
