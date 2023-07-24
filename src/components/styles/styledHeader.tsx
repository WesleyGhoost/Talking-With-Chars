import styled from 'styled-components'

export const HeaderContainer = styled.header `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;

  h1 {
    text-align: center;
    color: #fcbe4bf2;
    font-size: 60px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 40px;
    }
  }

  h2 {
    text-align: center;
    color: white;
    margin: 0 10px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 18px;
    }
  }
`