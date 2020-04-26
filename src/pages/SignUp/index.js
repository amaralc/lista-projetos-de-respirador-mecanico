import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Wrapper, Content } from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/hipeerlab.ico';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'O password deve ter 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <div className="container">
        <Wrapper>
          <Content>
            <img src={logo} alt="hipeerLab" />
            <Form schema={schema} onSubmit={handleSubmit}>
              <h5>Crie sua conta</h5>
              <Input name="name" placeholder="Nome completo" />
              <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <Input
                name="password"
                type="password"
                placeholder="Digite sua senha"
              />
              <small>Sua senha deve ter ao menos 6 caracteres.</small>
              <button type="submit">Acessar</button>
              <Link to="/signin">Já sou cadastrado</Link>
            </Form>
          </Content>
        </Wrapper>
      </div>
    </>
  );
}
