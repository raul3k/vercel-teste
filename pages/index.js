import { useState } from 'react';

function Home() {
    return <div>
        Home
        <Contador />
        Nova branch
    </div>;
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionaContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    );
}

export default Home