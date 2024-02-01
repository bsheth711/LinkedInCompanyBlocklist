waitForAndGetElement("#hoverable-outlet-company-filter-value").then( (cur) => {
	console.log(`cur: ${cur}`);
});

function waitForAndGetElement(selector) {
	return new Promise( (resolve) => {
		let ret = document.querySelector(selector);
		if (ret) {
			return resolve(ret);
		}

		const observer = new MutationObserver((mutations) => {
			let ret = document.querySelector(selector);

			if (ret) {
				observer.disconnect();
				return resolve(ret);
			}
		});

		observer.observe(document.body, {subtree: true, childList: true});
	});
}