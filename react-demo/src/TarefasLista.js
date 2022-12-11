import React from 'react'
import Tarefa from './Tarefa'

export default function TarefasLista({ tarefas }) {
  return (

        tarefas.map(tarefa => {
          return <Tarefa key={tarefa.id} tarefa={tarefa} />
        })

  )
}
