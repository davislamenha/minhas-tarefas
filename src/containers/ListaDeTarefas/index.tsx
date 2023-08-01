import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => {
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
