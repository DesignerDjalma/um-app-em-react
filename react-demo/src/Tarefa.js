import React from 'react'

export default function Tarefa({ tarefa }) {
  return (
    <div>
        <label>
            <input type="checkbox" checked={tarefa.completa} />
            <h3>{tarefa.nome}</h3>
        </label>
    </div>
  )
}
