/* Constants */
const DATA_KEY = "companies";

/* scripting */

document.getElementById("save-button").addEventListener("click", saveCompanies);

// loading saved companies
chrome.storage.local.get(["DATA_KEY"]).then((result) => {
	if (result.DATA_KEY != undefined) {
		document.getElementById("company-list").value = result.DATA_KEY;
	}
});

/* functions */
function saveCompanies() {
	let companyList = document.getElementById("company-list").value;
	chrome.storage.local.set({ DATA_KEY: companyList });
}	