/*function getMonthScale(startDate, endDate){
	var firstMonthDay = new Date(startDate.getFullYear(), startDate.getMonth(),1);
	var numMonth;

	// ici ajouter lastMonthDay
	if(firstMonthDay.getTime()!=startDate.getTime())
	{
		numMonth = d3.time.months(firstMonthDay,endDate,1);
	}
	else
	{
		numMonth= d3.time.months(startDate,endDate,1);
	}
	console.log(numMonth[0],numMonth[numMonth.length-1]);
	return numMonth;
}
module.exports = {
	getMonthScale: getMonthScale
};*/


// calculer le premier jour du mois pour la date début, et le prochain mois pour la date de fin.
/*
function getDateScale(startDate, endDate)
{
	var firstMonthDay = new Date(startDate.getFullYear(), startDate.getMonth(),1);
	var nextMonthDay = d3.time.month.offset(endDate,1);
	return {
		firstMonthDay: firstMonthDay,
		nextMonthDay: nextMonthDay
	};
}
*/

function getDateScale(startDate, endDate)
{
	var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;
	var startD = parseDate(startDate);
	var endD = parseDate(endDate);
	var firstMonthDay = new Date(startD.getFullYear(), startD.getMonth(),1);
	var nextMonthDay = d3.time.month.offset(endD,1);
	return {
		firstMonthDay: firstMonthDay,
		nextMonthDay: nextMonthDay

	};
}
module.exports = {
	getMonthScale: getDateScale
};