import React from 'react';
import TableView from './TableView';
import './index.css';

const App = () => {
  const data = [
    { ID: 1, Name: 'IRFAN', Age: 100000 },
    { ID: 2, Name: 'ABCD', Age: 21 },
    { ID: 3, Name: 'LKMG', Age: 25 },
    { ID: 4, Name: 'ASWY', Age: 22 },
    { ID: 5, Name: 'LSAG', Age: 20 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
        Array of Objects-Table View
      </h1>
      <TableView data={data} />
    </div>
  );
};

export default App;
