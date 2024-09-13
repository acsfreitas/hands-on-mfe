import React from 'react';

const Add = () => {
  const store = window?.__STORE__;

  const onClick = () => {
    const contato = document.getElementById("contato");
    store.dispatch({ type: 'ADICIONAR', value: contato.value});
    contato.value = '';
    alert('Contato adicionado com sucessso');
  }

  return (
    <div>
      <span>Contato</span>
      <input type='text' id="contato" placeholder='Digite o contato' />
      <button onClick={onClick}>Adicionar</button>
    </div>
  );
};

export default Add;
