import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import Tarefa from '../../models/Tarefa'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const novaTarefa = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )

    dispatch(cadastrar(novaTarefa))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa ..."
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => {
            return (
              <S.Opcao key={prioridade}>
                <input
                  value={prioridade}
                  type="radio"
                  name="prioridade"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  onChange={({ target }) =>
                    setPrioridade(target.value as enums.Prioridade)
                  }
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </S.Opcao>
            )
          })}
        </S.Opcoes>

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
