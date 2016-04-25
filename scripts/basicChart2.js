function createBasicChart2(){
  
  var chart;
  
  nv.addGraph(function(){
  //Create chart
    chart = nv.models.scatterChart()
              .showLegend(true)                      // Show legend
              .showDistX(true)                       // Show X axis
              .showDistY(true)                       // Show Y axis
              .useVoronoi(true)                      // enable hovering on points
              .color(d3.scale.category10().range())  //Colormap
              .duration(500);                        // Fade in duration


    data = [{key: "Blue Points", values:[{x:0,y:0},{x:1.5,y:1}, {x:3, y:3}, {x:3, y:10}]}];

    // Axes tick format
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    // Number of ticks on axes
    chart.yAxis.ticks(10)
    chart.yAxis.ticks(5)

    // Add axes to html
    d3.select("#basicChart2").datum(data).call(chart)
    nv.utils.windowResize(chart.update);
    chart.dispatch.on('stateChange', function(e) { ('New State:', JSON.stringify(e)); });
    return chart

  });
}