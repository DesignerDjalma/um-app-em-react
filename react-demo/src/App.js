import { useState, useRef, useEffect } from 'react';
import TarefasLista from './TarefasLista';
import { v4 } from "uuid";


const LOCAL_STORAGE_KEY = 'tarefasApp.tarefas'

function App() {
  

  const [tarefas, setTarefas] = useState([]);
  const tarefaNomeRef = useRef()
    
  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTarefas) setTarefas(storedTarefas)
    },
    [] // Carrega apenas 1 vez
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tarefas))
  },
  [tarefas] // Dependencias para poder atualizar
  );

  


  function handleAddTarefa(e) {
    
    const nomeTarefa = tarefaNomeRef.current.value
    
    if (nomeTarefa === '') return
    console.log(nomeTarefa)
    tarefaNomeRef.current.value = null
    
    // Set tarefas é a função que vai mudar a lista, 
    // espalhando os valores anteriores que vem nela
    // como items de lista. e retornadno uma lista
    // tipo um append de python
    // com um novo objeto que tem id, nome, que seria
    // o Objeto Tarefa
    setTarefas(tarefasAnteriores => {
      console.log({ id: v4(), nome: nomeTarefa, completa: false})
      return [...tarefasAnteriores, { id: v4(), nome: nomeTarefa, completa: false}]
    })
  }

  return (
    <>
    
    <TarefasLista tarefas={tarefas} />
    <input type="text" ref={tarefaNomeRef}/>
    <button onClick={handleAddTarefa}>Adicionar Tarefa a fazer</button>
    <button>Limpar: Completo</button>
    <div>0 Tarefas Restantes</div>

    </>
  
    );
}

export default App;
