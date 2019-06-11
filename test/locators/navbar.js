'use strict';

let constants = {
    navBarMenuItems: "#menu > li.ant-menu-item",
    homeNavLink: "#menu > li:nth-child(2) > a",
    listingNavLink: "#menu > li:nth-child(4) > a",
    aboutNavLink:"#menu > li:nth-child(6) > a",
    reviewsNavLink:"#menu > li:nth-child(8) > a",
    contactNavLink:"#menu > li:nth-child(10) > a",

};

module.exports = Object.freeze(constants); // freeze prevents changes by users