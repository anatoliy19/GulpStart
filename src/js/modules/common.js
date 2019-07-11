import {preloader} from '../utilites/helpers';
import {variables as $v} from '../modules/variables';
import {objectFitFromIe} from "../utilites/helpers";

preloader(350, 450);

$(function () {
	objectFitFromIe();
});