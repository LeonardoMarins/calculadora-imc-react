import { useState, useEffect } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {

    const [entrada, setEntrada] = useState(0);
    const [entrada2, setEntrada2] = useState(0);
    const [condicao, setCondicao] = useState('');

    const calcula = () => {
        return Math.floor(entrada2 / (entrada * entrada));
    }

    function testarCondicao() {
        if (calcula() < 16) {
            setCondicao("Magreza grave");
        } else if (calcula() >= 16 && calcula() < 17) {
            setCondicao("Magreza moderad");
        } else if (calcula() >= 17 && calcula() < 18.5) {
            setCondicao("Magreza leve");
        } else if (calcula() >= 18.5 && calcula() < 25) {
            setCondicao("Normal");
        } else if (calcula() >= 25 && calcula() < 30) {
            setCondicao("Sobrepeso");
        } else if (calcula() >= 30 && calcula() < 35) {
            setCondicao("Obesidade grau");
        } else if (calcula() >= 35 && calcula() < 40) {
            setCondicao("Obesidade grau II (severa)");
        } else {
            setCondicao("Obesidade grau III (mórbida)");
        }
    }
    

    useEffect(() => {
        testarCondicao(); // Chama a função para testar a condição sempre que entrada ou entrada2 mudarem
    }, [entrada, entrada2]);

    return (
        <>
            <div className={styles.container}>
                <h1>Calculadora IMC</h1>
                <form>
                    <input type="number" placeholder="altura(M)" onChange={e => setEntrada(parseFloat(e.target.value))} />
                    <input type="number" placeholder="peso(KG)" onChange={e => setEntrada2(parseFloat(e.target.value))} />
                    <h2>{`O resultado do seu IMC é: ${calcula()}`}</h2>
                </form>
            </div>
                <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Altura</th>
                        <th>Quilos</th>
                        <th>Resultado</th>
                        <th>Condição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{entrada}</td>
                        <td>{entrada2}</td>
                        <td>{calcula()}</td>
                        <td>{condicao}</td>
                    </tr>
                </tbody>
            </table>      
            
        </>
    )
}

export default Formulario;
