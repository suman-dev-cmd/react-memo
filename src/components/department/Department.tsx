import React,{memo} from 'react'
interface IdepartmentProps{
    department:string
}
const Department = ({department}:IdepartmentProps) => {
    console.log('Department');
    return (
        <div>
            Department:<h1>{department}</h1>
        </div>
    )
}

export default memo(Department);
