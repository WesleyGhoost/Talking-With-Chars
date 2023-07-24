import styled from 'styled-components'

export const Container = styled.div<{ position: string }> `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${props => `${props.position}`}: 150px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  gap: 45px;
  padding: 12px;
  border-radius: 6px;
  background-color: #ffffff;
  transition: 0.4s;

  @media screen and (min-width: 769px) and (max-width: 1000px) {
    ${props => `${props.position}`}: 0px;
   }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    gap: 20px;
    ${props => `${props.position}`}: 0px;
   }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 95%;
    flex-direction: column;
    padding: 15px;
    gap: 30px;
    ${props => `${props.position}`}: 0px;
  }

  img {
    width: 180px;
    height: 180px;
    border-radius: 10px;

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 120px;
      height: 120px
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 140px;
      height: 140px;
    }

  }

  h2 {

    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 20px   
    }

  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    textarea:first-of-type {
        width: 400px;
        height: 75px;
        background-color: #414141;
        color: #ffffffd0;
        padding: 8px;
        font-size: 15px;
        resize: none;
        border-radius: 5px;

        &::placeholder {
          color: #ffffffd0;
        }

        @media screen and (min-width: 481px) and (max-width: 768px) {
          width: 260px;
          height: 60px;
          font-size: 12px
        }

        @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 300px;
          height: 100px;
        }
    }

    textarea:last-of-type {
        width: 400px;
        height: 75px;
        background-color: #d8d8d8;
        padding: 8px;
        font-size: 15px;
        resize: none;
        border-radius: 5px;

        @media screen and (min-width: 481px) and (max-width: 768px) {
          width: 260px;
          height: 60px;
          font-size: 12px
        }

        @media screen and (min-width: 320px) and (max-width: 480px) {
          width: 300px;
          height: 100px;
        }
    }

    button {
        padding: 8px;
        width: 180px;
        background-color: #00aeff;
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.4s;

        &:hover {
          background-color: #0077ff;         
        }

        @media screen and (min-width: 481px) and (max-width: 768px) {
          width: 140px;
          font-size: 11px
        }
    }
  }
`