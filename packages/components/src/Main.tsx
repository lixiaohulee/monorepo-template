import Button from "./Button";
import Toast from "./Toast";


import { createRoot } from 'react-dom/client';


const App = () => {
    
    return (
        <div>
            <h1>I Am The App</h1>
            <Button content="我是按钮， 快点击我" onClick={console.log}/>
            <Toast content="我是Toast提示"/>
        </div>
    )
}

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
