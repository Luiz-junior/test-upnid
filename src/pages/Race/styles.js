import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: top;
  background-size: 100vh;
  position: relative;
  height: 100vh;

  @media (min-width: 425px) {
    background-size: 100vh;
  }

  @media (min-width: 768px) {
    width: 600px; 
  }

  .movieControls {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      display: none;
    }

    #btnLeft {
      position: relative;
      left: 10px;
    }

    #btnRight {
      position: relative;
      right: 10px;
    }
  }

  .menuMobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
  }

  .numberLaps {
    > span {
      font-weight: bold;
      font-size: 30px;
      color: #444;
    }
  }

  .totalVictories {
    font-size: 13px;
    font-weight: bold;
    color: #42a5f5;
    margin-bottom: 10px;

    > b {
      color: #444;
    }
  }
`;

export const Car = styled.img`
  height: 150px;
  margin-top: 250px;
  transition: ease-out all 0.6s;
  margin-left: ${props => props.moveToLeft}px;
  margin-right: ${props => props.moveToRight}px;
  display: ${props => props.displayCar};

  @media (min-width: 768px) {
    height: 200px;
    margin-top: 250px;
  }
`;

export const Start = styled.img`
  display: ${props => props.displayStart};
`;

export const Pause = styled.img`
  position: absolute;
  height: 100px;
  display: ${props => props.displayPause};
`;

export const WinMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  animation-name: win;
  animation-duration: 3s;
  position: absolute;
  top: 100px;
  text-align: center;
  color: #fff;
  display: ${props => props.displayWin};
  text-shadow: 2px 2px 8px blue;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @keyframes win {
    50%{ font-size: 40px; };
  }
`;