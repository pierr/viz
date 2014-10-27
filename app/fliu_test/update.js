var w = 800;
var h = 200;
var dataset =[5,10,25,30,80,60,45,20];

var click = d3.select("body")
				.append("p")
				.text("click here to change the graph");

var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height",h);

var xScale = d3.scale.ordinal()
				.domain(d3.range(dataset.length))
				.rangeRoundBands([0,w],0.05);

var yScale = d3.scale.linear()
				.domain([0,d3.max(dataset)])
				.range([0, h]);

var bars = svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr({
				x: function(d,i) { return xScale(i);},
				y: function(d) { return h-yScale(d);},
				width: xScale.rangeBand(),
				height: function(d) { return yScale(d); },
				fill: function(d) { return "rgb("+(200+d)+",128,128)";}
			});

d3.select("p")
	.on("click", function(){
		// to create a random data array
		var numValues = dataset.length;
		dataset = [];
		for(var i = 0 ;i < numValues; i++)
		{
			var newNumber = Math.floor(Math.random()*25);
			dataset.push(newNumber);
		}

		svg.selectAll("rect")
			.data(dataset);
	});