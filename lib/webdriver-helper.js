import webdriver from 'selenium-webdriver';
import config from 'config';

const explicitWaitMS = config.get( 'explicitWaitMS' );

webdriver.WebDriver.prototype.clickWhenClickable = function( selector, waitOverride ) {
	const timeoutWait = waitOverride ? waitOverride : explicitWaitMS;
	const self = this;

	return self.wait( function() {
		return self.findElement( selector ).then( function( element ) {
			return element.click().then( function() {
				return true;
			}, function() {
				return false;
			} );
		}, function() {
			return false;
		} );
	}, timeoutWait, `Timed out waiting for element with ${selector.using} of '${selector.value}' to be clickable` );
};
