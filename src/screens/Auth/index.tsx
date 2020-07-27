import React, { useState } from 'react';
import {
  Grid,
  Input,
  Form,
  Button,
  Message,
  Image,
} from 'semantic-ui-react';
import { IUser } from '../../interfaces';
import styled from 'styled-components';
import logo from '../../assets/me.png';
import bg from '../../assets/auth.png';

interface IProps {
  callback: Function;
}

const Container = styled(Grid)`
  background: #fff;
  min-height: 100vh;
  padding-bottom: 0 !important;
`;

const BannerColumn = styled(Grid.Column)`
  background: url(${bg}) bottom right no-repeat;
  min-height: 100vh;
  margin: 0 !important;
`;

const Row = styled(Grid.Row)`
  padding-bottom: 0 !important;
`;

const Auth = ({ callback }: IProps) => {
  const { Column } = Grid;
  const { Field } = Form;
  const [toogleViewPass, setToogleViewPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState('');
  const [model, setModel] = useState({} as IUser);

  /**
   * FAKE LOGIN SYSTEM.
   * For testing purposes only.
   */
  const handlerAuth = () => {
    setLoading(true);
    const fixedUserEmail = 'me@email.com';
    const fixedUserPass = '123';

    setTimeout(() => {
      if (model.email === fixedUserEmail && model.password === fixedUserPass) {

        localStorage.setItem('AuthExample', model.email);
        callback(model.email);
        return;
      }

      setLoading(false)
      setError('Email ou senha inválidos. Por favor, tente novemente.');
    }, 2000);
  }

  return (
    <Container
      centered
      verticalAlign="middle"
    >
      <Row>
        <BannerColumn color="orange" only="computer" computer={10} />

        <Column only="computer" computer={1} />

        <Column computer={4} mobile={14}>
          <Image
            centered
            data-cy="logo"
            src={logo}
            size="small"
            alt="It's me!"
          />

          {error && (<Message error size="tiny">
            {error}
          </Message>)}

          <Form onSubmit={handlerAuth}>
            <Field>
              <Input
                fluid
                size="large"
                icon="mail"
                placeholder="E-mail address"
                type="email"
                value={model.email}
                onChange={(event, data) => setModel(prev => ({ ...prev, email: data?.value}))}
                data-cy="input-email"
              />
            </Field>

            <Field>
              <Input
                fluid
                size="large"
                placeholder="password"
                type={toogleViewPass ? 'text' : 'password'}
                labelPosition="right"
                label={<Button
                  icon={toogleViewPass ? 'eye slash' : 'eye'}
                  onClick={() => setToogleViewPass(!toogleViewPass)}
                />}
                onChange={(event, data) => setModel(prev => ({ ...prev, password: data?.value}))}
                data-cy="input-password"
              />
            </Field>

            <Button
              fluid
              color="orange"
              loading={loading}
              disabled={!model.email || !model.password || loading}
              onClick={handlerAuth}
              data-cy="btn-submit"
              >
                Login
            </Button>
          </Form>
        </Column>

        <Column only="computer" computer={1} />
      </Row>
    </Container>
  );
}

export default Auth;