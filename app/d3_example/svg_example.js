var dataSet = [1, 5, 10, 15, 20, 25, 44, 7, 0, 32, 16, 44, 1, 17, 8, 19];
var config = require('../config');
var w = config.svg.width,
  h = config.svg.height;

var svg = d3.select('#svg_example')
            .append("svg")
            .attr("width", w)
            .attr("height", h);