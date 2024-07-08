import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 16px;
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 16px;
  cursor: pointer;
`
