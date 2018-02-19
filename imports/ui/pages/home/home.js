import { Template } from 'meteor/templating';
import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';

Template.App_home.onRendered(function () {
    const instance = this;
    instance.$(function(){
        instance.$('.button-collapse').sideNav();
        instance.$('.parallax').parallax();
    });
});