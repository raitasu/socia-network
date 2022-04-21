import React from "react";
import store from "./Components/Redux/Redux-store";

const StoreContext = React.createContext(store )

export default StoreContext