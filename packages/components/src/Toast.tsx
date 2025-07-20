import React from 'react';

interface IToastProps {
    content: string;
}

const Toast = (props: IToastProps) => {
    return (
        <div className="toast">
            <span>{props.content}</span>
        </div>
    )
}

export default Toast;