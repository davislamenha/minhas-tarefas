import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      ({ titulo }) =>
        titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
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
