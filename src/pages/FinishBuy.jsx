import React from 'react';

export default class FinishBuy extends React.Component {
  render() {
    return (
      <div>
        <h3>Informações do Comprador</h3>
        Nome Completo:
        <input
          type="text"
          id="name"
          data-testid="checkout-fullname"
          onChange={ this.handleChange }
        />
        E-mail:
        <input
          type="email"
          id="email"
          data-testid="checkout-email"
          onChange={ this.handleChange }
        />
        CPF:
        <input
          type="text"
          id="cpf"
          data-testid="checkout-cpf"
          onChange={ this.handleChange }
        />
        Celular:
        <input
          type="text"
          id="phone"
          data-testid="checkout-phone"
          onChange={ this.handleChange }
        />
        CEP:
        <input
          type="text"
          id="cep"
          data-testid="checkout-cep"
          onChange={ this.handleChange }
        />
        Endereço:
        <input
          type="text"
          id="adress"
          data-testid="checkout-address"
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}
