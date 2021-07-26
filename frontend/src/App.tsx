import React from 'react';
import List from './components/List'
import { IData } from './models/Data.interface';


var data1: IData = { no: 1, producer: 'aa', model: 'bb' }
var data2: IData = { no: 2, producer: 'aaa', model: 'bbb' }
var data3: IData = { no: 3, producer: 'aaaa', model: 'bbbb' }

const rows: IData[] = [ data1, data2, data3 ];

function App() {
  return (
    <>
      <List listData={rows}/>
    </>
  );
}

export default App;
