//
// folding_game.js
// Paul Dodd
// 08/01/2014
//

var bInit = false;
function initGame()
{
    removeGameItems();
    // Add any other elements here.
    d3.selectAll(".gameMenuTopBar").style("visibility", "visible");
    d3.selectAll(".gameMenuItem").style("visibility", "visible");
    d3.select("#gameCounterText1").style("visibility", "visible");
    d3.select("#gameCounterNumber1").style("visibility", "visible");

    d3.selectAll(".gameMenuBoxItem").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxExCompletedText").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxExText").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxEx").style("visibility", "hidden");
}

function removeGame()
{
    d3.select(".gameSVG").remove();
    bInit = false;
}

function FoldingGame(Polyhedron, number){
    // initialize game environment
    removeFoldingMenu();
    initGame();
    // Get the sound effects.
    console.log("Audio = ",d3.select("body").selectAll("audio"))
    wrongSound = document.getElementById("wrongSound");
    wrongSound.onended=function(){console.log("pre-loading the audio."); wrongSound.load();};
    correctSound = document.getElementById("correctSound");
    correctSound.onended=function(){console.log("pre-loading the audio."); correctSound.load();};
    completeSound = document.getElementById("completeSound");
    completeSound.onended=function(){console.log("pre-loading the audio."); completeSound.load();};

    console.log("Welcome to the folding game.");
    var response = null;
    var width = 1400,
        height = 800,
        innerWidth =width,//= 800,
        innerHeight =height,//= 500,
        scale = 150,
        center = [innerWidth*0.25, innerHeight*0.33],
        fill = d3.scale.category20(),
        correct_edges = [],
        bGameOver = false;

    var file_url = "http://localhost:8000/data/"+Polyhedron+"Net"+number+".json";
    response = AJAX_JSON_Req( file_url );
    if(response != null){
        console.log("Found net with", response.Faces.length, "faces");
    }
    else{
        console.log("response is undefined." );
        return;
    }

    var net = response,
        polygons = [],
        pts = [],
        solution = [];

    var tverts = [];
    for(var v = 0; v < net.Vertices.length; v++){
        tverts[v] = [scale*net.Vertices[v][0]+center[0], scale*net.Vertices[v][1]+center[1]];
    }

    for(var v = 0; v < net.Gluing.length; v++){
        correct_edges.push(false);
    }

    for(var i = 0; i < net.Faces.length; i++){
        var verts = [],
            str = "";
        for(var j = 0; j < net.Faces[i].length; j++){
            verts[j] = [scale*net.Vertices[net.Faces[i][j]][0]+center[0], scale*net.Vertices[net.Faces[i][j]][1]+center[1]];
            str+= verts[j][0] +","+verts[j][1]+" ";
        }
        polygons[i] = d3.geom.polygon(verts);
        pts[i] = str;
        console.log("Area of face = ", polygons[i].area());
    }

    var nodes = [], ct = 0;

    for(var e = 0; e < net.Edges.length; e++){
        console.log(e, "is hinge?", net.Hinge[e])
        if( !net.Hinge[e] ){
            var v1 = net.Edges[e][0],
                v2 = net.Edges[e][1];
            nodes[ct] = {"x":(tverts[v1][0] + tverts[v2][0])/2.0,
                                     "y":(tverts[v1][1] + tverts[v2][1])/2.0,
                                     "fixed":true,
                                     "id":e};
            ct++;
        }
    }


    var game_node = {"x":0.0, "y":0.0, "fixed":true};
    console.log("game nodes", nodes);

    // mouse event vars
    var selected_node = null,
        selected_link = null,
        remove_link = null,
        mousedown_link = null,
        mousedown_node = null,
        mouseup_node = null;

    var outer = null,
        vis = null;
    // init svg
    if(!bInit)
    {
        outer = d3.select("body").append("svg")
            .attr("class", "gameSVG")
            .attr("width", width)
            .attr("height", height)  // pass these in later.
            .attr("pointer-events", "all")
            .attr("style", "background-color: #EDEDED");

        vis = outer.append('svg:g')
            .call(d3.behavior.zoom().on("zoom", rescale))
            .on("dblclick.zoom", null)
            .append('svg:g')
            .on("mousemove", mousemove)
            .on("mousedown", mousedown)
            .on("mouseup", mouseup);

        vis.append('svg:rect')
            .attr('width', innerWidth)
            .attr('height', innerHeight)
            .attr('fill', '#EDEDED');

        bInit = true;
    }
    else
    {
        outer = d3.select(".gameSVG");
        vis = d3.select("g");
    }

    for(var i = 0; i < pts.length; i++){
        vis.append("polygon")
            .attr("class", "polygon")
            .attr("points", pts[i])
            .attr("rx", 10)         // set the x corner curve radius
            .attr("ry", 10);        // set the y corner curve radius
    }

    // init force layout
    var force = d3.layout.force()
        .size([innerWidth, innerHeight])
        .nodes(nodes) // initialize with a single node
        .linkDistance(50)
        .charge(-200)
        .on("tick", tick);


    // line displayed when dragging new nodes
    var drag_line = vis.append("line")
        .attr("class", "drag_line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", 0);

    // get layout properties
    var nodes = force.nodes(),
        links = force.links(),
        node = vis.selectAll(".node"),
        link = vis.selectAll(".link");



    // add keyboard callback
    d3.select(window)
        .on("keydown", keydown);

    redraw();

// focus on svg
// vis.node().focus();
function removeWrongLink()
{
    console.log("Attempting to remove link.")
    var ndx = links.indexOf(remove_link)
    if(ndx > -1)
    {
        links.splice(ndx, 1);
    }
    else
    {
        console.log("could not find link")
    }
    remove_link = null;
    redraw();
    return true;
}
function mousedown() {
  if (!mousedown_node && !mousedown_link) {
    // allow panning if nothing is selected
    vis.call(d3.behavior.zoom().on("zoom"), rescale);
    return;
  }
}

function mousemove() {
  if (!mousedown_node) return;

  // update drag line
  drag_line
      .attr("x1", mousedown_node.x)
      .attr("y1", mousedown_node.y)
      .attr("x2", d3.svg.mouse(this)[0])
      .attr("y2", d3.svg.mouse(this)[1]);

}

function mouseup() {
  if (mousedown_node) {
    // hide drag line
    drag_line
      .attr("class", "drag_line_hidden")
    //console.log("mouseup event is_node = ", mouseup_node)
    if (!mouseup_node) {
      // This now becomes a no-op.
//       var point = d3.mouse(this),
//           node = {x: point[0], y: point[1]},
//           n = nodes.push(node);

//       // select new node
//       selected_node = node;
//       selected_link = null;

//       // add link to mousedown node
//       links.push({source: mousedown_node, target: node});
    }
    else
    {
        //console.log("attempting to play sound...")
        newlink = {source: mousedown_node, target: mouseup_node};
        try{
            if(IsLinkCorrect(newlink))
            {
                //console.log("attempting to play correct sound...")
                correctSound.play();
            }
            else
            {
                //console.log("attempting to play wrong sound...")
                wrongSound.play();
            }
        }catch(t){console.log("error playing audio.")}
    }
    redraw();
  }
  // clear mouse event vars
  resetMouseVars();
}

function resetMouseVars() {
  mousedown_node = null;
  mouseup_node = null;
  mousedown_link = null;
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

// rescale g
function rescale() {
  trans=d3.event.translate;
  scale=d3.event.scale;

  vis.attr("transform",
      "translate(" + trans + ")"
      + " scale(" + scale + ")");
}

// redraw force layout
function redraw() {
  if ( IsGameComplete(links) && !bGameOver )
  {
      try{
          completeSound.play();
      }catch(t){}
      //alert("You won!");
      bGameOver = true;
      initGameEndMenu();
      removeGame();
//       window.location.href="folding_menu.html"
  }

  link = link.data(links);

  link.enter().insert("line", ".node")
      .attr("class", "link")
      .on("mousedown",
        function(d) {
          mousedown_link = d;
          if (mousedown_link == selected_link)
              selected_link = null;
          else
              selected_link = mousedown_link;
          selected_node = null;
          redraw();
        })

  link.exit().remove();

  link.classed("link_selected", function(d)  { return d === selected_link; })
      .classed("link_correct", function(d) {
                                  var bCorrect = (d !== selected_link && IsLinkCorrect(d))
                                  return bCorrect;
                               })
      .classed("link_wrong", function(d) {
                                  var bWrong = (d !== selected_link && !IsLinkCorrect(d));
                                  if( bWrong ){
                                      remove_link = d;
                                      d3.timer(removeWrongLink, 300)
                                  }
                                  return bWrong;
                               });

  node = node.data(nodes);

  node.enter().insert("circle")
      .attr("class", "node")
      .attr("r", 5)
      .on("mousedown",
        function(d) {
          // disable zoom
          vis.call(d3.behavior.zoom().on("zoom"), null);

          mousedown_node = d;
          if (mousedown_node == selected_node)
              selected_node = null;
          else
              selected_node = mousedown_node;
          selected_link = null;

          // reposition drag line
          drag_line
              .attr("class", "link")
              .attr("x1", mousedown_node.x)
              .attr("y1", mousedown_node.y)
              .attr("x2", mousedown_node.x)
              .attr("y2", mousedown_node.y);

          redraw();
        })
      .on("mousedrag",
        function(d) {
          // redraw();
        })
      .on("mouseup",
        function(d) {
          if (mousedown_node) {
            mouseup_node = d;
            if (mouseup_node == mousedown_node) { resetMouseVars(); return; }

            // add link
            var link = {source: mousedown_node, target: mouseup_node};
            links.push(link);

            // select new link
            selected_link = null;//link;
            selected_node = null;

            // enable zoom
            vis.call(d3.behavior.zoom().on("zoom"), rescale);
            redraw();
          }
        })
        .transition()
            .duration(750)
            .ease("elastic")
            .attr("r", 6.5);

    if(true){
        node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.id });
    }
  node.exit().transition()
      .attr("r", 0)
    .remove();

  node
    .classed("node_selected", function(d) { return d === selected_node; });



  if (d3.event) {
    // prevent browser's default behavior
    d3.event.preventDefault();
  }


  if(!remove_link)
  {
      d3.select("#gameCounterNumber1").text(String(correct_edges.length - links.length));
  }

  force.start();

}

function spliceLinksForNode(node) {
  toSplice = links.filter(
    function(l) {
      return (l.source === node) || (l.target === node); });
  toSplice.map(
    function(l) {
      links.splice(links.indexOf(l), 1); });
}

function keydown() {
  if (!selected_node && !selected_link) return;
  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: { // delete
      if (selected_node) {
        nodes.splice(nodes.indexOf(selected_node), 1);
        spliceLinksForNode(selected_node);
      }
      else if (selected_link) {
        links.splice(links.indexOf(selected_link), 1);
      }
      selected_link = null;
      selected_node = null;
      redraw();
      break;
    }
  }
}

function AJAX_JSON_Req( url )
{
    var response;
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, false );
    AJAX_req.setRequestHeader("Content-type", "application/json");

    AJAX_req.onreadystatechange = function()
    {
        console.log( "State:", AJAX_req.readyState," status:", AJAX_req.status );
        // note that
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200/*200*/ )
        {
            response = JSON.parse( AJAX_req.responseText );
            console.log( "Parsed json file !");
            console.log(response.Polyhedron + " " + response.NetId )
        }
    }
    console.log( "Sending request for file.");
    if(response != null)
    {
        console.log(response.Polyhedron + " " + response.NetId )
    }
    AJAX_req.send();
    return response;
}

function IsLinkCorrect( d )
{
    var bCorrect = false;
    for(var g = 0; g < net.Gluing.length && !bCorrect; g++)
    {
        if( (d.source.id == net.Gluing[g][0] && d.target.id == net.Gluing[g][1]) ||
            (d.source.id == net.Gluing[g][1] && d.target.id == net.Gluing[g][0]) )
        {
            bCorrect = true;
            correct_edges[g] = true;
        }
    }
    return bCorrect;
}

function IsGameComplete(links)
{
    var bComplete = links.length == correct_edges.length;
    for(var i = 0; i < correct_edges.length && bComplete; i++){
        bComplete = bComplete && correct_edges[i];
    }
    return bComplete;
}

}
