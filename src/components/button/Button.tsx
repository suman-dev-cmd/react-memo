import React,{memo} from 'react'
interface IButtonProps{
    onChange:()=>void;
    children:React.ReactNode
}
const Button = ({onChange,children}:IButtonProps) => {
    console.log('button',children);
    return (
        <button onClick={onChange}>{children}</button>
    )
}

export default memo(Button);
