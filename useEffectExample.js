// 10 builtin hooks
// primitives or building blocks
// userSuperPower()
// only call in top level function App() 

// useEffect()
import { useEffect, useState } from 'react';

function App() {

    // what data changes re-render the ui
    const [count, setCount] = useState(0);
    // count -> Reactive Value
    // setCount -> Setter
    // 0 -> default state
    
    
    // useEffect pega como primeiro argumento uma função
    // que eu irei definir. () => {} é um lambda
    useEffect(() => {
        alert("Hello side Effect!")

        return () => alert('goodbye component')
    })
    // quando  o componente for destruido então é so
    // fazer um return


    // vai rodar o side effect depois de atualizar o DOM
    // vai rodar esse toda vez que algo mudar no componente
    // vai rtodar de primeira quando inicializado, com o valor default
    // e depois vai rodar toda vez que o valor for atualizado
    // muitas vezes é preciso ter mais controle no comportamento

    useEffect(() => {
        fetch('foo').then(() => setLoaded(true))
    },
    []
    )
    // [] é o segundo argumento que são as dependencias
    // [count] toda vez que a dependencia mudar ele vai
    // ReRodas essa funcao


    return (
    <> 
    <button onClick={() => setCount(count + 1)}>
        {count}
    </button>
    </>
    );
}











