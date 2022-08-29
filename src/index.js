import {createRoot} from 'react-dom/client';
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <div className="principal">
        <strong>Olá React</strong>
        <Primeiro/> 
        <ComParametro nome="Vitor"status="Aprovado"></ComParametro>
        <Fragmento/>
    </div>

)
