import React, { useState } from 'react';
import {
  Form,
  Input,
  FormField,
  Button,
  Icon,
  Card,
  Header
} from 'semantic-ui-react';
import { IUser } from '../../../interfaces';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  border: 1px solid rgba(0,0,0,.1) !important;
  box-shadow: -1px 32px 22px -20px rgba(254,165,5,.2) !important;
  margin-bottom: 50px !important;
`;

interface IProps {
  callback: Function
}

const FormItem = ({callback}: IProps) => {
  const [loading, setLoading] = useState<boolean>();
  const [model, setModel] = useState({} as IUser);

  const handlerRegister = () => {
    setLoading(true);

    /** timeout for... rssrs */
    setTimeout(() => {
      callback(model);
      setLoading(false);
      setModel({ name: '', email: ''});
    }, 1000);
  }

  return (
    <CustomCard fluid>
      <Card.Content>
        <Card.Header>
            <Header as="h3">
              Informe o nome e o e-mail do usuário
            </Header>
        </Card.Header>
      </Card.Content>

      <Card.Content>
        <Form onSubmit={handlerRegister}>
          <Form.Group widths="equal">
            <FormField>
              <Input
                fluid
                size="large"
                icon="user"
                placeholder="Nome do usuário"
                value={model.name}
                onChange={(event, data) => setModel(prev => ({ ...prev, name: data?.value}))}
              />
            </FormField>

            <FormField>
              <Input
                fluid
                size="large"
                icon="mail"
                placeholder="Endereço de E-mail"
                type="email"
                value={model.email}
                onChange={(event, data) => setModel(prev => ({ ...prev, email: data?.value}))}
              />
            </FormField>

            <Button
              icon
              fluid
              color="orange"
              labelPosition="left"
              loading={loading}
              disabled={!model.name || !model.email || loading}
              onClick={handlerRegister}
            >
              <Icon name="send" />
              Registrar
            </Button>
          </Form.Group>
        </Form>
      </Card.Content>
    </CustomCard>
  );
}

export default FormItem;
