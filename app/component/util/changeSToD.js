function changeStringToDate(strDate)
{
	var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ").parse;
	var date = parseDate(strDate);
	return date;
}

module.exports = {
changeStringToDate: changeStringToDate
};