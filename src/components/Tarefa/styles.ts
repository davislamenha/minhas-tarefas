import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Prioridade, Status } from '../../utils/enums/Tarefa'

type TagProps = {
  prioridade?: Prioridade
  status?: Status
  parametro: 'status' | 'prioridade'
}

const corDeFundo = (props: TagProps): string => {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === Prioridade.IMPORTANTE) return variaveis.amarelo2
  } else {
    if (props.status === Status.PENDENTE) return variaveis.amarelo
    if (props.status === Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => corDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  display: block;
  width: 100%;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin: 16px 0;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
