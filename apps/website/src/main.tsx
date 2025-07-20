import React from 'react'
import { Button, Toast } from '@lixiaohupersonal/components'
import { createRoot } from 'react-dom/client';


const App = () => {
    
    return (
        <div>
            <h1>欢迎来到我的网站</h1>
            <Button content="我是按钮， 快点击我" onClick={console.log}/>
            <Toast content="我是Toast提示"/>
        </div>
    )
}

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
