// 10 builtin hooks
// primitives or building blocks
// userSuperPower()
// only call in top level function App() 

// useEffect()
import { useRef } from 'react';

function App() {

    
    // Consegue criar um objeto mutavel que continua
    // sempre com a mesma referencia, entre renders
    // com um valor que mudar tipo um setState, mas nao
    // faz o reRender
    // setState faz o ReRender
    // Usar ele é bom pra pegar elementos HTML do DOM
    // por exemplo pegar Butões

    // Criamos uma referencia null chamada meuBtn
    // E conectar ele com uma tag button ref={meuBtn}

    const meuBtn = useRef(null);
    
    // Depois referenciar o btnHtml com uma função
    // que puxa funções DOM (click)
    const clica = () => meuBtn.current.click()

    return (
        <button ref={meuBtn}></button>
    );
}











