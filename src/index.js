import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { WalletsContexts } from './contexts/walletContext';

ReactDOM.render(
    <WalletsContexts>
        <App/>
    </WalletsContexts>, document.getElementById('root'));