var dataSet = [1, 5, 10, 15, 20, 25];
d3.select("#dataSet_example")
  .selectAll("p")
  .data(dataSet)
  .enter()
  .append("p")
  .text(function(d) {
    return d;
  })
  .style("color", function(data) {
    return data > 15 ? "red" : "blue";
  });