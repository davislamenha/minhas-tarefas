import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
list-style: none;
text-decoration: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
