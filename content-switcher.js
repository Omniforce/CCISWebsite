var homeButton = document.getElementById("homeButton");
var colorButton = document.getElementById("colorButton");
var resumeButton = document.getElementById("resumeButton");
var linksButton = document.getElementById("linksButton");
var contactButton = document.getElementById("contactButton");
var submitButton = document.getElementById("submitButton");
var backButton = document.getElementById("backButton");

var homePage = document.getElementById("homePage");
var linksPage = document.getElementById("linksPage");
var contactPage = document.getElementById("contactPage");

function showHome() {
    linksPage.style.display = "none";
    contactPage.style.display = "none";
	$('#homePage').fadeIn('slow');
    homePage.style.display = "block";
}

function showColor() {
    window.open('ColorConverter/converter.html')
}

function showResume() {
	window.open('pdfs/resume.pdf');
}

function showLinks() {
    homePage.style.display = "none";
    contactPage.style.display = "none";
	$('#linksPage').fadeIn('slow');
    linksPage.style.display = "block";
}

function showContact() {
    linksPage.style.display = "none";
    homePage.style.display = "none";
	$('#contactPage').fadeIn('slow');
    contactPage.style.display = "block";
}

homeButton.onclick = showHome;
colorButton.onclick = showColor;
resumeButton.onclick = showResume;
linksButton.onclick = showLinks;
contactButton.onclick = showContact;
