var data = [{
  type: "sunburst",
  labels: ["ASdependency", "AS22241","AS50855", "AS7843", "AS20001", "AS1299","AS29049", "AS41689", "AS43754", "AS50810",
            "AS59158", "AS131275","AS38193", "AS38264", "AS58553", "AS262213",
           
           "AS4800", 
           
           "AS3356", "AS3549"],
  parents: ["", "ASdependency", "ASdependency","AS22241", "AS22241", "AS22241","AS50855","AS50855","AS50855","AS50855", "ASdependency", "ASdependency","AS59158","AS59158","AS131275","AS131275", "ASdependency", "ASdependency" ],
  values:  [10, 14, 12, 10, 2, 6, 6, 5, 5, 3, 5, 7, 8, 9, 8, 8, 4, 3],
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

var layout = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  width: 500,
  height: 500
};


Plotly.newPlot('myDiv', data, layout);
