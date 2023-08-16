import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Javascript',
      prioridade: Prioridade.IMPORTANTE,
      status: Status.PENDENTE,
      descricao: ''
    },
    {
      id: 2,
      titulo: 'Estudar Typescript',
      prioridade: Prioridade.URGENTE,
      status: Status.CONCLUIDA,
      descricao: 'Rever aula do modulo 2'
    },
    {
      id: 3,
      titulo: 'Estudar React',
      prioridade: Prioridade.URGENTE,
      status: Status.PENDENTE,
      descricao: 'Praticar o useEffect'
    },
    {
      id: 4,
      titulo: 'Estudar Bootstrap',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Criar uma landpage'
    }
  ]
}

export const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((t) => t.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (tarefaIndex >= 0) {
        state.itens[tarefaIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaExiste = state.itens.find(
        ({ titulo }) => titulo.toLocaleLowerCase() === action.payload.titulo
      )

      if (tarefaExiste) alert('Já existe uma tarefa com este título')
      else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
