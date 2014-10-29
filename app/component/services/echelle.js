// la taille du SVG
var w = 960;
var h = 540;

// génération des données.

var gen = require('../data/dataLoader');
var element = gen.generate(5);

//appeler la méthod pour calcule de la durée.
var serviceJob = require('./serviceJob');
var duration = serviceJob.getDurationByJob(element);

//numbre de semaines
console.log("start date:"+duration[0]);
console.log("end date: "+duration[1]);


var firstMonth = duration[0].getMonth();   // 9 si le mois est Octobre
console.log("first Month:"+firstMonth);

// obtenir le premier jour de ce mois
var monthFirstDay = new Date(duration[0].getFullYear(),duration[0].getMonth(),1);
console.log("month first day is: "+monthFirstDay);

numMonth= d3.time.months(duration[0],duration[1],1);
console.log("before number month is:" +numMonth.length);

//comparer pour voir si la date debut est le debut de ce mois
if(monthFirstDay.getTime()!=duration[0])
{
	numMonth[0] = monthFirstDay;
}

console.log("after number month is:"+numMonth.length);

var xScale = d3.scale.ordinal()
				.domain(d3.range(numMonth.length))
				.rangeRoundBands([0, w],0.05);
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

svg.selectAll("rect")
	.data(numMonth)
	.enter()
	.append("rect")
	.attr("x", function(d,i){ return xScale(i);})
	.attr("y", 0)
	.attr("width", xScale.rangeBand())
	.attr("height", h)
	.attr("fill", "rgb(245,245,245)");  // chercher les valeurs de CSS couleur 
