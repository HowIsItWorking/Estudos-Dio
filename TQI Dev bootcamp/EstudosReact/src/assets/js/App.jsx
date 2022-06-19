/* AQUI É ONDE A MAGICA ACONTECE B) */

import React, { Component } from "react";
import reactDom from "react-dom";
import Mock from "./mock";

const buttonB = <button>Cadastrar Cliente</button>;

var hasCustomer = (Mock.length > 0) ? true : false;

const renderShowHistory = () => (

  <div>
    Clique no botão abaixo para visualizar o historico dos clientes
    <br />
    {showCustomers()}
  </div>
);

const renderAddCustomer = () => (
  <div>
    Cliente Abaixo para Cadastrar o cliente.
    <br />
    {buttonB}
  </div>
);

const renderCustomers = (customer, index) => {
  
  const handleDelete = () => {
    const ulElemList = document.getElementById("client-list-container");
    const liListItens = document.querySelectorAll("#client-list-container div");
    ulElemList.removeChild(liListItens.item(customer));
    Mock.splice(Mock.indexOf(customer), 1 );
    console.log(hasCustomer);
    console.log(Mock.length);
   /*  alert(`Id do cliente: ${customer.id}`); */
  }

  return (
    /* ! Sempre tenha chaves unicas entre elementos filhos para evitar problemas!!! */
    <div key={`customer-${customer.id}`}>
      <li><button onClick={handleDelete}>Deletar cliente</button> {customer.name} </li>
      
      {customer.skills.map(renderSkills)} 
    </div>
  )
};

const renderSkills = (skill, index) => {
  return (
    <div key={`skill-${index}`}>
      <li>{skill}</li>
    </div>
  )
};

const showCustomers = () => {

  if (!hasCustomer) return null;
  
  const handleClick = () => {
    const history = document.getElementById("historico");
    return (
      history.style.display = "block"
    );
  };

  const buttonA = <button onClick={handleClick}>Historico dos clientes</button>;
  
  return (
    <div>
      {buttonA}
      <div id="historico">
        <h2>Historico de Cliente:</h2>
       <div>
          <ul id="client-list-container">
            {Mock.map(renderCustomers)}
         </ul>
       </div>
      </div>
    </div>
  )
};

const App = () => {
  var checkCustomer = () => {
    while (customers.length > 0) {
      return hasCustomer = true;
    }
    return hasCustomer = false;
  }
  (async () => {
    await checkCustomer(); 
  })
  console.log(hasCustomer);
  
  return (
    <div className="title-container">
      <h1>DIO!</h1>
      <p>Hello world!</p>
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
    </div>
  )
};

export default App;