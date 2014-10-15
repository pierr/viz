var w = 1000;
var h = 300;
var barPadding = 25;

var dataset =[5,10,25,30,80,60,45,20];

var svg = d3.select("body")
			.append("svg")
			.attr("width",w)
			.attr("height",h);
var bars = svg.selectAll("rect")
				.data(dataset)
				.enter()
				.append("rect")
				.attr({
					x: function(d,i){ return i*(w/dataset.length);},
					y: function(d){ return h-d*3.5;},
					width: w/dataset.length - barPadding,
					height: function(d){ return d*3.5;},
					fill: function(d){ return "rgb("+(200+d)+",128,128)"; }
				});
var text = svg.selectAll("text")
				.data(dataset)
				.enter()
				.append("text")
				.text(function(d){
					return d;
				})
				.attr({
					x: function(d,i){
						return ((2*i*(w/dataset.length) + w/dataset.length - barPadding)/2);},
					y: function(d){
						return h - d*3.5+15;
					},
					fill: "white"}
					);