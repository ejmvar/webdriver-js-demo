import { By as by } from 'selenium-webdriver';
import config from 'config';
import BasePage from './base-page';
import './webdriver-helper';

export default class WebDriverJsLeavePage extends BasePage {
	constructor( driver, visit = false ) {
		super( driver, by.css( '#leavepage' ), visit, `${config.get( 'demoURL' )}/leave` );
	}
	navHome() {
		//this.driver.findElement( by.css( '#homelink' ) ).click();
		this.driver.clickWhenClickable( by.css( '#homelink' ) );
		return this.driver.switchTo().alert().then( function( alert ) {
			return alert.accept();
		} );
	}
}
