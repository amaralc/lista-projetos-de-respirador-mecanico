import React, { Component } from 'react';

export default class Bank extends Component {
  state = {
    titular: 'Rafael Gomes Nunes Silva',
    agencia: '1453-2',
    conta: '60818-1',
  };

  handleSubmit = async (e) => {
    const x = document.getElementById('mySelect').value;
    if (x == 'NuBank') {
      this.setState({
        titular: 'Calil Amaral',
        agencia: '0001',
        conta: '21120-1',
      });
    }
  };

  render() {
    const { titular, agencia, conta } = this.state;
    return (
      <>
        <address>
          <strong>Banco:</strong>
          <select id="mySelect" onChange={this.handleSubmit}>
            <option value="Banco do Brasil">Banco do Brasil (001)</option>
            <option value="NuBank">NuBank (000)</option>
            <option value="Caixa Econômica Federal">
              Caixa Econômica Federal (024)
            </option>
          </select>
          <br />
          <strong>Titular:</strong>
          {titular}
          <br />
          <strong>Agência:</strong>
          {agencia}
          <br />
          <strong>Conta corrente:</strong>
          {conta}
          <br />
          <br />
          Entre em contato caso precise do nº do CPF:
          <br />
          <abbr title="Phone">
            <strong>WhatsApp:</strong>
          </abbr>
          +55 (48) 99800-6530
        </address>
      </>
    );
  }
}
