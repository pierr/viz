var dataset = [ [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];
var w = 800;
var h = 200;
var padding = 20;

var svg1 = d3.select("body")
			.append("svg")
			.attr("width" , w)
			.attr("height", h);
var circle1 = svg1.selectAll("circle")
				.data(dataset)
				.enter()
				.append("circle")
				.attr({
					cx: function(d) { return d[0];},
					cy: function(d) { return d[1];},
					r: 5
				});

var svg2 = d3.select("body")
			.append("svg")
			.attr("width" , w)
			.attr("height", h);

var xScale = d3.scale.linear()
					.domain([d3.min(dataset,function(d) { return d[0];}), d3.max(dataset, function(d){ return d[0];})])
					.range([0+padding,w-padding]);
var yScale = d3.scale.linear()
					.domain([d3.min(dataset,function(d) { return d[1];}), d3.max(dataset, function(d){ return d[1];})])
					.range([0+padding,h-padding]);

var circle2 = svg2.selectAll("circle")
					.data(dataset)
					.enter()
					.append("circle")
					.attr({
						cx: function(d) { return xScale(d[0]);},
						cy: function(d) { return yScale(d[1]);},
						fill: "red",
						r: function(d) { return Math.sqrt(d[1]);}
						});

/*var circle2 = svg2.selectAll("circle")
				.data(dataset)
				.enter(
				.append("circle")
				.attr({
					cx: function(d) { return d[0]; },
					cy: function(d) { return d[1]; },
					r: function(d) { return Math.sqrt(d[1]/10); }
				});*/