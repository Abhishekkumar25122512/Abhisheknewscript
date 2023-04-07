const url = [
	"https://www.bing.com/search?q=Afghanistan",
	"https://www.bing.com/search?q=Albania",
	"https://www.bing.com/search?q=Algeria",
	"https://www.bing.com/search?q=Andorra",
	"https://www.bing.com/search?q=Angola",
	"https://www.bing.com/search?q=Antigua%20and%20Barbuda",
	"https://www.bing.com/search?q=Argentina",
	"https://www.bing.com/search?q=Armenia",
	"https://www.bing.com/search?q=Australia",
	"https://www.bing.com/search?q=Austria",
	"https://www.bing.com/search?q=Azerbaijan",
	"https://www.bing.com/search?q=The%20Bahamas",
	"https://www.bing.com/search?q=Bahrain",
	"https://www.bing.com/search?q=Bangladesh",
	"https://www.bing.com/search?q=Barbados",
	"https://www.bing.com/search?q=Belarus",
	"https://www.bing.com/search?q=Belgium",
	"https://www.bing.com/search?q=Belize",
	"https://www.bing.com/search?q=Benin",
	"https://www.bing.com/search?q=Bhutan",
	"https://www.bing.com/search?q=Bolivia",
	"https://www.bing.com/search?q=Bosnia%20and%20Herzegovina",
	"https://www.bing.com/search?q=Botswana",
	"https://www.bing.com/search?q=Brazil",
	"https://www.bing.com/search?q=Brunei",
	"https://www.bing.com/search?q=Bulgaria",
	"https://www.bing.com/search?q=Burkina%20Faso",
	"https://www.bing.com/search?q=Burundi",
	"https://www.bing.com/search?q=Cabo%20Verde",
	"https://www.bing.com/search?q=Cambodia",
	"https://www.bing.com/search?q=Cameroon",
	"https://www.bing.com/search?q=Canada",
	"https://www.bing.com/search?q=Central%20African%20Republic",
	"https://www.bing.com/search?q=Chad",
	"https://www.bing.com/search?q=Chile",
	"https://www.bing.com/search?q=China",
	"https://www.bing.com/search?q=Colombia",
	"https://www.bing.com/search?q=Comoros",
	"https://www.bing.com/search?q=Democratic%20Republic%20of%20the%20Congo",
	"https://www.bing.com/search?q=Republic%20of%20the%20Congo",
	"https://www.bing.com/search?q=Costa%20Rica",
	"https://www.bing.com/search?q=Côte%20d’Ivoire",
	"https://www.bing.com/search?q=Croatia",
	"https://www.bing.com/search?q=Cuba",
	"https://www.bing.com/search?q=Cyprus",
	"https://www.bing.com/search?q=Czech%20Republic",
	"https://www.bing.com/search?q=Denmark",
	"https://www.bing.com/search?q=Djibouti",
	"https://www.bing.com/search?q=Dominica",
	"https://www.bing.com/search?q=Dominican%20Republic",
	"https://www.bing.com/search?q=East%20Timor%20(Timor-Leste)",
	"https://www.bing.com/search?q=Ecuador",
	"https://www.bing.com/search?q=Egypt",
	"https://www.bing.com/search?q=El%20Salvador",
	"https://www.bing.com/search?q=Equatorial%20Guinea",
	"https://www.bing.com/search?q=Eritrea",
	"https://www.bing.com/search?q=Estonia",
	"https://www.bing.com/search?q=Eswatini",
	"https://www.bing.com/search?q=Ethiopia",
	"https://www.bing.com/search?q=Fiji",
	"https://www.bing.com/search?q=Finland",
	"https://www.bing.com/search?q=France",
	"https://www.bing.com/search?q=Gabon",
	"https://www.bing.com/search?q=The%20Gambia",
	"https://www.bing.com/search?q=Georgia",
	"https://www.bing.com/search?q=Germany",
	"https://www.bing.com/search?q=Ghana",
	"https://www.bing.com/search?q=Greece",
	"https://www.bing.com/search?q=Grenada",
	"https://www.bing.com/search?q=Guatemala",
	"https://www.bing.com/search?q=Guinea",
	"https://www.bing.com/search?q=Guinea-Bissau",
	"https://www.bing.com/search?q=Guyana",
	"https://www.bing.com/search?q=Haiti",
	"https://www.bing.com/search?q=Honduras",
	"https://www.bing.com/search?q=Hungary",
	"https://www.bing.com/search?q=Iceland",
	"https://www.bing.com/search?q=India",
	"https://www.bing.com/search?q=Indonesia",
	"https://www.bing.com/search?q=Iran",
	"https://www.bing.com/search?q=Iraq",
	"https://www.bing.com/search?q=Ireland",
	"https://www.bing.com/search?q=Israel",
	"https://www.bing.com/search?q=Italy",
	"https://www.bing.com/search?q=Jamaica",
	"https://www.bing.com/search?q=Japan",
	"https://www.bing.com/search?q=Jordan",
	"https://www.bing.com/search?q=Kazakhstan",
	"https://www.bing.com/search?q=Kenya",
	"https://www.bing.com/search?q=Kiribati",
	"https://www.bing.com/search?q=North%20Korea",
	"https://www.bing.com/search?q=South%20Korea",
	"https://www.bing.com/search?q=Kosovo",
	"https://www.bing.com/search?q=Kuwait",
	"https://www.bing.com/search?q=Kyrgyzstan",
	"https://www.bing.com/search?q=Laos",
	"https://www.bing.com/search?q=Latvia",
	"https://www.bing.com/search?q=Lebanon",
	"https://www.bing.com/search?q=Lesotho",
	"https://www.bing.com/search?q=Liberia",
	"https://www.bing.com/search?q=Libya",
	"https://www.bing.com/search?q=Liechtenstein",
	"https://www.bing.com/search?q=Lithuania",
	"https://www.bing.com/search?q=Luxembourg",
	"https://www.bing.com/search?q=Madagascar",
	"https://www.bing.com/search?q=Malawi",
	"https://www.bing.com/search?q=Malaysia",
	"https://www.bing.com/search?q=Maldives",
	"https://www.bing.com/search?q=Mali",
	"https://www.bing.com/search?q=Malta",
	"https://www.bing.com/search?q=Marshall%20Islands",
	"https://www.bing.com/search?q=Mauritania",
	"https://www.bing.com/search?q=Mauritius",
	"https://www.bing.com/search?q=Mexico",
	"https://www.bing.com/search?q=Federated%20States%20of%20Micronesia",
	"https://www.bing.com/search?q=Moldova",
	"https://www.bing.com/search?q=Monaco",
	"https://www.bing.com/search?q=Mongolia",
	"https://www.bing.com/search?q=Montenegro",
	"https://www.bing.com/search?q=Morocco",
	"https://www.bing.com/search?q=Mozambique",
	"https://www.bing.com/search?q=Myanmar%20(Burma)",
	"https://www.bing.com/search?q=Namibia",
	"https://www.bing.com/search?q=Nauru",
	"https://www.bing.com/search?q=Nepal",
	"https://www.bing.com/search?q=Netherlands",
	"https://www.bing.com/search?q=New%20Zealand",
	"https://www.bing.com/search?q=Nicaragua",
	"https://www.bing.com/search?q=Niger",
	"https://www.bing.com/search?q=Nigeria",
	"https://www.bing.com/search?q=North%20Macedonia",
	"https://www.bing.com/search?q=Norway",
	"https://www.bing.com/search?q=Oman",
	"https://www.bing.com/search?q=Pakistan",
	"https://www.bing.com/search?q=Palau",
	"https://www.bing.com/search?q=Panama",
	"https://www.bing.com/search?q=Papua%20New%20Guinea",
	"https://www.bing.com/search?q=Paraguay",
	"https://www.bing.com/search?q=Peru",
	"https://www.bing.com/search?q=Philippines",
	"https://www.bing.com/search?q=Poland",
	"https://www.bing.com/search?q=Portugal",
	"https://www.bing.com/search?q=Qatar",
	"https://www.bing.com/search?q=Romania",
	"https://www.bing.com/search?q=Russia",
	"https://www.bing.com/search?q=Rwanda",
	"https://www.bing.com/search?q=Saint%20Kitts%20and%20Nevis",
	"https://www.bing.com/search?q=Saint%20Lucia",
	"https://www.bing.com/search?q=Saint%20Vincent%20and%20the%20Grenadines",
	"https://www.bing.com/search?q=Samoa",
	"https://www.bing.com/search?q=San%20Marino",
	"https://www.bing.com/search?q=Sao%20Tome%20and%20Principe",
	"https://www.bing.com/search?q=Saudi%20Arabia",
	"https://www.bing.com/search?q=Senegal",
	"https://www.bing.com/search?q=Serbia",
	"https://www.bing.com/search?q=Seychelles",
	"https://www.bing.com/search?q=Sierra%20Leone",
	"https://www.bing.com/search?q=Singapore",
	"https://www.bing.com/search?q=Slovakia",
	"https://www.bing.com/search?q=Slovenia",
	"https://www.bing.com/search?q=Solomon%20Islands",
	"https://www.bing.com/search?q=Somalia",
	"https://www.bing.com/search?q=South%20Africa",
	"https://www.bing.com/search?q=Spain",
	"https://www.bing.com/search?q=Sri%20Lanka",
	"https://www.bing.com/search?q=Sudan",
	"https://www.bing.com/search?q=South%20Sudan",
	"https://www.bing.com/search?q=Suriname",
	"https://www.bing.com/search?q=Sweden",
	"https://www.bing.com/search?q=Switzerland",
	"https://www.bing.com/search?q=Syria",
	"https://www.bing.com/search?q=Taiwan",
	"https://www.bing.com/search?q=Tajikistan",
	"https://www.bing.com/search?q=Tanzania",
	"https://www.bing.com/search?q=Thailand",
	"https://www.bing.com/search?q=Togo",
	"https://www.bing.com/search?q=Tonga",
	"https://www.bing.com/search?q=Trinidad%20and%20Tobago",
	"https://www.bing.com/search?q=Tunisia",
	"https://www.bing.com/search?q=Turkey",
	"https://www.bing.com/search?q=Turkmenistan",
	"https://www.bing.com/search?q=Tuvalu",
	"https://www.bing.com/search?q=Uganda",
	"https://www.bing.com/search?q=Ukraine",
	"https://www.bing.com/search?q=United%20Arab%20Emirates",
	"https://www.bing.com/search?q=United%20Kingdom",
	"https://www.bing.com/search?q=United%20States",
	"https://www.bing.com/search?q=Uruguay",
	"https://www.bing.com/search?q=Uzbekistan",
	"https://www.bing.com/search?q=Vanuatu",
	"https://www.bing.com/search?q=Vatican%20City",
	"https://www.bing.com/search?q=Venezuela",
	"https://www.bing.com/search?q=Vietnam",
	"https://www.bing.com/search?q=Yemen",
	"https://www.bing.com/search?q=Zambia",
	"https://www.bing.com/search?q=Zimbabwe",
	"https://www.bing.com/search?q=Rajasthan",
	"https://www.bing.com/search?q=Madhya%20Pradesh",
	"https://www.bing.com/search?q=Maharashtra",
	"https://www.bing.com/search?q=Uttar%20Pradesh",
	"https://www.bing.com/search?q=Gujarat",
	"https://www.bing.com/search?q=Karnataka",
	"https://www.bing.com/search?q=Andhra%20Pradesh",
	"https://www.bing.com/search?q=Odisha",
	"https://www.bing.com/search?q=Chhattisgarh",
	"https://www.bing.com/search?q=Tamil%20Nadu",
	"https://www.bing.com/search?q=Telangana",
	"https://www.bing.com/search?q=Bihar",
	"https://www.bing.com/search?q=West%20Bengal",
	"https://www.bing.com/search?q=Arunachal%20Pradesh",
	"https://www.bing.com/search?q=Jharkhand",
	"https://www.bing.com/search?q=Assam",
	"https://www.bing.com/search?q=Ladakh",
	"https://www.bing.com/search?q=Himachal%20Pradesh",
	"https://www.bing.com/search?q=Uttarakhand",
	"https://www.bing.com/search?q=Punjab",
	"https://www.bing.com/search?q=Haryana",
	"https://www.bing.com/search?q=Jammu%20and%20Kashmir",
	"https://www.bing.com/search?q=Kerala",
	"https://www.bing.com/search?q=Meghalaya",
	"https://www.bing.com/search?q=Manipur",
	"https://www.bing.com/search?q=Mizoram",
	"https://www.bing.com/search?q=Nagaland",
	"https://www.bing.com/search?q=Tripura",
	"https://www.bing.com/search?q=Andaman%20and%20Nicobar%20Islands",
	"https://www.bing.com/search?q=Sikkim",
	"https://www.bing.com/search?q=Goa",
	"https://www.bing.com/search?q=Delhi",
	"https://www.bing.com/search?q=Dadra%20and%20Nagar%20Haveli%20and%20Daman%20and%20Diu",
	"https://www.bing.com/search?q=Puducherry",
	"https://www.bing.com/search?q=Chandigarh",
	"https://www.bing.com/search?q=Lakshadweep",
	"https://www.bing.com/search?q=Assamese",
	"https://www.bing.com/search?q=Bengali",
	"https://www.bing.com/search?q=Dogri",
	"https://www.bing.com/search?q=Gujarati",
	"https://www.bing.com/search?q=Hindi",
	"https://www.bing.com/search?q=Kannada",
	"https://www.bing.com/search?q=Kashmiri",
	"https://www.bing.com/search?q=Konkani",
	"https://www.bing.com/search?q=Maithili",
	"https://www.bing.com/search?q=Malayalam",
	"https://www.bing.com/search?q=Manipuri",
	"https://www.bing.com/search?q=Marathi",
	"https://www.bing.com/search?q=Nepali",
	"https://www.bing.com/search?q=Odia",
	"https://www.bing.com/search?q=Punjabi",
	"https://www.bing.com/search?q=Sanskrit",
	"https://www.bing.com/search?q=Santali",
	"https://www.bing.com/search?q=Sindhi",
	"https://www.bing.com/search?q=Tamil",
	"https://www.bing.com/search?q=Telugu",
	"https://www.bing.com/search?q=shiva",
	"https://www.bing.com/search?q=krishna",
	"https://www.bing.com/search?q=ram",
	"https://www.bing.com/search?q=hanuman",
	"https://www.bing.com/search?q=durga",
];
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = d.getDay();
let wt = 5500;

window.addEventListener('load', function() {
	setTimeout(function(){
		window.scrollTo(0,0);
		console.log("Scrolled");
	}, 100);
});

document.getElementById("date").innerHTML = "Today is : " + daylist[day] + ".";
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function newTab() {
	const dayStartIndex = day * 36;
	const dayEndIndex = (day + 1) * 36;

	if (dayStartIndex >= url.length || dayEndIndex > url.length) {
		alert("Invalid Range");
	}

	for (let i = dayStartIndex; i < dayEndIndex; i++) {
		openedWindow = window.open(url[i], "_blank");
		await sleep(wt);
		if(openedWindow){
			openedWindow.close();
		}
	}
}