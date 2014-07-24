var dataSet = [1, 5, 10, 15, 20, 25, 44,7,0,32, 16, 44,1,17,8,19];
d3.select('#chart_example')
  .data(dataSet)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style('height', function(d){return d*5 +"px"});