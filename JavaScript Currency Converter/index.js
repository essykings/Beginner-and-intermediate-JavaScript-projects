const currencies = [
    {
      countryname: "United Arab Emirates",
      name: "United Arab Emirates dirham",
      code: "AED",
      flag: "🇦🇪",
    },
    {
      countryname: "Afghanistan",
      name: "Afghan afghani",
      code: "AFN",
      flag: "🇦🇫",
    },
    { countryname: "Albania", name: "Albanian lek", code: "ALL", flag: "🇦🇱" },
    { countryname: "Armenia", name: "Armenian dram", code: "AMD", flag: "🇦🇲" },
    {
      countryname: "Curaçao",
      name: "Netherlands Antillean guilder",
      code: "ANG",
      flag: "🇨🇼",
    },
    {
      countryname: "Sint Maarten",
      name: "Netherlands Antillean guilder",
      code: "ANG",
      flag: "🇸🇽",
    },
    { countryname: "Angola", name: "Angolan kwanza", code: "AOA", flag: "🇦🇴" },
    { countryname: "Argentina", name: "Argentine peso", code: "ARS", flag: "🇦🇷" },
    {
      countryname: "Australia",
      name: "Australian dollar",
      code: "AUD",
      flag: "🇦🇺",
    },
    
    { countryname: "Aruba", name: "Aruban florin", code: "AWG", flag: "🇦🇼" },
    {
      countryname: "Azerbaijan",
      name: "Azerbaijani manat",
      code: "AZN",
      flag: "🇦🇿",
    },
    {
      countryname: "Bosnia and Herzegovina",
      name: "Bosnia and Herzegovina convertible mark",
      code: "BAM",
      flag: "🇧🇦",
    },
    {
      countryname: "Barbados",
      name: "Barbadian dollar",
      code: "BBD",
      flag: "🇧🇧",
    },
    {
      countryname: "Bangladesh",
      name: "Bangladeshi taka",
      code: "BDT",
      flag: "🇧🇩",
    },
    { countryname: "Bulgaria", name: "Bulgarian lev", code: "BGN", flag: "🇧🇬" },
    { countryname: "Bahrain", name: "Bahraini dinar", code: "BHD", flag: "🇧🇭" },
    { countryname: "Burundi", name: "Burundian franc", code: "BIF", flag: "🇧🇮" },
    { countryname: "Bermuda", name: "Bermudian dollar", code: "BMD", flag: "🇧🇲" },
    { countryname: "Brunei", name: "Brunei dollar", code: "BND", flag: "🇧🇳" },
    {
      countryname: "Bolivia",
      name: "Bolivian boliviano",
      code: "BOB",
      flag: "🇧🇴",
    },
    { countryname: "Brazil", name: "Brazilian real", code: "BRL", flag: "🇧🇷" },
    { countryname: "Bahamas", name: "Bahamian dollar", code: "BSD", flag: "🇧🇸" },
    {
      countryname: "Bhutan",
      name: "Bhutanese ngultrum",
      code: "BTN",
      flag: "🇧🇹",
    },
    { countryname: "Botswana", name: "Botswana pula", code: "BWP", flag: "🇧🇼" },
    { countryname: "Belarus", name: "Belarusian ruble", code: "BYN", flag: "🇧🇾" },
    { countryname: "Belize", name: "Belize dollar", code: "BZD", flag: "🇧🇿" },
    { countryname: "Canada", name: "Canadian dollar", code: "CAD", flag: "🇨🇦" },
    { countryname: "DR Congo", name: "Congolese franc", code: "CDF", flag: "🇨🇩" },
    
    { countryname: "Switzerland", name: "Swiss franc", code: "CHF", flag: "🇨🇭" },
    {
      countryname: "Cook Islands",
      name: "Cook Islands dollar",
      code: "CKD",
      flag: "🇨🇰",
    },
    { countryname: "Chile", name: "Chilean peso", code: "CLP", flag: "🇨🇱" },
    { countryname: "China", name: "Chinese yuan", code: "CNY", flag: "🇨🇳" },
    { countryname: "Colombia", name: "Colombian peso", code: "COP", flag: "🇨🇴" },
    {
      countryname: "Costa Rica",
      name: "Costa Rican colón",
      code: "CRC",
      flag: "🇨🇷",
    },
    {
      countryname: "Cuba",
      name: "Cuban convertible peso",
      code: "CUC",
      flag: "🇨🇺",
    },
    {
      countryname: "Cape Verde",
      name: "Cape Verdean escudo",
      code: "CVE",
      flag: "🇨🇻",
    },
    { countryname: "Czechia", name: "Czech koruna", code: "CZK", flag: "🇨🇿" },
    {
      countryname: "Djibouti",
      name: "Djiboutian franc",
      code: "DJF",
      flag: "🇩🇯",
    },
    { countryname: "Denmark", name: "Danish krone", code: "DKK", flag: "🇩🇰" },
  
    {
      countryname: "Dominican Republic",
      name: "Dominican peso",
      code: "DOP",
      flag: "🇩🇴",
    },
    { countryname: "Algeria", name: "Algerian dinar", code: "DZD", flag: "🇩🇿" },
    {
      countryname: "Western Sahara",
      name: "Algerian dinar",
      code: "DZD",
      flag: "🇪🇭",
    },
    { countryname: "Palestine", name: "Egyptian pound", code: "EGP", flag: "🇵🇸" },
    { countryname: "Egypt", name: "Egyptian pound", code: "EGP", flag: "🇪🇬" },
    { countryname: "Eritrea", name: "Eritrean nakfa", code: "ERN", flag: "🇪🇷" },
    { countryname: "Ethiopia", name: "Ethiopian birr", code: "ETB", flag: "🇪🇹" },
   
    { countryname: "France", name: "Euro", code: "EUR", flag: "🇫🇷" },
    
    { countryname: "Fiji", name: "Fijian dollar", code: "FJD", flag: "🇫🇯" },
    {
      countryname: "Falkland Islands",
      name: "Falkland Islands pound",
      code: "FKP",
      flag: "🇫🇰",
    },
  
    {
      countryname: "United Kingdom",
      name: "British pound",
      code: "GBP",
      flag: "🇬🇧",
    },
    { countryname: "Georgia", name: "lari", code: "GEL", flag: "🇬🇪" },
    { countryname: "Ghana", name: "Ghanaian cedi", code: "GHS", flag: "🇬🇭" },
    {
      countryname: "Gibraltar",
      name: "Gibraltar pound",
      code: "GIP",
      flag: "🇬🇮",
    },
    { countryname: "Gambia", name: "dalasi", code: "GMD", flag: "🇬🇲" },
    { countryname: "Guinea", name: "Guinean franc", code: "GNF", flag: "🇬🇳" },
    {
      countryname: "Guatemala",
      name: "Guatemalan quetzal",
      code: "GTQ",
      flag: "🇬🇹",
    },
    { countryname: "Guyana", name: "Guyanese dollar", code: "GYD", flag: "🇬🇾" },
    {
      countryname: "Hong Kong",
      name: "Hong Kong dollar",
      code: "HKD",
      flag: "🇭🇰",
    },
    {
      countryname: "Honduras",
      name: "Honduran lempira",
      code: "HNL",
      flag: "🇭🇳",
    },
    { countryname: "Haiti", name: "Haitian gourde", code: "HTG", flag: "🇭🇹" },
    { countryname: "Hungary", name: "Hungarian forint", code: "HUF", flag: "🇭🇺" },
    {
      countryname: "Indonesia",
      name: "Indonesian rupiah",
      code: "IDR",
      flag: "🇮🇩",
    },
    {
      countryname: "Israel",
      name: "Israeli new shekel",
      code: "ILS",
      flag: "🇮🇱",
    },
    { countryname: "India", name: "Indian rupee", code: "INR", flag: "🇮🇳" },
    { countryname: "Iraq", name: "Iraqi dinar", code: "IQD", flag: "🇮🇶" },
    { countryname: "Iran", name: "Iranian rial", code: "IRR", flag: "🇮🇷" },
    { countryname: "Iceland", name: "Icelandic króna", code: "ISK", flag: "🇮🇸" },
    { countryname: "Jamaica", name: "Jamaican dollar", code: "JMD", flag: "🇯🇲" },
    { countryname: "Jordan", name: "Jordanian dinar", code: "JOD", flag: "🇯🇴" },
    { countryname: "Japan", name: "Japanese yen", code: "JPY", flag: "🇯🇵" },
    { countryname: "Kenya", name: "Kenyan shilling", code: "KES", flag: "🇰🇪" },
    {
      countryname: "Kyrgyzstan",
      name: "Kyrgyzstani som",
      code: "KGS",
      flag: "🇰🇬",
    },
    { countryname: "Cambodia", name: "Cambodian riel", code: "KHR", flag: "🇰🇭" },
    { countryname: "Comoros", name: "Comorian franc", code: "KMF", flag: "🇰🇲" },
    {
      countryname: "North Korea",
      name: "North Korean won",
      code: "KPW",
      flag: "🇰🇵",
    },
    {
      countryname: "South Korea",
      name: "South Korean won",
      code: "KRW",
      flag: "🇰🇷",
    },
    { countryname: "Kuwait", name: "Kuwaiti dinar", code: "KWD", flag: "🇰🇼" },
    {
      countryname: "Cayman Islands",
      name: "Cayman Islands dollar",
      code: "KYD",
      flag: "🇰🇾",
    },
    {
      countryname: "Kazakhstan",
      name: "Kazakhstani tenge",
      code: "KZT",
      flag: "🇰🇿",
    },
    { countryname: "Laos", name: "Lao kip", code: "LAK", flag: "🇱🇦" },
    { countryname: "Lebanon", name: "Lebanese pound", code: "LBP", flag: "🇱🇧" },
    {
      countryname: "Sri Lanka",
      name: "Sri Lankan rupee",
      code: "LKR",
      flag: "🇱🇰",
    },
    { countryname: "Liberia", name: "Liberian dollar", code: "LRD", flag: "🇱🇷" },
    { countryname: "Lesotho", name: "Lesotho loti", code: "LSL", flag: "🇱🇸" },
    { countryname: "Libya", name: "Libyan dinar", code: "LYD", flag: "🇱🇾" },
    { countryname: "Morocco", name: "Moroccan dirham", code: "MAD", flag: "🇲🇦" },
    { countryname: "Moldova", name: "Moldovan leu", code: "MDL", flag: "🇲🇩" },
    {
      countryname: "Madagascar",
      name: "Malagasy ariary",
      code: "MGA",
      flag: "🇲🇬",
    },
    { countryname: "North Macedonia", name: "denar", code: "MKD", flag: "🇲🇰" },
    { countryname: "Myanmar", name: "Burmese kyat", code: "MMK", flag: "🇲🇲" },
    {
      countryname: "Mongolia",
      name: "Mongolian tögrög",
      code: "MNT",
      flag: "🇲🇳",
    },
    { countryname: "Macau", name: "Macanese pataca", code: "MOP", flag: "🇲🇴" },
    {
      countryname: "Mauritania",
      name: "Mauritanian ouguiya",
      code: "MRU",
      flag: "🇲🇷",
    },
    {
      countryname: "Mauritius",
      name: "Mauritian rupee",
      code: "MUR",
      flag: "🇲🇺",
    },
    {
      countryname: "Maldives",
      name: "Maldivian rufiyaa",
      code: "MVR",
      flag: "🇲🇻",
    },
    { countryname: "Malawi", name: "Malawian kwacha", code: "MWK", flag: "🇲🇼" },
    { countryname: "Mexico", name: "Mexican peso", code: "MXN", flag: "🇲🇽" },
    {
      countryname: "Malaysia",
      name: "Malaysian ringgit",
      code: "MYR",
      flag: "🇲🇾",
    },
    {
      countryname: "Mozambique",
      name: "Mozambican metical",
      code: "MZN",
      flag: "🇲🇿",
    },
    { countryname: "Namibia", name: "Namibian dollar", code: "NAD", flag: "🇳🇦" },
    { countryname: "Nigeria", name: "Nigerian naira", code: "NGN", flag: "🇳🇬" },
    {
      countryname: "Nicaragua",
      name: "Nicaraguan córdoba",
      code: "NIO",
      flag: "🇳🇮",
    },
    {
      countryname: "Svalbard and Jan Mayen",
      name: "krone",
      code: "NOK",
      flag: "🇸🇯",
    },
    { countryname: "Norway", name: "Norwegian krone", code: "NOK", flag: "🇳🇴" },
    { countryname: "Nepal", name: "Nepalese rupee", code: "NPR", flag: "🇳🇵" },
    {
      countryname: "Tokelau",
      name: "New Zealand dollar",
      code: "NZD",
      flag: "🇹🇰",
    },
    {
      countryname: "Pitcairn Islands",
      name: "New Zealand dollar",
      code: "NZD",
      flag: "🇵🇳",
    },
    { countryname: "Niue", name: "New Zealand dollar", code: "NZD", flag: "🇳🇺" },
    {
      countryname: "New Zealand",
      name: "New Zealand dollar",
      code: "NZD",
      flag: "🇳🇿",
    },
    { countryname: "Oman", name: "Omani rial", code: "OMR", flag: "🇴🇲" },
    { countryname: "Panama", name: "Panamanian balboa", code: "PAB", flag: "🇵🇦" },
    { countryname: "Peru", name: "Peruvian sol", code: "PEN", flag: "🇵🇪" },
    {
      countryname: "Papua New Guinea",
      name: "Papua New Guinean kina",
      code: "PGK",
      flag: "🇵🇬",
    },
    {
      countryname: "Philippines",
      name: "Philippine peso",
      code: "PHP",
      flag: "🇵🇭",
    },
    { countryname: "Pakistan", name: "Pakistani rupee", code: "PKR", flag: "🇵🇰" },
    { countryname: "Poland", name: "Polish złoty", code: "PLN", flag: "🇵🇱" },
    {
      countryname: "Paraguay",
      name: "Paraguayan guaraní",
      code: "PYG",
      flag: "🇵🇾",
    },
    { countryname: "Qatar", name: "Qatari riyal", code: "QAR", flag: "🇶🇦" },
    { countryname: "Romania", name: "Romanian leu", code: "RON", flag: "🇷🇴" },
    { countryname: "Serbia", name: "Serbian dinar", code: "RSD", flag: "🇷🇸" },
    { countryname: "Russia", name: "Russian ruble", code: "RUB", flag: "🇷🇺" },
    { countryname: "Rwanda", name: "Rwandan franc", code: "RWF", flag: "🇷🇼" },
    { countryname: "Saudi Arabia", name: "Saudi riyal", code: "SAR", flag: "🇸🇦" },
    {
      countryname: "Solomon Islands",
      name: "Solomon Islands dollar",
      code: "SBD",
      flag: "🇸🇧",
    },
    {
      countryname: "Seychelles",
      name: "Seychellois rupee",
      code: "SCR",
      flag: "🇸🇨",
    },
    { countryname: "Sudan", name: "Sudanese pound", code: "SDG", flag: "🇸🇩" },
    { countryname: "Sweden", name: "Swedish krona", code: "SEK", flag: "🇸🇪" },
    {
      countryname: "Singapore",
      name: "Singapore dollar",
      code: "SGD",
      flag: "🇸🇬",
    },
    {
      countryname: "South Georgia",
      name: "Saint Helena pound",
      code: "SHP",
      flag: "🇬🇸",
    },
    {
      countryname: "Sierra Leone",
      name: "Sierra Leonean leone",
      code: "SLL",
      flag: "🇸🇱",
    },
    { countryname: "Somalia", name: "Somali shilling", code: "SOS", flag: "🇸🇴" },
    {
      countryname: "Suriname",
      name: "Surinamese dollar",
      code: "SRD",
      flag: "🇸🇷",
    },
    {
      countryname: "South Sudan",
      name: "South Sudanese pound",
      code: "SSP",
      flag: "🇸🇸",
    },
    {
      countryname: "São Tomé and Príncipe",
      name: "São Tomé and Príncipe dobra",
      code: "STN",
      flag: "🇸🇹",
    },
    { countryname: "Syria", name: "Syrian pound", code: "SYP", flag: "🇸🇾" },
    { countryname: "Eswatini", name: "Swazi lilangeni", code: "SZL", flag: "🇸🇿" },
    { countryname: "Thailand", name: "Thai baht", code: "THB", flag: "🇹🇭" },
    {
      countryname: "Tajikistan",
      name: "Tajikistani somoni",
      code: "TJS",
      flag: "🇹🇯",
    },
    {
      countryname: "Turkmenistan",
      name: "Turkmenistan manat",
      code: "TMT",
      flag: "🇹🇲",
    },
    { countryname: "Tunisia", name: "Tunisian dinar", code: "TND", flag: "🇹🇳" },
    { countryname: "Tonga", name: "Tongan paʻanga", code: "TOP", flag: "🇹🇴" },
    { countryname: "Turkey", name: "Turkish lira", code: "TRY", flag: "🇹🇷" },
    {
      countryname: "Trinidad and Tobago",
      name: "Trinidad and Tobago dollar",
      code: "TTD",
      flag: "🇹🇹",
    },
    { countryname: "Taiwan", name: "New Taiwan dollar", code: "TWD", flag: "🇹🇼" },
    {
      countryname: "Tanzania",
      name: "Tanzanian shilling",
      code: "TZS",
      flag: "🇹🇿",
    },
    {
      countryname: "Ukraine",
      name: "Ukrainian hryvnia",
      code: "UAH",
      flag: "🇺🇦",
    },
    { countryname: "Uganda", name: "Ugandan shilling", code: "UGX", flag: "🇺🇬" },
   
    
    
    
    
    {
      countryname: "United States",
      name: "United States dollar",
      code: "USD",
      flag: "🇺🇸",
    },
  
    
    { countryname: "Uruguay", name: "Uruguayan peso", code: "UYU", flag: "🇺🇾" },
    {
      countryname: "Uzbekistan",
      name: "Uzbekistani soʻm",
      code: "UZS",
      flag: "🇺🇿",
    },
    {
      countryname: "Venezuela",
      name: "Venezuelan bolívar soberano",
      code: "VES",
      flag: "🇻🇪",
    },
    { countryname: "Vietnam", name: "Vietnamese đồng", code: "VND", flag: "🇻🇳" },
    { countryname: "Vanuatu", name: "Vanuatu vatu", code: "VUV", flag: "🇻🇺" },
    { countryname: "Samoa", name: "Samoan tālā", code: "WST", flag: "🇼🇸" },
   
    {
      countryname: "Cameroon",
      name: "Central African CFA franc",
      code: "XAF",
      flag: "🇨🇲",
    },
  
    
    {
      countryname: "Anguilla",
      name: "Eastern Caribbean dollar",
      code: "XCD",
      flag: "🇦🇮",
    },
   
    
    {
      countryname: "Niger",
      name: "West African CFA franc",
      code: "XOF",
      flag: "🇳🇪",
    },
    
    {
      countryname: "French Polynesia",
      name: "CFP franc",
      code: "XPF",
      flag: "🇵🇫",
    },
    
    { countryname: "Yemen", name: "Yemeni rial", code: "YER", flag: "🇾🇪" },
    {
      countryname: "South Africa",
      name: "South African rand",
      code: "ZAR",
      flag: "🇿🇦",
    },
    { countryname: "Zambia", name: "Zambian kwacha", code: "ZMW", flag: "🇿🇲" },
    {
      countryname: "Zimbabwe",
      name: "Zimbabwean dollar",
      code: "ZWL",
      flag: "🇿🇼",
    },
  ];
let input = document.getElementById("amount");

let apiKey = "24faec6b42da4a96ceea41d3";

let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");

function createOption(currency, defaultCode, element) {
  const option = document.createElement("option");
  option.classList.add("select-option");
  option.value = currency.code;
  if (currency.code === defaultCode) {
    option.selected = true;
  }
  option.text = `${currency.flag} ${currency.code} - ${currency.name}`;
  element.appendChild(option);
}

function addCurrency() {
  const result = currencies.forEach((currency) => {
    const optionFrom = document.createElement("option");
    optionFrom.classList.add("select-option");
    optionFrom.value = currency.code;
    if (currency.code === "USD") {
      optionFrom.selected = true;
    }
    optionFrom.text = `${currency.flag} ${currency.code} - ${currency.name}`;

    fromCurrency.appendChild(optionFrom);

    const optionTO = document.createElement("option");
    optionTO.classList.add("select-option");
    optionTO.value = currency.code;
    if (currency.code === "EUR") {
      optionTO.selected = true;
    }
    optionTO.text = `${currency.flag} ${currency.code} - ${currency.name}`;
    toCurrency.appendChild(optionTO);
  });
}
addCurrency();

const convertBtn = document.querySelector(".convert");
convertBtn.addEventListener("click", () => {
  convertCurrency();
});

function convertCurrency() {
  const BASE_URL = `https://v6.exchangerate-api.com/v6/${apiKey}`;

  const fromCurrrencyCode = document.getElementById("fromCurrency").value;
  const toCurrencyCode = document.getElementById("toCurrency").value;
  const result = document.querySelector(".result");
  const error = document.querySelector(".error");

  console.log(fromCurrrencyCode);
  console.log(toCurrencyCode);

  const amount = input.value;

  if (amount !== "" && parseFloat(amount) >= 1) {
    const url = `${BASE_URL}/pair/${fromCurrrencyCode}/${toCurrencyCode}`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.conversion_rate);

        const conversionResult = (amount * data.conversion_rate).toFixed(2);
        const formattedResult = conversionResult.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ","
        );

        result.innerHTML = `${amount} ${fromCurrrencyCode} = ${formattedResult} ${toCurrencyCode}`;
        amount.innerHTML = " ";
      })
      .catch(() => {
        error.textContent = "An error occured, please try again later ";
      });
  } else {
    alert("Please enter an amount");
  }
}
