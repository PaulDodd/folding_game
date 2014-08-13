// folding_menus.js

var shapeString = "",
    netid = 0;

function NextNet()
{
    netid++;
    if(netid <= getMaxNetId(shapeString) ){
        console.log("going to ", shapeString + netid);
        removeGame();
        FoldingGame(shapeString, netid);
    }
    else
    {
        console.log("maxed out");
        netid = getMaxNetId(shapeString);
    }
}

function PrevNet()
{
    netid--;
    if(netid >= 0 ){
        console.log("going to ", shapeString + netid);
        removeGame();
        FoldingGame(shapeString, netid);
    }
    else
    {
        console.log("min out");
        netid = 0;
    }
}

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

    strText = "- 5 of 11 nets!";
    stringlen =strText.length
    offset+=30;
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

//     // Dodecahedron Button
//     pos += sep;
//     d3.select(".menuOptions").append("div")
//         .attr("class", "shapeOption")
//         .attr("id", "dodecahedronButton")
//         .style("top", pos+"px")
//         .style("right", rightPos+"px")
//         .text("Dodecahedron")
//         .on("mouseover", function() {
//                          d3.select(this).style("color", "#4682B4")})
//         .on("mouseout", function() {
//                          d3.select(this).style("color", "#707070")})
//         .on("click", function() {
//                          shapeString = "Dodecahedron";
//                         FoldingGame(shapeString, netid); });

//     strText = "- 43,380 nets!";
//     stringlen =strText.length;
//     offset+=25;
//     d3.select(".menuOptionsText").append("div")
//         .attr("class", "shapeOptionText")
//         .attr("id", "dodecahedronLabel")
//         .style("top", pos+6+"px")
//         .style("right", rightPos-offset-3.5*stringlen+"px")
//         .text(strText);

//     // Icosahedron Button
//     pos += sep;
//     d3.select(".menuOptions").append("div")
//         .attr("class", "shapeOption")
//         .attr("id", "icosahedronButton")
//         .style("top", pos+"px")
//         .style("right", rightPos+"px")
//         .text("Icosahedron")
//         .on("mouseover", function() {
//                          d3.select(this).style("color", "#4682B4")})
//         .on("mouseout", function() {
//                          d3.select(this).style("color", "#707070")})
//         .on("click", function() {
//                          shapeString = "Icosahedron";
//                         FoldingGame(shapeString, netid); });

//     d3.select(".menuOptionsText").append("div")
//         .attr("class", "shapeOptionText")
//         .attr("id", "icosahedronLabel")
//         .style("top", pos+6+"px")
//         .style("right", rightPos-offset-3.5*stringlen+"px")
//         .text(strText);


    // Game menu
    d3.select("body").append("div").attr("class", "gameMenuTopBar")

    d3.select(".gameMenuTopBar").append("div")
        .attr("class", "gameMenuItem")
        .attr("id", "restartButton")
        .text("Prev Net")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#E83C44")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#FFFFFF")})
        .on("click", function() {
                         PrevNet(); });

    d3.select(".gameMenuTopBar").append("div")
        .attr("class", "gameMenuItem")
        .attr("id", "restartButton")
        .text("Main Menu")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#E83C44")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#FFFFFF")})
        .on("click", function() {
                         window.location.href="folding_menu.html"; });

    d3.select(".gameMenuTopBar").append("div")
        .attr("class", "gameMenuItem")
        .attr("id", "restartButton")
        .text("Next Net")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#E83C44")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#FFFFFF")})
        .on("click", function() {
                         NextNet(); });



    d3.select(".gameMenuTopBar").style("visibility", "hidden");
    d3.selectAll(".gameMenuItem").style("visibility", "hidden");

    d3.select("body").append("div").attr("id", "gameCounter");
    d3.select("#gameCounter").append("div")
        .attr("class", "gameCounterText")
        .attr("id", "gameCounterText1")
        .style("top", "100px")
        .style("left", "50px")
        .text("edges left")

    d3.select("#gameCounter").append("div")
        .attr("class", "gameCounterNumber")
        .attr("id", "gameCounterNumber1")
        .style("top", "130px")
        .style("left", "95px")
        .text("0")

    d3.select("#gameCounter").style("visibility", "hidden");

    // End game menu.
    d3.select("body").append("div").attr("class", "gameMenuBoxEx")

    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxExCompletedText").attr("id", "messgage").text("Level Complete!");
    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxExText").attr("id", "messgage").text("Well done! You figured out which edges to glue together to make the shape fold.");
    d3.select(".gameMenuBoxEx").append("div").attr("class", "gameMenuBoxItem").attr("id", "nextNetOption").text("< try another >")
        .on("click", function() {
            NextNet();
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

function removeGameItems()
{
    d3.selectAll(".gameMenuTopBar").style("visibility", "hidden");
    d3.selectAll(".gameMenuItem").style("visibility", "hidden");
    d3.select("#gameCounter").style("visibility", "hidden");
    d3.select("#gameCounterText1").style("visibility", "hidden");
    d3.select("#gameCounterNumber1").style("visibility", "hidden");

    d3.select(".gameSVG").select("g").selectAll(".node").remove();
    d3.select(".gameSVG").select("g").selectAll(".link").remove();
    d3.select(".gameSVG").select("g").selectAll(".polygon").remove();
}

function initGameEndMenu() {
    console.log("init end game menus");
    // hide all game menus.
    removeGameItems();
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
        return 4;
    else if(shape == "Octahedron")
        return 4;
    else if(shape == "Dodecahedron")
        return 43379;
    else if(shape == "Icosahedron")
        return 43379;

    return 0;
}






