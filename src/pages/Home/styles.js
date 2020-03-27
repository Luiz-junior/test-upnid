import styled from 'styled-components';

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: #fff;

@media (min-width: 768px) {
  background: #42a5f5;
}

`;

export const Row = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
border-radius: 5px;
height: 500px;
width: 400px;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 200px;
width: 200px;
`;

export const Logo = styled.img`
height: 150px;
position: relative;
bottom: 20px;
`;