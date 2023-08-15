import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(({ titulo }) => {
        return titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      })
    }

    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        ({ prioridade }) => prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        ({ status }) => status === valor
      )
    }

    return tarefasFiltradas
  }
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtraTarefas().map((t) => {
          return (
            <li key={t.titulo}>
              <Tarefa
                titulo={t.titulo}
                descricao={t.descricao}
                status={t.status}
                prioridade={t.prioridade}
                id={t.id}
              />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
