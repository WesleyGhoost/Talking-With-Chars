import styled from 'styled-components'

export const WarningContainer = styled.div<{display: string}> `
   width: 60%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   background-color: #fffffff4;
   padding: 20px 0 15px 0;
   border-radius: 8px;

   @media screen and (min-width: 769px) and (max-width: 1200px) {
      width: 75%;
   }

   @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 100%;
   }

   @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 350px;
   }

   p {
      text-align: start;
      font-size: 14px;
      max-width: 90%;

      a {
         display: inline-block;
      }
   }

   a {
      font-size: 14px;
      display: ${props => `${props.display}`};
   }

   iframe {
      display: ${props => `${props.display}`};

      @media screen and (min-width: 320px) and (max-width: 480px) {
         width: 330px;
         height: 200px;
      }
   }

`