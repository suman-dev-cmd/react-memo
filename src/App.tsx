import React,{useState,useMemo,useCallback} from 'react'
import Button from './components/button/Button';
import Department from './components/department/Department';
import Employee from './components/employee/Employee';

const App:React.FC = () => {
  const [name, setName] = useState<string>('Ram Shaoo');
  const [department, setDepartment] = useState<string>('Back End');
  const [count, setCount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  console.log('home');
  //useCallBack Implement
  const handleChange =useCallback(()=>{
    setName('Suman Jana');
  },[name]);

  const handleDepartChange=useCallback(()=>{
    setDepartment('Front-End');
  },[department]);
  
  //useMemo Impletement
  const isOk=useMemo(()=>{
    console.log('ok checking');
    return count>5?true:false;
  },[count])
  return (
    <div>
       <Employee name={name}/>
       <br />
      <Button onChange={handleChange}>Update Employee Name</Button>
      <br />
      <br />
      <Department department={department}/>
      <br />
      <Button onChange={handleDepartChange}>Update Employee Department</Button>
      <br />
      <br />
      <span>{isOk?'yes':'No'}</span>
      <br/>
      <button onClick={()=>setCount(count+1)}>Count-{count}</button>
      <br/>
      <button onClick={()=>setPrice(price+1)}>Price-{price}</button>
    </div>
  )
}

export default App;
