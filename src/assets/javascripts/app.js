import 'jquery';
import '../stylesheets/main.scss';
import '../../vendor/stylesheets/simplecss.css';
import { hello } from './main.js';
import '../../profile.html';

const consoleLog = () => {
	alert('working!')
}

$('body').on('click', hello, consoleLog)