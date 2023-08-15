import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container, Resultado } from './styles'
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

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento = `${
      termo !== undefined && termo?.length > 0 ? `e "${termo}"` : ''
    }`
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio} = ${valor}" ${complemento}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => {
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
