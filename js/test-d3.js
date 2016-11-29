var data = [{
  "label": "Recommended",
  "value": 60
}, {
  "label": " You",
  "value": 60
}, {
  "label": "Peers",
  "value": 40
}];
var color = d3.scale.ordinal().range(["#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 420]);



d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  // .attr("width",400)
  // .attr("depth",400)
  .style("width", function(d) {
    return d.value + "px";
  })
  .style("background-color", function(d, i) {
    return color(i);
  })
  .text(function(d, i) {
    return data[i].label;
  });
