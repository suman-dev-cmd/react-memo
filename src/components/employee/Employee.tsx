import React,{memo} from 'react'
interface IEmpProps{
    name:string,
    roll:number
}
const Employee = ({name}:Partial<IEmpProps>) => {
    console.log('employee');
    return (
        <div>
            Name:<h2>{name}</h2>
        </div>
    )
}

export default memo(Employee);
