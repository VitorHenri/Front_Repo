import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default (props) => {
    return (
        <div className="principal">
            <strong>Fundamentos React</strong>
            <Card titulo="Desafio Aleatório">
                <Aleatorio min={10} max={20} />
            </Card>
            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Primeiro />
            <ComParametro nome="Vitor" status="Aprovado"></ComParametro>

        </div>
    )
}