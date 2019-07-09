import {preloader} from '../utilites/helpers';
import {variables as $v} from '../modules/variables';
import {globalWrapper} from "../utilites/helpers";
import {objectFitFromIe} from "../utilites/helpers";

preloader();

$(function () {

	globalWrapper();
	objectFitFromIe();
});