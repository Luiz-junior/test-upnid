import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Label, InputText, Button } from '../../components/Form';
import { HomeContainer, Row, Form, FormGroup, Logo } from './styles';

const RACING = gql`
  {
    allRacings {
      id
      pilot
      victories
    }
  }
`;

const CREATE_RACING = gql`
  mutation createRacing($id: ID! $pilot: String! $victories: Int!) {
    createRacing(id: $id, pilot: $pilot, victories: $victories) {
      id
      pilot
      victories
    }
  }
`;

function Home() {
  let history = useHistory();

  const { loading, error, data } = useQuery(RACING);
  const [createRacing] = useMutation(CREATE_RACING);

  let [name, setName] = useState('');

  const onStartGame = e => {
    e.preventDefault();

    if (name !== '') {
      let existingPilot = data.allRacings.filter(item => {
        if(item.pilot == name) 
          history.push('race', { id: item.id, victories: item.victories, newPilot: false });

        return item.pilot == name;
      });

      if (!existingPilot.length) {
        let { id, victories } = data.allRacings[data.allRacings.length - 1];

        createRacing({ variables: { id: parseInt(id) + 1, pilot: name, victories: 0 } })
          .then(() => history.push('race', { id, victories, newPilot: true }))
          .catch(err => console.log(err));
      }
    }
  }

  return (
    <HomeContainer>
      <Row>
        <Logo src="./img/logo-1.png" />
        <Form onSubmit={(e) => onStartGame(e)}>
          <FormGroup>
            <Label>Nome</Label>
            <InputText
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Informe seu nome"
              autoFocus
            />
            <Button>Iniciar Corrida</Button>
          </FormGroup>
        </Form>
      </Row>
    </HomeContainer>
  )
}

export default Home;
