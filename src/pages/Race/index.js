import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql, } from 'apollo-boost';
import { useHistory } from 'react-router-dom';

import { BtnControl, BtnMenu } from '../../components/Form';
import { Container, Car, Start, Pause, WinMessage } from './styles';

const GET_RACING = gql`
  query Racing($id: ID!) {
      Racing(id: $id) {
        id
        pilot
        victories
      }
    } 
`;

const UPDATE_RACING = gql`
  mutation updateRacing($id: ID!, $victories: Int) {
    updateRacing(id: $id, victories: $victories ) {
      id
      pilot
      victories
    }
  }
`;

function Race(props) {
  let history = useHistory();

  let { id, newPilot } = props.location.state;
  let currentID = parseInt(id) + 1;

  const [updateRacing] = useMutation(UPDATE_RACING);
  const { loading, error, data } = useQuery(GET_RACING, { variables: { id } });

  let [moveToLeft, setMoveToLeft] = useState(0);
  let [moveToRight, setmoveToRight] = useState(0);
  /* let [displayCar, setDisplayCar] = useState('none'); */
  let [displayCar, setDisplayCar] = useState('none');
  let [displayStart, setDisplayStart] = useState('block');
  let [changeBackground, setChangeBackground] = useState('./img/back-stoped.png');
  /* let [changeBackground, setChangeBackground] = useState('./img/CENARIO_anima.gif'); */
  let [displayPause, setDisplayPause] = useState('none');
  let [numberLaps, setNumberLaps] = useState(0);
  let [displayWin, setDisplayWin] = useState('none');

  useEffect(() => {
    setTimeout(() => {
      setDisplayCar('block');
      setDisplayStart('none');
      setChangeBackground('./img/CENARIO_anima.gif');
    }, 5000);
  }, []);

  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      if (numberLaps < 3)
        setNumberLaps(numberLaps + 1);
      else {
        setChangeBackground('./img/back-stoped.png');
        setDisplayWin('block');

        if (!loading) {
          let oltVictorie = data.Racing.victories;
          let current = oltVictorie + 1;

          if (newPilot) {
            updateRacing({ variables: { id: currentID, victories: current } })
              .then(() => setTimeout(() => history.push('/'), 3000))
              .catch(err => console.log('erro', err));
          } else {
            updateRacing({ variables: { id, victories: current } })
              .then(() => setTimeout(() => history.push('/'), 3000))
              .catch(err => console.log('erro', err));
          }
        }

        clearTimeout(timer);
      }

    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberLaps]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'a':
          setMoveToLeft(-200);
          break;
        case 's':
          setMoveToLeft(0);
          setmoveToRight(0);
          break;
        case 'd':
          setmoveToRight(-200);
          break;
        case 'ArrowLeft':
          setMoveToLeft(-200);
          setmoveToRight(0);
          break;
        case 'ArrowRight':
          setmoveToRight(-200);
          setMoveToLeft(0);
          break;
        case 'PageUp':
          setChangeBackground('./img/back-stoped.png');
          setDisplayPause('block');
          break;
        case 'PageDown':
          setChangeBackground('./img/CENARIO_anima.gif');
          setDisplayPause('none');
          break;
        case 'End':
          setChangeBackground('./img/back-speed.gif');

          setTimeout(() => {
            setChangeBackground('./img/CENARIO_anima.gif');
            setDisplayPause('none');
          }, 4000);
          break;
        default:
          break;
      }
    });
  });

  const onMovieLeft = () => {
    setMoveToLeft(-200);
    setmoveToRight(0);
  }

  const onMovieRight = () => {
    setmoveToRight(-200);
    setMoveToLeft(0);
  }

  const onPause = () => {
    setChangeBackground('./img/back-stoped.png');
    setDisplayPause('block');
  }

  const onPlay = () => {
    setChangeBackground('./img/CENARIO_anima.gif');
    setDisplayPause('none');
  }

  const onTurbo = () => {
    setChangeBackground('./img/back-speed.gif');

    setTimeout(() => {
      setChangeBackground('./img/CENARIO_anima.gif');
      setDisplayPause('none');
    }, 4000);
  }

  return (
    <Container background={changeBackground} >
      <div className="menuMobile">
        <BtnMenu onClick={() => onPause()}>Pause</BtnMenu>
        <BtnMenu onClick={() => onPlay()}>Play</BtnMenu>
        <BtnMenu onClick={() => onTurbo()}>Turbo</BtnMenu>
        <div className="totalVictories">
          Victories: <b>{!loading ? data.Racing.victories : 0}</b>
        </div>
      </div>

      <div className="numberLaps">
        <span>{numberLaps}</span>
      </div>

      <WinMessage displayWin={displayWin}>
        <h1>Você ganhou!!</h1>
      </WinMessage>

      <Car
        src="img/CARRO.png"
        alt="Carro"
        moveToLeft={moveToLeft}
        moveToRight={moveToRight}
        displayCar={displayCar}
      />
      <Pause src="img/pause.png" displayPause={displayPause} />
      <Start src="img/start.gif" displayStart={displayStart} />
      <div className="movieControls">
        <BtnControl onClick={() => onMovieLeft()} id="btnLeft">
          <img src="./img/arrow-left.png" alt="Esquerda" className="img-arrow-left" />
        </BtnControl>
        <BtnControl onClick={() => onMovieRight()} id="btnRight">
          <img src="./img/arrow-right.png" alt="Direita" className="img-arrow-right" />
        </BtnControl>
      </div>
    </Container>
  );
}

export default Race;
