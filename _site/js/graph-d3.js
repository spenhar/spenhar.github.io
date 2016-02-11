function InitChart() {
  var data = [{
      "sale": "5",
      "year": "1987"
  }, {
      "sale": "50",
      "year": "2002"
  }, {
      "sale": "40",
      "year": "2004"
  }, {
      "sale": "20",
      "year": "2006"
  }, {
      "sale": "90",
      "year": "2008"
  }, {
      "sale": "100",
      "year": "2015"
  }];
  var data2 = [{
      "sale": "1",
      "year": "1987"
  }, {
      "sale": "60",
      "year": "1995"
  }, {
      "sale": "70",
      "year": "2004"
  }, {
      "sale": "80",
      "year": "2006"
  }, {
      "sale": "90",
      "year": "2008"
  }, {
      "sale": "100",
      "year": "2016"
  }];

  var vis = d3.select("#visualisation"),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
      },
      xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1987, 2016]),
      yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([1, 100]),
      xAxis = d3.svg.axis()
      .scale(xScale),
      yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");

  vis.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);
  vis.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);
  var lineGen = d3.svg.line()
      .x(function(d) {
          return xScale(d.year);
      })
      .y(function(d) {
          return yScale(d.sale);
      })
      .interpolate("basis");
  vis.append('svg:path')
      .attr('d', lineGen(data))
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  vis.append('svg:path')
      .attr('d', lineGen(data2))
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
}
InitChart();
