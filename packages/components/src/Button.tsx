import React from 'react';

interface IButtonProps {
    content: string;
    onClick: () => void;
}

const Button = (props: IButtonProps) => {

    React.useEffect(() => {
        console.log('Button Mounted')

        return () => {
            console.log('Button Unmounted')
        }
    }, [])

    return (
        <div className="btn-wrap" style={{ width: 100, height: 50, backgroundColor: "red"}} onClick={props.onClick}>
          <span>{props.content}</span>
        </div>
    )
}

export default Button;