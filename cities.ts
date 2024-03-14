import { describe } from "node:test";

function describe_city(city: string , country: string = 'default value'){
    console.log(`${city} is in ${country}`);
}

describe_city('Karachi', 'Pakistan');
describe_city('Washington DC', 'America');
describe_city('Dhaka',);