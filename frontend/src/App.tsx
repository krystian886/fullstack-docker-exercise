import React, { useEffect, useState } from 'react';
import List from './components/List'
import DataClass from './models/Data';
import ListService from './services/List.service';



function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect( () => {
    const axiosRequest = async () => {
      const response = await ListService.getList();
      setBackendData(response.data);
    }
    axiosRequest();
  }, []);

  const useBackendData: DataClass[] = backendData.map( (data: any) => {
    return new DataClass(data.id, data.title, data.body);
  })

  const useHardcodedData = [
    new DataClass(1, 'aa', 'bb'),
    new DataClass(2, 'aaa', 'bbb'),
    new DataClass(3, 'aaaa', 'bbbb'),
  ];


  return (
    <>
      <List listData={useHardcodedData}/>
      <br/>
      <List listData={useBackendData}/>
    </>
  );
}

export default App;
