url = ["https://www.bing.com/search?q=Algeria",
"https://www.bing.com/search?q=Afghanistan",
"https://www.bing.com/search?q=Albania",
"https://www.bing.com/search?q=Angola",
"https://www.bing.com/search?q=Andorra",
"https://www.bing.com/search?q=Antigua & Barbuda",
"https://www.bing.com/search?q=Anguilla",
"https://www.bing.com/search?q=Armenia",
"https://www.bing.com/search?q=Argentina",
"https://www.bing.com/search?q=Austria",
"https://www.bing.com/search?q=Australia",
"https://www.bing.com/search?q=Bahamas",
"https://www.bing.com/search?q=Azerbaijan",
"https://www.bing.com/search?q=Bangladesh",
"https://www.bing.com/search?q=Bahrain",
"https://www.bing.com/search?q=Belarus",
"https://www.bing.com/search?q=Barbados",
"https://www.bing.com/search?q=Belize",
"https://www.bing.com/search?q=Belgium",
"https://www.bing.com/search?q=Bermuda",
"https://www.bing.com/search?q=Benin",
"https://www.bing.com/search?q=Bolivia",
"https://www.bing.com/search?q=Bhutan",
"https://www.bing.com/search?q=Botswana",
"https://www.bing.com/search?q=Bosnia & Herzegovina",
"https://www.bing.com/search?q=Brunei Darussalam",
"https://www.bing.com/search?q=Brazil",
"https://www.bing.com/search?q=Burkina Faso",
"https://www.bing.com/search?q=Bulgaria",
"https://www.bing.com/search?q=Cambodia",
"https://www.bing.com/search?q=Burundi",
"https://www.bing.com/search?q=Canada",
"https://www.bing.com/search?q=Cameroon",
"https://www.bing.com/search?q=Cayman Islands",
"https://www.bing.com/search?q=Cape Verde",
"https://www.bing.com/search?q=Chad",
"https://www.bing.com/search?q=Central African Republic",
"https://www.bing.com/search?q=China",
"https://www.bing.com/search?q=Chile",
"https://www.bing.com/search?q=Colombia",
"https://www.bing.com/search?q=China - Hong Kong / Macau",
"https://www.bing.com/search?q=Congo",
"https://www.bing.com/search?q=Comoros",
"https://www.bing.com/search?q=Costa Rica",
"https://www.bing.com/search?q=Congo, Democratic Republic of (DRC)",
"https://www.bing.com/search?q=Cuba",
"https://www.bing.com/search?q=Croatia",
"https://www.bing.com/search?q=Czech Republic",
"https://www.bing.com/search?q=Cyprus",]
   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function NewTab() {
    for (let i = 0; i < 36; i++) {
		openedWindow = window.open(url[i], '_blank');
		await sleep(4000);
        	closeWin();
    }
}
function closeWin() {
	openedWindow.close()
}