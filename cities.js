"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'default value') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Washington DC', 'America');
describe_city('Dhaka');
