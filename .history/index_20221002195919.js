
// var canvas = d3.select('#canvas');

var myMap = L.map("map",{
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
var countries : [
     {
       name: "China",
       Location: [35.86166, 104.195397],
       Population: 1,425,887,337
     },
     {
       : "India",
       "Location": ["20.593684, 78.96288"],
       "Population": "1,417,173,173"
     },
     {
       "Country": "United States",
       "Location": ["37.09024, -95.712891"],
       "Population": "338,289,857"
     },
     {
       "Country": "Indonesia",
       "Location": ["-0.789275, 113.921327"],
       "Population": "275,501,339"
     },
     {
       "Country": "Pakistan",
       "Location": ["30.375321,\t69.345116"],
       "Population": "235,824,862"
     },
     {
       "Country": "Nigeria",
       "Location": ["9.081999, 8.675277"],
       "Population": "218,541,212"
     },
     {
       "Country": "Brazil",
       "Location": ["-14.235004, -51.92528"],
       "Population": "215,313,498"
     },
     {
       "Country": "Bangladesh",
       "Location": ["23.684994, 90.356331"],
       "Population": "171,186,372"
     },
     {
       "Country": "Russia",
       "Location": ["61.52401, 105.318756"],
       "Population": "144,713,314"
     },
     {
       "Country": "Mexico",
       "Location": ["23.634501, -102.55278"],
       "Population": "127,504,125"
     },
     {
       "Country": "Japan",
       "Location": ["36.204824, 138.252924"],
       "Population": "123,951,692"
     },
     {
       "Country": "Ethiopia",
       "Location": ["9.145, 40.489673"],
       "Population": "123,379,924"
     },
     {
       "Country": "Philippines",
       "Location": ["12.879721, 121.774017"],
       "Population": "115,559,009"
     },
     {
       "Country": "Egypt",
       "Location": ["26.820553, 30.802498"],
       "Population": "110,990,103"
     },
     {
       "Country": "DR Congo",
       "Location": ["-4.038333, 21.758664"],
       "Population": "99,010,212"
     },
     {
       "Country": "Vietnam",
       "Location": ["14.058324, 108.277199"],
       "Population": "98,186,856"
     },
     {
       "Country": "Iran",
       "Location": ["32.427908, 53.688046"],
       "Population": "88,550,570"
     },
     {
       "Country": "Turkey",
       "Location": ["38.963745, 35.243322"],
       "Population": "85,341,241"
     },
     {
       "Country": "Germany",
       "Location": ["51.165691, 10.451526"],
       "Population": "83,369,843"
     },
     {
       "Country": "Thailand",
       "Location": ["15.870032, 100.992541"],
       "Population": "71,697,030"
     },
     {
       "Country": "United Kingdom",
       "Location": ["55.378051, -3.435973"],
       "Population": "67,508,936"
     },
     {
       "Country": "Tanzania",
       "Location": ["-6.369028, 34.888822"],
       "Population": "65,497,748"
     },
     {
       "Country": "France",
       "Location": ["46.227638, 2.213749"],
       "Population": "64,626,628"
     },
     {
       "Country": "South Africa",
       "Location": ["-30.559482, 22.937506"],
       "Population": "59,893,885"
     },
     {
       "Country": "Italy",
       "Location": ["41.87194, 12.56738"],
       "Population": "59,037,474"
     },
     {
       "Country": "Myanmar",
       "Location": ["21.913965, 95.956223"],
       "Population": "54,179,306"
     },
     {
       "Country": "Kenya",
       "Location": ["-0.023559, 37.906193"],
       "Population": "54,027,487"
     },
     {
       "Country": "Colombia",
       "Location": ["12.565679, 104.990963"],
       "Population": "51,874,024"
     },
     {
       "Country": "South Korea",
       "Location": ["35.907757, 127.766922"],
       "Population": "51,815,810"
     },
     {
       "Country": "Spain",
       "Location": ["40.463667, -3.74922"],
       "Population": "47,558,630"
     },
     {
       "Country": "Uganda",
       "Location": ["1.373333, 32.290275"],
       "Population": "47,249,585"
     },
     {
       "Country": "Sudan",
       "Location": ["12.862807, 30.217636"],
       "Population": "46,874,204"
     },
     {
       "Country": "Argentina",
       "Location": ["-38.416097, -63.616672"],
       "Population": "45,510,318"
     },
     {
       "Country": "Algeria",
       "Location": ["28.033886, 1.659626"],
       "Population": "44,903,225"
     },
     {
       "Country": "Iraq",
       "Location": ["33.223191, 43.679291"],
       "Population": "44,496,122"
     },
     {
       "Country": "Afghanistan",
       "Location": ["33.93911, 67.709953"],
       "Population": "41,128,771"
     },
     {
       "Country": "Poland",
       "Location": ["51.919438, 19.145136"],
       "Population": "39,857,145"
     },
     {
       "Country": "Ukraine",
       "Location": ["48.379433, 31.16558"],
       "Population": "39,701,739"
     },
     {
       "Country": "Canada",
       "Location": ["56.130366, -106.34677"],
       "Population": "38,454,327"
     },
     {
       "Country": "Morocco",
       "Location": ["31.791702, -7.09262"],
       "Population": "37,457,971"
     },
     {
       "Country": "Saudi Arabia",
       "Location": ["23.885942, 45.079162"],
       "Population": "36,408,820"
     },
     {
       "Country": "Angola",
       "Location": ["-11.202692, 17.873887"],
       "Population": "35,588,987"
     },
     {
       "Country": "Uzbekistan",
       "Location": ["41.377491, 64.585262"],
       "Population": "34,627,652"
     },
     {
       "Country": "Peru",
       "Location": ["-9.189967, -75.015152"],
       "Population": "34,049,588"
     },
     {
       "Country": "Malaysia",
       "Location": ["4.210484, 101.975766"],
       "Population": "33,938,221"
     },
     {
       "Country": "Yemen",
       "Location": ["15.552727, 48.516388"],
       "Population": "33,696,614"
     },
     {
       "Country": "Ghana",
       "Location": ["7.946527, -1.023194"],
       "Population": "33,475,870"
     },
     {
       "Country": "Mozambique",
       "Location": ["-18.665695, 35.529562"],
       "Population": "32,969,518"
     },
     {
       "Country": "Nepal",
       "Location": ["28.394857, 84.124008"],
       "Population": "30,547,580"
     },
     {
       "Country": "Madagascar",
       "Location": ["-18.766947, 46.869107"],
       "Population": "29,611,714"
     },
     {
       "Country": "Venezuela",
       "Location": ["6.42375, -66.58973"],
       "Population": "28,301,696"
     },
     {
       "Country": "Ivory Coast",
       "Location": ["5.345317, -4.024429"],
       "Population": "28,160,542"
     },
     {
       "Country": "Cameroon",
       "Location": ["7.369722, 12.354722"],
       "Population": "27,914,536"
     },
     {
       "Country": "Niger",
       "Location": ["17.607789, 8.081666"],
       "Population": "26,207,977"
     },
     {
       "Country": "Australia",
       "Location": ["-25.274398, 133.775136"],
       "Population": "26,177,413"
     },
     {
       "Country": "North Korea",
       "Location": ["40.339852, 127.510093"],
       "Population": "26,069,416"
     },
     {
       "Country": "Taiwan",
       "Location": ["23.69781, 120.960515"],
       "Population": "23,893,394"
     },
     {
       "Country": "Burkina Faso",
       "Location": ["12.238333, -1.561593"],
       "Population": "22,673,762"
     },
     {
       "Country": "Mali",
       "Location": ["17.570692, -3.996166"],
       "Population": "22,593,590"
     },
     {
       "Country": "Syria",
       "Location": ["34.802075, 38.996815"],
       "Population": "22,125,249"
     },
     {
       "Country": "Sri Lanka",
       "Location": ["7.873054, 80.771797"],
       "Population": "21,832,143"
     },
     {
       "Country": "Malawi",
       "Location": ["-13.254308, 34.301525"],
       "Population": "20,405,317"
     },
     {
       "Country": "Zambia",
       "Location": ["-13.133897, 27.849332"],
       "Population": "20,017,675"
     },
     {
       "Country": "Romania",
       "Location": ["45.943161, 24.96676"],
       "Population": "19,659,267"
     },
     {
       "Country": "Chile",
       "Location": ["-35.675147, -71.542969"],
       "Population": "19,603,733"
     },
     {
       "Country": "Kazakhstan",
       "Location": ["48.019573, 66.923684"],
       "Population": "19,397,998"
     },
     {
       "Country": "Ecuador",
       "Location": ["-1.831239, -78.183406"],
       "Population": "18,001,000"
     },
     {
       "Country": "Guatemala",
       "Location": ["15.783471, -90.230759"],
       "Population": "17,843,908"
     },
     {
       "Country": "Chad",
       "Location": ["15.454166, 18.732207"],
       "Population": "17,723,315"
     },
     {
       "Country": "Somalia",
       "Location": ["5.152149, 46.199616"],
       "Population": "17,597,511"
     },
     {
       "Country": "Netherlands",
       "Location": ["52.132633, 5.291266"],
       "Population": "17,564,014"
     },
     {
       "Country": "Senegal",
       "Location": ["14.497401, -14.452362"],
       "Population": "17,316,449"
     },
     {
       "Country": "Cambodia",
       "Location": ["12.565679, 104.990963"],
       "Population": "16,767,842"
     },
     {
       "Country": "Zimbabwe",
       "Location": ["-19.015438, 29.154857"],
       "Population": "16,320,537"
     },
     {
       "Country": "Guinea",
       "Location": ["9.945587, -9.696645"],
       "Population": "13,859,341"
     },
     {
       "Country": "Rwanda",
       "Location": ["-1.940278, 29.873888"],
       "Population": "13,776,698"
     },
     {
       "Country": "Benin",
       "Location": ["9.30769, 2.315834"],
       "Population": "13,352,864"
     },
     {
       "Country": "Burundi",
       "Location": ["-3.373056, 29.918886"],
       "Population": "12,889,576"
     },
     {
       "Country": "Tunisia",
       "Location": ["33.886917, 9.537499"],
       "Population": "12,356,117"
     },
     {
       "Country": "Bolivia",
       "Location": ["-16.290154, -63.588653"],
       "Population": "12,224,110"
     },
     {
       "Country": "Belgium",
       "Location": ["50.503887, 4.469936"],
       "Population": "11,655,930"
     },
     {
       "Country": "Haiti",
       "Location": ["18.971187, -72.285215"],
       "Population": "11,584,996"
     },
     {
       "Country": "Jordan",
       "Location": ["30.585164, 36.238414"],
       "Population": "11,285,869"
     },
     {
       "Country": "Dominican Republic",
       "Location": ["18.735693, -70.162651"],
       "Population": "11,228,821"
     },
     {
       "Country": "Cuba",
       "Location": ["21.521757, -77.781167"],
       "Population": "11,212,191"
     },
     {
       "Country": "South Sudan",
       "Location": ["4.859363,  31.571251"],
       "Population": "10,913,164"
     },
     {
       "Country": "Sweden",
       "Location": ["60.128161, 18.643501"],
       "Population": "10,549,347"
     },
     {
       "Country": "Czech Republic",
       "Location": ["49.817492, 15.472962"],
       "Population": "10,493,986"
     },
     {
       "Country": "Honduras",
       "Location": ["15.199999, -86.241905"],
       "Population": "10,432,860"
     },
     {
       "Country": "Greece",
       "Location": ["39.074208, 21.824312"],
       "Population": "10,384,971"
     },
     {
       "Country": "Azerbaijan",
       "Location": ["40.143105, 47.576927"],
       "Population": "10,358,074"
     },
     {
       "Country": "Portugal",
       "Location": ["39.399872, -8.224454"],
       "Population": "10,270,865"
     },
     {
       "Country": "Papua New Guinea",
       "Location": ["-6.314993, 143.95555"],
       "Population": "10,142,619"
     },
     {
       "Country": "Hungary",
       "Location": ["47.162494, 19.503304"],
       "Population": "9,967,308"
     },
     {
       "Country": "Tajikistan",
       "Location": ["38.861034, 71.276093"],
       "Population": "9,952,787"
     },
     {
       "Country": "Belarus",
       "Location": ["53.709807, 27.953389"],
       "Population": "9,534,954"
     },
     {
       "Country": "United Arab Emirates",
       "Location": ["23.424076, 53.847818"],
       "Population": "9,441,129"
     },
     {
       "Country": "Israel",
       "Location": ["31.046051, 34.851612"],
       "Population": "9,038,309"
     },
     {
       "Country": "Austria",
       "Location": ["47.516231, 14.550072"],
       "Population": "8,939,617"
     },
     {
       "Country": "Togo",
       "Location": ["8.619543, 0.824782"],
       "Population": "8,848,699"
     },
     {
       "Country": "Switzerland",
       "Location": ["46.818188, 8.227512"],
       "Population": "8,740,472"
     },
     {
       "Country": "Sierra Leone",
       "Location": ["8.460555, -11.779889"],
       "Population": "8,605,718"
     },
     {
       "Country": "Laos",
       "Location": ["19.85627, 102.495496"],
       "Population": "7,529,475"
     },
     {
       "Country": "Hong Kong",
       "Location": ["22.396428, 114.109497"],
       "Population": "7,488,865"
     },
     {
       "Country": "Serbia",
       "Location": ["44.016521, 21.005859"],
       "Population": "7,221,365"
     },
     {
       "Country": "Nicaragua",
       "Location": ["12.865416, -85.207229"],
       "Population": "6,948,392"
     },
     {
       "Country": "Libya",
       "Location": ["26.3351, 17.228331"],
       "Population": "6,812,341"
     },
     {
       "Country": "Bulgaria",
       "Location": ["42.733883, 25.48583"],
       "Population": "6,781,953"
     },
     {
       "Country": "Paraguay",
       "Location": ["-23.442503, -58.443832"],
       "Population": "6,780,744"
     },
     {
       "Country": "Kyrgyzstan",
       "Location": ["41.20438, 74.766098"],
       "Population": "6,630,623"
     },
     {
       "Country": "Turkmenistan",
       "Location": ["38.969719,\t59.556278"],
       "Population": "6,430,770"
     },
     {
       "Country": "El Salvador",
       "Location": ["13.794185,\t-88.89653"],
       "Population": "6,336,392"
     },
     {
       "Country": "Singapore",
       "Location": ["1.352083, 103.819836"],
       "Population": "5,975,689"
     },
     {
       "Country": "Republic of the Congo",
       "Location": ["-0.228021, 15.827659"],
       "Population": "5,970,424"
     },
     {
       "Country": "Denmark",
       "Location": ["56.26392, 9.501785"],
       "Population": "5,882,261"
     },
     {
       "Country": "Slovakia",
       "Location": ["48.669026, 19.699024"],
       "Population": "5,643,453"
     },
     {
       "Country": "Central African Republic",
       "Location": ["6.611111, 20.939444"],
       "Population": "5,579,144"
     },
     {
       "Country": "Finland",
       "Location": ["61.92411, 25.748151"],
       "Population": "5,540,745"
     },
     {
       "Country": "Lebanon",
       "Location": ["33.854721, 35.862285"],
       "Population": "5,489,739"
     },
     {
       "Country": "Norway",
       "Location": ["60.472024, 8.468946"],
       "Population": "5,434,319"
     },
     {
       "Country": "Liberia",
       "Location": ["6.428055, -9.429499"],
       "Population": "5,302,681"
     },
     {
       "Country": "Palestine",
       "Location": ["31.952162, 35.233154"],
       "Population": "5,250,072"
     },
     {
       "Country": "New Zealand",
       "Location": ["-40.900557, 174.885971"],
       "Population": "5,185,288"
     },
     {
       "Country": "Costa Rica",
       "Location": ["9.748917, -83.753428"],
       "Population": "5,180,829"
     },
     {
       "Country": "Ireland",
       "Location": ["53.41291, -8.24389"],
       "Population": "5,023,109"
     },
     {
       "Country": "Mauritania",
       "Location": ["21.00789, -10.940835"],
       "Population": "4,736,139"
     },
     {
       "Country": "Oman",
       "Location": ["21.512583, 55.923255"],
       "Population": "4,576,298"
     },
     {
       "Country": "Panama",
       "Location": ["8.537981, -80.782127"],
       "Population": "4,408,581"
     },
     {
       "Country": "Kuwait",
       "Location": ["29.31166, 47.481766"],
       "Population": "4,268,873"
     },
     {
       "Country": "Croatia",
       "Location": ["45.815399, 15.966568"],
       "Population": "4,030,358"
     },
     {
       "Country": "Georgia",
       "Location": ["42.315407, 43.356892"],
       "Population": "3,744,385"
     },
     {
       "Country": "Eritrea",
       "Location": ["15.179384, 39.782334"],
       "Population": "3,684,032"
     },
     {
       "Country": "Uruguay",
       "Location": ["-32.522779, -55.765835"],
       "Population": "3,422,794"
     },
     {
       "Country": "Mongolia",
       "Location": ["46.862496, 103.846656"],
       "Population": "3,398,366"
     },
     {
       "Country": "Moldova",
       "Location": ["47.411631, 28.369885"],
       "Population": "3,272,996"
     },
     {
       "Country": "Puerto Rico",
       "Location": ["18.220833, -66.590149"],
       "Population": "3,252,407"
     },
     {
       "Country": "Bosnia and Herzegovina",
       "Location": ["43.915886, 17.679076"],
       "Population": "3,233,526"
     },
     {
       "Country": "Albania",
       "Location": ["41.153332, 20.168331"],
       "Population": "2,842,321"
     },
     {
       "Country": "Jamaica",
       "Location": ["18.109581, -77.297508"],
       "Population": "2,827,377"
     },
     {
       "Country": "Armenia",
       "Location": ["40.069099, 45.038189"],
       "Population": "2,780,469"
     },
     {
       "Country": "Lithuania",
       "Location": ["55.169438, 23.881275"],
       "Population": "2,750,055"
     },
     {
       "Country": "Gambia",
       "Location": ["13.443182, -15.310139"],
       "Population": "2,705,992"
     },
     {
       "Country": "Qatar",
       "Location": ["25.354826, 51.183884"],
       "Population": "2,695,122"
     },
     {
       "Country": "Botswana",
       "Location": ["-22.328474, 24.684866"],
       "Population": "2,630,296"
     },
     {
       "Country": "Namibia",
       "Location": ["-22.95764, 18.49041"],
       "Population": "2,567,012"
     },
     {
       "Country": "Gabon",
       "Location": ["-0.803689,\t11.609444"],
       "Population": "2,388,992"
     },
     {
       "Country": "Lesotho",
       "Location": ["-29.609988, 28.233608"],
       "Population": "2,305,825"
     },
     {
       "Country": "Slovenia",
       "Location": ["46.151241, 14.995463"],
       "Population": "2,119,844"
     },
     {
       "Country": "Guinea-Bissau",
       "Location": ["11.803749, -15.180413"],
       "Population": "2,105,566"
     },
     {
       "Country": "North Macedonia",
       "Location": ["41.608635, 21.745275"],
       "Population": "2,093,599"
     },
     {
       "Country": "Latvia",
       "Location": ["56.879635, 24.603189"],
       "Population": "1,850,651"
     },
     {
       "Country": "Kosovo",
       "Location": ["42.602636,\t20.902977"],
       "Population": "1,802,250"
     },
     {
       "Country": "Equatorial Guinea",
       "Location": ["1.650801, 10.267895"],
       "Population": "1,674,908"
     },
     {
       "Country": "Trinidad and Tobago",
       "Location": ["10.691803,\t-61.222503"],
       "Population": "1,531,044"
     },
     {
       "Country": "Bahrain",
       "Location": ["25.930414,\t50.637772"],
       "Population": "1,472,233"
     },
     {
       "Country": "Timor-Leste",
       "Location": ["-8.874217, 125.727539"],
       "Population": "1,341,296"
     },
     {
       "Country": "Estonia",
       "Location": ["58.595272, 25.013607"],
       "Population": "1,326,062"
     },
     {
       "Country": "Mauritius",
       "Location": ["-20.348404, 57.552152"],
       "Population": "1,299,469"
     },
     {
       "Country": "Cyprus",
       "Location": ["35.126413, 33.429859"],
       "Population": "1,251,488"
     },
     {
       "Country": "Eswatini",
       "Location": ["-26.522503, 31.465866"],
       "Population": "1,201,670"
     },
     {
       "Country": "Djibouti",
       "Location": ["11.825138, 42.590275"],
       "Population": "1,120,849"
     },
     {
       "Country": "Reunion",
       "Location": ["-21.115141, 55.536384"],
       "Population": "974,052"
     },
     {
       "Country": "Fiji",
       "Location": ["-16.578193, 179.414413"],
       "Population": "929,766"
     },
     {
       "Country": "Comoros",
       "Location": ["-11.875001, 43.872219"],
       "Population": "836,774"
     },
     {
       "Country": "Guyana",
       "Location": ["4.860416, -58.93018"],
       "Population": "808,726"
     },
     {
       "Country": "Bhutan",
       "Location": ["27.514162, 90.433601"],
       "Population": "782,455"
     },
     {
       "Country": "Solomon Islands",
       "Location": ["-9.64571, 160.156194"],
       "Population": "724,273"
     },
     {
       "Country": "Luxembourg",
       "Location": ["49.815273, 6.129583"],
       "Population": "647,599"
     },
     {
       "Country": "Montenegro",
       "Location": ["42.708678, 19.37439"],
       "Population": "627,082"
     },
     {
       "Country": "Suriname",
       "Location": ["3.919305, -56.027783"],
       "Population": "618,040"
     },
     {
       "Country": "Cape Verde",
       "Location": ["16.002082, -24.013197"],
       "Population": "593,149"
     },
     {
       "Country": "Western Sahara",
       "Location": ["24.215527, -12.885834"],
       "Population": "575,986"
     },
     {
       "Country": "Malta",
       "Location": ["35.937496, 14.375416"],
       "Population": "533,286"
     },
     {
       "Country": "Maldives",
       "Location": ["3.202778, 73.22068"],
       "Population": "523,787"
     },
     {
       "Country": "Brunei",
       "Location": ["4.535277, 114.727669"],
       "Population": "449,002"
     },
     {
       "Country": "Bahamas",
       "Location": ["25.03428,-77.39628"],
       "Population": "409,984"
     },
     {
       "Country": "Belize",
       "Location": ["17.189877, -88.49765]"],
       "Population": "405,272"
     },
     {
       "Country": "Guadeloupe",
       "Location": ["16.995971, -62.067641"],
       "Population": "395,752"
     },
     {
       "Country": "Iceland",
       "Location": ["64.963051, -19.020835"],
       "Population": "372,899"
     },
     {
       "Country": "Martinique",
       "Location": ["14.641528, -61.024174"],
       "Population": "367,507"
     },
     {
       "Country": "Vanuatu",
       "Location": ["-15.376706, 166.959158"],
       "Population": "326,740"
     },
     {
       "Country": "Mayotte",
       "Location": ["-12.8275, 45.166244"],
       "Population": "326,101"
     },
     {
       "Country": "French Guiana",
       "Location": ["3.933889, -53.125782"],
       "Population": "304,557"
     },
     {
       "Country": "Barbados",
       "Location": ["13.193887, -59.543198"],
       "Population": "281,635"
     },
     {
       "Country": "Sao Tome and Principe",
       "Location": ["0.18636, 6.613081"],
       "Population": "227,380"
     },
     {
       "Country": "Samoa",
       "Location": ["-13.759029, -172.10463"],
       "Population": "222,382"
     },
     {
       "Country": "Saint Lucia",
       "Location": ["13.909444, -60.978893"],
       "Population": "179,857"
     },
     {
       "Country": "Kiribati",
       "Location": ["-3.370417, -168.73404"],
       "Population": "131,232"
     },
     {
       "Country": "Grenada",
       "Location": ["12.262776, -61.604171"],
       "Population": "125,438"
     },
     {
       "Country": "Micronesia",
       "Location": ["7.425554, 150.550812"],
       "Population": "114,164"
     },
     {
       "Country": "Seychelles",
       "Location": ["-4.679574, 55.491977"],
       "Population": "107,118"
     },
     {
       "Country": "Tonga",
       "Location": ["-21.178986, -175.19824"],
       "Population": "106,858"
     },
     {
       "Country": "Saint Vincent and the Grenadines",
       "Location": ["12.984305,\t-61.287228"],
       "Population": "103,948"
     },
     {
       "Country": "Antigua and Barbuda",
       "Location": ["17.060816,\t-61.796428"],
       "Population": "93,763"
     },
     {
       "Country": "Andorra",
       "Location": ["42.546245, 1.601554"],
       "Population": "79,824"
     },
     {
       "Country": "Dominica",
       "Location": ["15.414999,\t-61.370976"],
       "Population": "72,737"
     },
     {
       "Country": "Greenland",
       "Location": ["71.706936,\t-42.604303"],
       "Population": "56,466"
     },
     {
       "Country": "Saint Kitts and Nevis",
       "Location": ["17.357822,\t-62.782998"],
       "Population": "47,657"
     },
     {
       "Country": "Marshall Islands",
       "Location": ["7.131474, 171.184478"],
       "Population": "41,569"
     },
     {
       "Country": "Liechtenstein",
       "Location": ["47.166, 9.555373"],
       "Population": "39,327"
     },
     {
       "Country": "Monaco",
       "Location": ["43.750298,\t7.412841"],
       "Population": "36,469"
     },
     {
       "Country": "San Marino",
       "Location": ["43.94236, 12.457777"],
       "Population": "33,660"
     },
     {
       "Country": "Palau",
       "Location": ["7.51498, 134.58252"],
       "Population": "18,055"
     },
     {
       "Country": "Nauru",
       "Location": ["-0.522778, 166.931503"],
       "Population": "12,668"
     },
     {
       "Country": "Tuvalu",
       "Location": ["-7.109535, 177.64933"],
       "Population": "11,312"
     },
     {
       "Country": "Vatican City",
       "Location": ["41.902916, 12.453389"],
       "Population": "510"
     }
    ];

// // Define a markerSize() function that will give each city a different radius based on its population.
// function markerSize(population) {
//   return Math.sqrt(population) * 50;
// }


// d3.json("/location.json").then((data) => {


//      console.log(data);

//      var countryData = data;

// console.log(countryData);

for (var i = 0; i < countryData.lenght; i++) {
    var country = countryData[i];

    L.circle(countryData[i].location, {
        fillOpacitiy:0.75,
        color: "white",
        fillColor: "purple",

        radius: markerSize(countryData[i].population)
    }).bindPopup(`<h1>${countryData[i].name}</h1> <hr> <h3> 2022 Population:${countryData[i].population.toLocaleString()}
    </h3>`).addTo(myMap);
}
// console.log(location);

// });








