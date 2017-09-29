import '../stylesheets/main.scss';
import { hello } from './main.js';


const consoleLog = () => {
	alert('working!')
}

hello.addEventListener('click', consoleLog);