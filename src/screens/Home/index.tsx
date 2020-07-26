import React, { memo, useState } from 'react';
import {
  Container,
  Grid,
  Table,
  Card,
  Header,
  Icon
} from 'semantic-ui-react';
import FormItem from './Form';
import { IUser } from '../../interfaces';
import { MainHeader, Title } from './styles';
import RowItem from './RowItem';

interface IState extends IUser {
  active?: boolean;
}

const Home = () => {
  const { Column, Row } = Grid;
  const [state, setState] = useState([
    { name: 'Leanne Graham', email: 'sincere@april.biz' },
    { name: 'Ervin Howell', email: 'hanna@melissa.tv' },
    { name: 'Clementine Bauch', email: 'nathan@yesenia.net' },
    { name: 'Patricia Lebsack', email: 'julianne.OConner@kory.org' },
    { name: 'Chelsey Dietrich', email: 'lucio_Hettinger@annie.ca' }
  ] as IState[]);

  const removeItem = ({ email}: IState) => {
    setState(prev => prev.filter(state => state.email !== email));
  }

  const addItem = ({ name, email}: IState) => {
    setState(prev => [ { name, email }, ...prev]);
  }

  return (
    <>
      <MainHeader { ...{centered: true}}>
        <Row>
          <Column computer={11} mobile={15}>
            <Title as="h1">Registros</Title>:
          </Column>
        </Row>
      </MainHeader>

      <Container>
        <Grid centered>
          <Row>
            <Column computer={16} mobile={15}>
              <FormItem callback={addItem} />

              <Header as="h2">Usuários</Header>
              <Card fluid>
                <Card.Content>
                  <Table padded selectable basic="very" size="large">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell><small>Nome</small></Table.HeaderCell>
                        <Table.HeaderCell><small>E-mail</small></Table.HeaderCell>
                        <Table.HeaderCell textAlign="right"><small>Remover</small></Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {!state.length && <Table.Row negative>
                        <Table.Cell
                          textAlign="center"
                          {...{ colspan: 3}}
                        >
                          <Icon name="user times" />
                          Não há usuários registrados no momento
                        </Table.Cell>
                      </Table.Row>}

                      {state.map((item, key) => (
                        <RowItem
                          key={key}
                          warning={key % 2 !== 0}
                          item={item}
                          onRemove={() => removeItem(item)}
                        />
                      ))}
                    </Table.Body>
                  </Table>
                </Card.Content>
              </Card>
            </Column>
          </Row>
        </Grid>

      </Container>
    </>
  );
}

export default memo(Home);
