import React, { useEffect, useState } from 'react';

const ListContacts = () => {
  const store = window?.__STORE__;
  const onDelete = value => {
    store.dispatch({ type: 'REMOVER', value});
    alert('removido com sucesso');
  }

  const [state, setState] = useState(window?.__STORE__.getState());

  store.subscribe(() => setState(window?.__STORE__.getState()));



  return (
    <table>
      <thead>
        <tr>
          <th>Contato</th>
          <th>Excluir</th>
        </tr>
      </thead>
      {state?.contacts && state?.contacts.map(contact => (
        <tr>
          <td>{contact}</td>
          <td><button onClick={() => onDelete(contact)}>Excluir</button></td>
        </tr>))
      }
    </table>
  );
};

export default ListContacts;