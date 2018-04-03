/*
	Isabela Sobral
	GA JS-SF-10
*/

const hackerNews = 'h'
const guardianKey = '';
const guardian = "https://content.guardianapis.com/search?q=economy%20OR%20immigration%20business&tag=technology/technology&show-fields=all&from-date=2017-01-01&api-key=" + guardianKey; 
const dailyWtf = "https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/recent";


$('#popUp').removeClass('hidden');

//Hacker News Event Listener
const sourceOne = $("ul li ").eq(1);
$(sourceOne).on("click",function(){
	event.preventDefault();
	 $('#popUp').removeClass('hidden');
	 master();
});

//Guardian Event Listener
const sourceTwo = $("ul li ").eq(2);
$(sourceTwo).on("click",function(){
	event.preventDefault();
	 $('#popUp').removeClass('hidden');
	 pullGuardian();
});

//Daily WTF Event Listener
const sourceThree = $("ul li ").eq(3);
$(sourceThree).on("click",function(){
	event.preventDefault();
	 $('#popUp').removeClass('hidden');
	 pullDailyWtf();
});

//Pull HackerNews --- also Homepage
master();
function master(){
fetch(hackerNews).then(function(response){
	if(response.ok){
		return response.json();
	}
	//throw new Error('Not working, sorry');
}).then(function(data){
	console.log(data);
	return showHackerNews(data);
}).catch(function(){
	alert("Can't load Hacker News, please try another source");
})};

//Pull Guardian 
function pullGuardian(){
	fetch(guardian).then(function(response){
		if (response.ok){
			return response.json();
		}
	}).then(function(data){
		console.log(data);
		return showGuardian(data);
	}).catch(function(){
		alert("Can't load the Guardian, please try another source");
	})

};

//Pull Daily WTF 
function pullDailyWtf(){
	fetch(dailyWtf).then(function(response){
		if (response.ok){
			return response.json();
		}
	}).then(function(data){
		console.log(data);
		return showDailyWtf(data);
	}).catch(function(){
		alert("Can't load daily wtf, please try another source");
	})

};



//Show HackerNews Articles 
function showHackerNews(data){
	var hackerData = Object.values(data.hits);
	for (i in hackerData){
		$("section.featuredImage img").eq(i).attr('src', 'images/hackerNewsLogo.png');
		$( "section h3" ).eq(i).text(hackerData[i].title);
		$("section h3").eq(i).attr('id', i);
		$( "section h6" ).eq(i).text(hackerData[i]._tags[3]);
		$( "section h6" ).eq(i).attr('id', i + '-h6');
		$("section.impressions").eq(i).text(hackerData[i].num_comments);
		$('#popUp').addClass('hidden');
	}	
}



//Show Guardian Articles
function showGuardian(data){
	var guardian = Object.values(data.response.results);
	var guardianDesc = guardian[i].fields.standfirst;
	$(guardianDesc).attr("id", i + "-body");
	 for (i in guardian){
	 	$("section.featuredImage img").eq(i).attr('src', 'images/guardianLogo.png');
	 	$( "section h3" ).eq(i).text(guardian[i].webTitle);
	 	$( "section h6" ).eq(i).text(guardian[i].sectionName);
		$("section.impressions").eq(i).text(guardian[i].fields.wordcount);
	 	$('#popUp').addClass('hidden');
	 }	
}


//Show Daily WTF Articles
function showDailyWtf(data){
	var dailywtf = Object.values(data);
	 for (i in dailywtf){
	 	$("section.featuredImage img").eq(i).attr('src', 'images/dailywtfLogo.png');
	 	$( "section h3" ).eq(i).text(dailywtf[i].Title);
	 	$( "section h6" ).eq(i).text(dailywtf[i].Series.Title);
		$("section.impressions").eq(i).text(dailywtf[i].CachedCommentCount);
	 	$('#popUp').addClass('hidden');
	 }	
}

//Show Pop Up and populate contents
 $( "section.articleContent" ).on( "click", "h3", function(event) {
     event.preventDefault();
     $("#popUp").removeClass('loader hidden');
     let id = $(this).attr('id');
	 $("div.container h1").text($('#' +  id).text());;
	 $("div.container p").text($('#'+ ).text());
 });

//Close Pop Up
$("a.closePopUp").on("click", function(event){
	event.preventDefault();
	$("#popUp").addClass("loader hidden");
});

//Click on Feedr to take you to homepage
$("section.container h1").on("click",function(){
	 event.preventDefault();
	 $('#popUp').removeClass('hidden');
	 master();
});

//toggle search bar
$( "section#search a" ).click(function() {
	const searchBar = $("section#search");
  $(searchBar).toggleClass( "active" );
});

