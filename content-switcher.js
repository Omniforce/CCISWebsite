var homeButton = document.getElementById("homeButton");
var fwotdButton = document.getElementById("fwotdButton");
var colorButton = document.getElementById("colorButton");
var resumeButton = document.getElementById("resumeButton");
var linksButton = document.getElementById("linksButton");
var contactButton = document.getElementById("contactButton");
var submitButton = document.getElementById("submitButton");
var backButton = document.getElementById("backButton");

var homePage = document.getElementById("homePage");
var fwotdPage = document.getElementById("fwotdPage");
var linksPage = document.getElementById("linksPage");
var contactPage = document.getElementById("contactPage");

var fwotdInfo = document.getElementById("fwotdInfo");
var fwotdResults = document.getElementById("fwotdResults");

function showHome() {
    fwotdPage.style.display = "none";
    linksPage.style.display = "none";
    contactPage.style.display = "none";
	$('#homePage').fadeIn('slow');
    homePage.style.display = "block";
}

function showFwotd() {
    homePage.style.display = "none";
    linksPage.style.display = "none";
    contactPage.style.display = "none";
	fwotdResults.style.display = "none";
	$('#fwotdPage').fadeIn('slow');
	fwotdInfo.style.display = "block";
    fwotdPage.style.display = "block";
}

function showColor() {
    window.open('ColorConverter/converter.html')
}

function showResume() {
	window.open('pdfs/resume.pdf');
}

function showLinks() {
    fwotdPage.style.display = "none";
    homePage.style.display = "none";
    contactPage.style.display = "none";
	$('#linksPage').fadeIn('slow');
    linksPage.style.display = "block";
}

function showContact() {
    fwotdPage.style.display = "none";
    linksPage.style.display = "none";
    homePage.style.display = "none";
	$('#contactPage').fadeIn('slow');
    contactPage.style.display = "block";
}

function showFwotdInfo() {
	fwotdResults.style.display = "none";
	$('#fwotdInfo').fadeIn('fast');
	fwotdInfo.style.display = "block";
}

function showFwotdResults() {
    if (document.getElementById("#summonerName") == null) {
        document.getElementById("#Warning").display = "block";
    } else {
	   fwotdInfo.style.display = "none";
	   $('#fwotdResults').fadeIn('fast');
	   fwotdResults.style.display = "block";
    }
}

// function showFwotdResults() {
//     fwotdInfo.style.display = "none";
//     $('#fwotdResults').fadeIn('fast');
//     fwotdResults.style.display = "block";
// }

homeButton.onclick = showHome;
fwotdButton.onclick = showFwotd;
colorButton.onclick = showColor;
resumeButton.onclick = showResume;
linksButton.onclick = showLinks;
contactButton.onclick = showContact;
submitButton.onclick = showFwotdResults;
backButton.onclick = showFwotdInfo;
