import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Cartitem  } from "./components/CartApiContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Cartitem>
         <App/>
      </Cartitem >
     
    </Provider>
    
    </BrowserRouter>
    
  </StrictMode>,
)
