/**
 * **
 * @param  {[json object]} element [element is the data of one "job" which contains several tasks]
 * @param  {[number]} days    [days is the number of days that we wish to move the job forward or back]
 * @return {[json object]}         [returns the new data json object of one job]
 */
function shiftDate(element, days)
{
	/*elementStartDate = d3.time.day.offset(element.startDate,days);
	elementEndDate = d3.time.day.offset(element.endDate, days);
	var tStartDate = [];
	var tEndDate = [];
	for(var i =0 ; i<newElement.tasks.length ; i++){
		newElement.tasks[i].tStartDate = d3.time.day.offset(element.tasks[i].tStartDate);
		newElement.tasks[i].tEndDate = d3.time.day.offset(element.tasks[i].tEndDate);
	}
	return {
		elementStartDate : elementStartDate,
		elementEndDate: elementEndDate,
		taskStartDate: tStartDate,
		taskEndDate: tEndDate
	};*/

	var newElement = element;
	for(var i =0 ; i<element.tasks.length ; i++){
		newElement.tasks[i].tStartDate = d3.time.day.offset(element.tasks[i].tStartDate, days);
		newElement.tasks[i].tEndDate = d3.time.day.offset(element.tasks[i].tEndDate,days);
	}
	return newElement;
}

module.exports = {
	shiftDate : shiftDate
};