import {preloader} from '../utilites/helpers';
import {variables as $v} from '../modules/variables';
import {getRandomInt} from '../utilites/helpers';
import {globalWrapper} from "../utilites/helpers";
import {objectFitFromIe} from "../utilites/helpers";

preloader();

$(function () {

	globalWrapper();
	objectFitFromIe();

	console.log(getRandomInt(0, 10));
	console.log(getRandomInt(0, 10));
	console.log($v);
});