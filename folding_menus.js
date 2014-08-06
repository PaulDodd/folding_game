// folding_menus.js

var shapeString = "",
    netid = 0;

function initFoldingMenu()
{
    var width = 1400,
        height = 800;

    console.log("Welcome to the folding menu.");

    var outer = d3.select("body").append("svg")
        .attr("class", "menuSVG")
        .attr("width", width)
        .attr("height", height)  // pass these in later.
        .attr("pointer-events", "all")
        .attr("style", "background-color: #EDEDED");

    var vis = outer.append('svg:g');

    vis.append('svg:rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#EDEDED');


//     d3.select("body").append("svg").attr("class", "menuSVG");
//     d3.select(".menuSVG")
//         .attr("width", width+"px")
//         .attr("height", height+"px")
//         //.attr("viewBox","0 0 "+width+" "+height)
//         .attr("pointer-events","all")
//         .attr("style","position: absolute; background-color: #EDEDED");

    console.log("Checkpoint");
    d3.select("body").append("div").attr("class", "menuTitle");
    d3.select(".menuTitle").append("div")
        .attr("class", "menuTitleText")
        .style("top", 0.1*height+"px")
        .style("right", 0.5*width+"px")
        .style("color", "#4682B4") //#4682B4
        .text("Fold");
    d3.select(".menuTitle").append("div")
        .attr("class", "menuTitleText")
        .style("top", 0.1*height+"px")
        .style("right", 0.45*width+"px")
        .text("It!");

    // Setup all buttons.
    d3.select("body").append("div").attr("class", "menuOptions");
    d3.select("body").append("div").attr("class", "menuOptionsText");

    var topPos = 200,
        rightPos = parseInt(0.52*width),
        offset = 60,
        sep = 40,
        pos = 0;

    // Tetrahedron button
    pos = topPos;
    d3.select(".menuOptions").append("div")
        .attr("class", "shapeOption")
        .attr("id", "tetrahedronButton")
        .style("top", pos+"px")
        .style("right", rightPos+"px")
        .text("Tetrahedron")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#4682B4")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                        shapeString = "Tetrahedron";
                        FoldingGame(shapeString, netid); });

    strText = "- 2 nets!";
    stringlen =strText.length;
    offset+=2;
    d3.select(".menuOptionsText").append("div")
        .attr("class", "shapeOptionText")
        .attr("id", "tetrahedronLabel")
        .style("top", pos+6+"px")
        .style("right", rightPos-offset-3.5*stringlen+"px")
        .text(strText);

    // Cube button
    pos += sep;
    d3.select(".menuOptions").append("div")
        .attr("class", "shapeOption")
        .attr("id", "cubeButton")
        .style("top", pos+"px")
        .style("right", rightPos+"px")
        .text("Cube")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#4682B4")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                         shapeString = "Cube";
                        FoldingGame(shapeString, netid); });

    strText = "- 11 nets!";
    stringlen =strText.length
    offset+=10;
    d3.select(".menuOptionsText").append("div")
        .attr("class", "shapeOptionText")
        .attr("id", "cubeLabel")
        .style("top", pos+6+"px")
        .style("right", rightPos-offset-3.5*stringlen+"px")
        .text(strText);

    // Octahedron Button
    pos += sep;
    d3.select(".menuOptions").append("div")
        .attr("class", "shapeOption")
        .attr("id", "octahedronButton")
        .style("top", pos+"px")
        .style("right", rightPos+"px")
        .text("Octahedron")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#4682B4")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                         shapeString = "Octahedron";
                        FoldingGame(shapeString, netid); });

    d3.select(".menuOptionsText").append("div")
        .attr("class", "shapeOptionText")
        .attr("id", "octahedronLabel")
        .style("top", pos+6+"px")
        .style("right", rightPos-offset-3.5*stringlen+"px")
        .text(strText);

    // Dodecahedron Button
    pos += sep;
    d3.select(".menuOptions").append("div")
        .attr("class", "shapeOption")
        .attr("id", "dodecahedronButton")
        .style("top", pos+"px")
        .style("right", rightPos+"px")
        .text("Dodecahedron")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#4682B4")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                         shapeString = "Dodecahedron";
                        FoldingGame(shapeString, netid); });

    strText = "- 43,380 nets!";
    stringlen =strText.length;
    offset+=25;
    d3.select(".menuOptionsText").append("div")
        .attr("class", "shapeOptionText")
        .attr("id", "dodecahedronLabel")
        .style("top", pos+6+"px")
        .style("right", rightPos-offset-3.5*stringlen+"px")
        .text(strText);

    // Icosahedron Button
    pos += sep;
    d3.select(".menuOptions").append("div")
        .attr("class", "shapeOption")
        .attr("id", "icosahedronButton")
        .style("top", pos+"px")
        .style("right", rightPos+"px")
        .text("Icosahedron")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#4682B4")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                         shapeString = "Icosahedron";
                        FoldingGame(shapeString, netid); });

    d3.select(".menuOptionsText").append("div")
        .attr("class", "shapeOptionText")
        .attr("id", "icosahedronLabel")
        .style("top", pos+6+"px")
        .style("right", rightPos-offset-3.5*stringlen+"px")
        .text(strText);
    // Game menu
        // todo.
    // End game menu.
//     var widthEnd = 500,
//         heightEnd = 300;
//     var outerEnd = d3.select("body")//.append("div").attr("class", "endMenus")
//         .append("svg")
//         .attr("class", "endMenuSVG")
//         .attr("width", widthEnd)
//         .attr("height", heightEnd)  // pass these in later.
//         //.attr("viewBox", Math.round((width-widthEnd)/2)+" "+10+" "+widthEnd+" "+heightEnd)
//         .attr("pointer-events", "all")
//         .attr("style", "background-color: #707070")
//         .attr("top", 10+"px")
//         .attr("right", Math.round((width-widthEnd))+"px")



//     var visEnd = outerEnd.append('svg:g');

//     visEnd.append('svg:rect')
//         .attr("id", "endSVGMenu")
//         .attr('width', widthEnd*0.98)
//         .attr('height', heightEnd*0.98)
//         .attr('fill', '#4682B4');

//     outerEnd.style("visibility", "hidden");
//     visEnd.style("visibility", "hidden");
    d3.select("body").append("div").attr("class", "gameMenuBox")
    d3.select(".gameMenuBox").append("div").attr("class", "gameMenuBoxItem").attr("id", "endBox").text("next net >")
        .on("click", function() {

            netid++;
            if(netid <= getMaxNetId(shapeString) ){
                console.log("going to ", shapeString + netid);
                FoldingGame(shapeString, netid);
            }
            else
            {
                console.log("maxed out")
            }
        }).on("mouseover", function() {
            d3.select(this).style("color", "#FFD452")
        }).on("mouseout", function() {
            d3.select(this).style("color", "white")
        })
    d3.selectAll(".gameMenuBox").style("visibility", "hidden");
    d3.select("body").append("div").attr("class", "gameMenuBoxEx")

    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxExCompletedText").attr("id", "messgage").text("Level Complete!");
    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxExText").attr("id", "messgage").text("Well done foldster! You figured out which edges to glue together to make the shape fold.");
    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxItem").attr("id", "nextNetOption").text("< try another >")
        .on("click", function() {

            netid++;
            if(netid <= getMaxNetId(shapeString) ){
                console.log("going to ", shapeString + netid);
                FoldingGame(shapeString, netid);
            }
            else
            {
                console.log("maxed out")
            }
        }).on("mouseover", function() {
            d3.select(this).style("color", "#E83C44")
        }).on("mouseout", function() {
            d3.select(this).style("color", "white")
        })

    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxItem").attr("id", "homeOption").text("< home >").style("float", "left").style("left", "30px")
        .on("click", function() {
            window.location.href="folding_menu.html"
        }).on("mouseover", function() {
            d3.select(this).style("color", "#E83C44")
        }).on("mouseout", function() {
            d3.select(this).style("color", "white")
        })
    d3.selectAll(".gameMenuBoxItem").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxExCompletedText").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxExText").style("visibility", "hidden");
    d3.selectAll(".gameMenuBoxEx").style("visibility", "hidden");
}

function removeFoldingMenu()
{
    d3.select(".menuSVG").remove();
    d3.selectAll(".menuTitleText").remove();
    d3.selectAll(".menuOptionsText").remove();
    d3.selectAll(".shapeOption").remove();
}

function initGameEndMenu() {
    console.log("init end game menus");
    // hide all game menus.
    d3.select(".gameSVG").select("g").selectAll(".node").remove();
    d3.select(".gameSVG").select("g").selectAll(".link").remove();
    d3.select(".gameSVG").select("g").selectAll(".polygon").remove();
    // show all end menus
    d3.selectAll(".gameMenuBoxItem").style("visibility", "visible");
    d3.selectAll(".gameMenuBoxExCompletedText").style("visibility", "visible");
    d3.selectAll(".gameMenuBoxExText").style("visibility", "visible");
    d3.selectAll(".gameMenuBoxEx").style("visibility", "visible");

}

function getMaxNetId(shape)
{
    if(shape == "Tetrahedron")
        return 1;
    else if(shape == "Cube")
        return 10;
    else if(shape == "Octahedron")
        return 10;
    else if(shape == "Dodecahedron")
        return 43379;
    else if(shape == "Icosahedron")
        return 43379;

    return 0;
}





