import React from 'react';
import List from './components/List'
import DataClass from './models/Data';


function App() {
  const hardcodedData = [
    new DataClass(1, 'aa', 'bb'),
    new DataClass(2, 'aaa', 'bbb'),
    new DataClass(3, 'aaaa', 'bbbb'),
  ];


  return (
    <>
      <List listData={hardcodedData}/>
    </>
  );
}

export default App;
