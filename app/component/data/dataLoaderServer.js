function dataRequest(){
	console.log("bbbbbbb");
	var element;
	var dataLoader =
	{
		url: 'http://localhost:7777/job',
		type:'GET',
		dataType: 'JSON',
		cache: false,
		timeOut: 1000,
		async:false,                     // here is a synchronous request.
		success: function(data)
		{
			element = data;
		},
		error: function(){
			alert("error!");
		}
	};
	$.ajax(dataLoader);
	return element;
}
module.exports = {
	dataRequest: dataRequest
};
