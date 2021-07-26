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
    return new DataClass(data.dataId, data.producer, data.model);
  })

  const useHardcodedData = [
    new DataClass(1, 'aa', 'bb'),
    new DataClass(2, 'aaa', 'bbb'),
    new DataClass(3, 'aaaa', 'bbbb'),
  ];


  return (
    <>
      <h3>Hardcoded data:</h3>
      <hr/><br/>
      <List listData={useHardcodedData}/>
      <br/>
      <h3>Backend data:</h3>
      <hr/><br/>
      <List listData={useBackendData}/>
    </>
  );
}

export default App;
