// home_menu.js
// definitions to set up the home page.
function initHomeMenu(){
    console.log("Initailizing home menu");
    d3.select("body").append("svg").attr("class", "homeSVG");
    d3.select(".homeSVG")
        .attr("width", "100%")
        .attr("height", "87.5%")
        .attr("viewBox","0 0 950 673")
        .attr("pointer-events","all")
        .attr("style","position: absolute; background-color: #EDEDED");


    d3.select("body").append("div").attr("class", "homeTitle");
    d3.select(".homeTitle").append("div")
        .attr("class", "homeTitleText")
        .style("top", "100px")
        .style("left", "400px")
        .style("fill", "#707070")
        .text("Fold It!");
    // Setup all buttons.
    d3.select("body").append("div").attr("class", "homeOptions");

    // Play button
    d3.select(".homeOptions").append("div")
        .attr("class", "homeOptionItem")
        .attr("id", "playButton")
        .style("top", "315px")
        .style("left", "305px")
        .text("< Play Game >")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#2692F2")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                        console.log("Play button was clicked");
                        window.location.href = "folding_menu.html" });
    // Play button
    d3.select(".homeOptions").append("div")
        .attr("class", "homeOptionItem")
        .attr("id", "backgroundButton")
        .style("top", "365px")
        .style("left", "305px")
        .text("< Background >")
        .on("mouseover", function() {
                         d3.select(this).style("color", "#2692F2")})
        .on("mouseout", function() {
                         d3.select(this).style("color", "#707070")})
        .on("click", function() {
                         console.log("background button was clicked");});

}
function removeHomeMenu()
{
    d3.select(".homeSVG").remove();
    d3.select(".homeTitleText").remove();
    d3.selectAll(".homeOptionItem").remove();
}

// function initMainMenu(){
//     console.log("Initailizing main menu");
//     d3.select("body").append("div").attr("class", "newGameHeader").text("NEW GAME");
//     d3.select("body").append("div").attr("class", "difficultySelection");
//     d3.select(".difficultySelection").append("div").attr("class", "difficultyHeader").text("DIFFICULTY");
//     // Easy button
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "difficultyItem")
//                                         .attr("id", "difficultyEasy")
//                                         .text("Easy")
//                                         .on("mouseover", function() {
//                                                          d3.select(this).style("color", "#2692F2")})
//                                         .on("mouseout", function() {
//                                                          d3.select(this).style("color", "#707070")})
//                                         .on("click", function() {
//                                                          difficultyString = "easy", initBasicGame(difficultyString)});

//     d3.select(".difficultySelection").append("div").attr("class", "easyHi")
//                                         .style("position", "absolute")
//                                         .style("top", "85px")
//                                         .style("left", "100px")
//                                         .style("color", "#BABABA")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "500")
//                                         .style("font-size", "20px").text("");
//     // Medium button
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "difficultyItemGrey")
//                                         .attr("id", "difficultyMedium")
//                                         .text("Medium");

//     d3.select(".difficultySelection").append("div").attr("class", "mediumHi")
//                                         .style("position", "absolute")
//                                         .style("top", "133px")
//                                         .style("left", "152px")
//                                         .style("color", "#BABABA")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "500")
//                                         .style("font-size", "20px")
//                                         .text("");
//     // Hard button
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "difficultyItemGrey")
//                                         .attr("id", "difficultyHard")
//                                         .text("Hard");

//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "hardHi")
//                                         .style("position", "absolute")
//                                         .style("top", "182px")
//                                         .style("left", "100px")
//                                         .style("color", "#BABABA")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "500")
//                                         .style("font-size", "20px")
//                                         .text("");
//     // Custom button
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "difficultyItemGrey")
//                                         .attr("id", "difficultyCustom")
//                                         .text("Custom");

//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "gameOptionsHeader")
//                                         .text("GAME OPTIONS")
//                                         .style("position", "absolute")
//                                         .style("top", "35px")
//                                         .style("width", "200px")
//                                         .style("left", "600px")
//                                         .style("color", "#707070")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "700")
//                                         .style("font-size", "24px");

//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "networkDisplay")
//                                         .text("Network Display")
//                                         .style("position", "absolute")
//                                         .style("top", "100px")
//                                         .style("width", "200px")
//                                         .style("left", "600px")
//                                         .style("color", "#707070")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "300")
//                                         .style("font-size", "22px");
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "degreeToggleMenuTrue")
//                                         .text("Show Degree")
//                                         .style("position", "absolute")
//                                         .style("top", "125px")
//                                         .style("width", "200px")
//                                         .style("left", "600px")
//                                         .style("color", "#2692F2")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "500")
//                                         .style("font-size", "18px")
//                                         .style("cursor", "pointer")
//                                         .on("click", function() {
//                                                      d3.select(".degreeToggleMenuTrue")
//                                                          .style("color", "#2692F2")
//                                                          .style("font-weight", "500");
//                                                      d3.select(".degreeToggleMenuFalse")
//                                                          .style("color", "#BABABA")
//                                                          .style("font-weight", "300"), toggleDegree=!0});
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "degreeToggleMenuFalse")
//                                         .text("Hide Degree")
//                                         .style("position", "absolute")
//                                         .style("top", "125px")
//                                         .style("width", "200px")
//                                         .style("left", "725px")
//                                         .style("color", "#BABABA")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "300")
//                                         .style("font-size", "18px")
//                                         .style("cursor", "pointer")
//                                         .on("click", function() {
//                                                      d3.select(".degreeToggleMenuTrue")
//                                                          .style("color", "#BABABA")
//                                                          .style("font-weight", "300"), d3
//                                                          .select(".degreeToggleMenuFalse")
//                                                          .style("color", "#2692F2")
//                                                          .style("font-weight", "500"), toggleDegree=!1});
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "quarantineModeOptions")
//                                         .text("Quarantine Phase")
//                                         .style("position", "absolute")
//                                         .style("top", "165px")
//                                         .style("width", "200px")
//                                         .style("left", "600px")
//                                         .style("color", "#707070")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "300")
//                                         .style("font-size", "22px");
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "turnBasedTrue")
//                                         .text("Turn-based")
//                                         .style("position", "absolute")
//                                         .style("top", "190px")
//                                         .style("width", "200px")
//                                         .style("left", "600px")
//                                         .style("color", "#2692F2")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "500")
//                                         .style("font-size", "18px")
//                                         .style("cursor", "pointer")
//                                         .on("click", function() {
//                                                      d3.select(".turnBasedTrue")
//                                                          .style("color", "#2692F2").style("font-weight", "500");
//                                                      d3.select(".realTimeTrue").style("color", "#BABABA")
//                                                                                  .style("font-weight", "300"), speed=!1, vaxEasyHiScore==-1 / 0 || d3.select(".easyHi").text("(Best: " + vaxEasyHiScore + "%)"), vaxMediumHiScore==-1 / 0 || d3.select(".mediumHi")
//                                                                                  .text("(Best: " + vaxMediumHiScore + "%)"), vaxHardHiScore==-1 / 0 || d3.select(".hardHi").text("(Best: " + vaxHardHiScore + "%)")
//                                                     });
//     d3.select(".difficultySelection").append("div")
//                                         .attr("class", "realTimeTrue")
//                                         .text("Real-time")
//                                         .style("position", "absolute")
//                                         .style("top", "190px")
//                                         .style("width", "200px")
//                                         .style("left", "705px")
//                                         .style("color", "#BABABA")
//                                         .style("font-family", "Nunito")
//                                         .style("font-weight", "300")
//                                         .style("font-size", "18px")
//                                         .style("cursor", "pointer")
//                                         .on("click", function() {
//                                                      d3.select(".turnBasedTrue")
//                                                          .style("color", "#BABABA")
//                                                          .style("font-weight", "300");
//                                                      d3.select(".realTimeTrue")
//                                                          .style("color", "#2692F2")
//                                                          .style("font-weight", "500"), speed=!0, 0 > vaxEasyHiScoreRT ? d3.select(".easyHi").text("") : d3.select(".easyHi").text("(Best: " + vaxEasyHiScoreRT + "%)"), 0 > vaxMediumHiScoreRT ? d3.select(".mediumHi").text("") : d3.select(".mediumHi").text("(Best: " + vaxMediumHiScoreRT + "%)"), 0 > vaxHardHiScoreRT ? d3.select(".hardHi").text("") : d3.select(".hardHi").text("(Best: " + vaxHardHiScoreRT + "%)")
//                                                     });
// }

// function initBasicMenu() {
//     d3.select(".vaxLogoDiv").style("visibility", "visible"), d3.select(".vaxLogoDiv").style("left", "-12px"), d3.select("body").append("div").attr("class", "newGameHeader").text("NEW GAME"), d3.select("body").append("div").attr("class", "difficultySelection"), d3.select(".difficultySelection").append("div").attr("class", "difficultyHeader").text("DIFFICULTY"), d3.select(".difficultySelection").append("div").attr("class", "difficultyItem").attr("id", "difficultyEasy").text("Easy").on("mouseover", function() {
//         d3.select(this).style("color", "#2692F2")
//     }).on("mouseout", function() {
//         d3.select(this).style("color", "#707070")
//     }).on("click", function() {
//         difficultyString = "easy", initBasicGame(difficultyString)
//     }), d3.select(".difficultySelection").append("div").attr("class", "easyHi").style("position", "absolute").style("top", "85px").style("left", "100px").style("color", "#BABABA").style("font-family", "Nunito").style("font-weight", "500").style("font-size", "20px").text(""), d3.select(".difficultySelection").append("div").attr("class", "difficultyItemGrey").attr("id", "difficultyMedium").text("Medium"), d3.select(".difficultySelection").append("div").attr("class", "mediumHi").style("position", "absolute").style("top", "133px").style("left", "152px").style("color", "#BABABA").style("font-family", "Nunito").style("font-weight", "500").style("font-size", "20px").text(""), d3.select(".difficultySelection").append("div").attr("class", "difficultyItemGrey").attr("id", "difficultyHard").text("Hard"), d3.select(".difficultySelection").append("div").attr("class", "hardHi").style("position", "absolute").style("top", "182px").style("left", "100px").style("color", "#BABABA").style("font-family", "Nunito").style("font-weight", "500").style("font-size", "20px").text(""), d3.select(".difficultySelection").append("div").attr("class", "difficultyItemGrey").attr("id", "difficultyCustom").text("Custom"), d3.select(".difficultySelection").append("div").attr("class", "gameOptionsHeader").text("GAME OPTIONS").style("position", "absolute").style("top", "35px").style("width", "200px").style("left", "600px").style("color", "#707070").style("font-family", "Nunito").style("font-weight", "700").style("font-size", "24px"), d3.select(".difficultySelection").append("div").attr("class", "networkDisplay").text("Network Display").style("position", "absolute").style("top", "100px").style("width", "200px").style("left", "600px").style("color", "#707070").style("font-family", "Nunito").style("font-weight", "300").style("font-size", "22px"), d3.select(".difficultySelection").append("div").attr("class", "degreeToggleMenuTrue").text("Show Degree").style("position", "absolute").style("top", "125px").style("width", "200px").style("left", "600px").style("color", "#2692F2").style("font-family", "Nunito").style("font-weight", "500").style("font-size", "18px").style("cursor", "pointer").on("click", function() {
//         d3.select(".degreeToggleMenuTrue").style("color", "#2692F2").style("font-weight", "500"), d3.select(".degreeToggleMenuFalse").style("color", "#BABABA").style("font-weight", "300"), toggleDegree=!0
//     }), d3.select(".difficultySelection").append("div").attr("class", "degreeToggleMenuFalse").text("Hide Degree").style("position", "absolute").style("top", "125px").style("width", "200px").style("left", "725px").style("color", "#BABABA").style("font-family", "Nunito").style("font-weight", "300").style("font-size", "18px").style("cursor", "pointer").on("click", function() {
//         d3.select(".degreeToggleMenuTrue").style("color", "#BABABA").style("font-weight", "300"), d3.select(".degreeToggleMenuFalse").style("color", "#2692F2").style("font-weight", "500"), toggleDegree=!1
//     }), d3.select(".difficultySelection").append("div").attr("class", "quarantineModeOptions").text("Quarantine Phase").style("position", "absolute").style("top", "165px").style("width", "200px").style("left", "600px").style("color", "#707070").style("font-family", "Nunito").style("font-weight", "300").style("font-size", "22px"), d3.select(".difficultySelection").append("div").attr("class", "turnBasedTrue").text("Turn-based").style("position", "absolute").style("top", "190px").style("width", "200px").style("left", "600px").style("color", "#2692F2").style("font-family", "Nunito").style("font-weight", "500").style("font-size", "18px").style("cursor", "pointer").on("click", function() {
//         d3.select(".turnBasedTrue").style("color", "#2692F2").style("font-weight", "500"), d3.select(".realTimeTrue").style("color", "#BABABA").style("font-weight", "300"), speed=!1, vaxEasyHiScore==-1 / 0 || d3.select(".easyHi").text("(Best: " + vaxEasyHiScore + "%)"), vaxMediumHiScore==-1 / 0 || d3.select(".mediumHi").text("(Best: " + vaxMediumHiScore + "%)"), vaxHardHiScore==-1 / 0 || d3.select(".hardHi").text("(Best: " + vaxHardHiScore + "%)")
//     }), d3.select(".difficultySelection").append("div").attr("class", "realTimeTrue").text("Real-time").style("position", "absolute").style("top", "190px").style("width", "200px").style("left", "705px").style("color", "#BABABA").style("font-family", "Nunito").style("font-weight", "300").style("font-size", "18px").style("cursor", "pointer").on("click", function() {
//         d3.select(".turnBasedTrue").style("color", "#BABABA").style("font-weight", "300"), d3.select(".realTimeTrue").style("color", "#2692F2").style("font-weight", "500"), speed=!0, 0 > vaxEasyHiScoreRT ? d3.select(".easyHi").text("") : d3.select(".easyHi").text("(Best: " + vaxEasyHiScoreRT + "%)"), 0 > vaxMediumHiScoreRT ? d3.select(".mediumHi").text("") : d3.select(".mediumHi").text("(Best: " + vaxMediumHiScoreRT + "%)"), 0 > vaxHardHiScoreRT ? d3.select(".hardHi").text("") : d3.select(".hardHi").text("(Best: " + vaxHardHiScoreRT + "%)")
//     })
// }
// function initCustomMenu() {
//     d3.select(".difficultySelection").style("top", "40px"), d3.selectAll(".difficultyItem").remove(), d3.selectAll(".difficultyItemHighlight").remove(), d3.selectAll(".difficultyItemGrey").remove(), d3.selectAll(".difficultyCustom").remove(), d3.selectAll(".difficultyHeader").remove(), d3.select("#customMenuDiv").style("visibility", "visible"), d3.select("#customNodes").text("Nodes: " + parseInt($.cookie("customNodes"))), d3.select("#customDegree").text("Neighbors: " + parseInt($.cookie("customNeighbors")) + "ea."), d3.select("#customVaccines").text("Vaccines: " + parseInt($.cookie("customVaccines"))), d3.select("#customRefusers").text("Refusers: " + parseInt($.cookie("customRefusers"))), d3.select("#customOutbreaks").text("Outbreaks: " + parseInt($.cookie("customOutbreaks"))), d3.selectAll(".ui-state-default").style("background", "white"), d3.selectAll(".ui-corner-all").style("border-radius", "50px"), d3.select("#customMenuDiv").append("text").attr("class", "okayButton").text("OKAY").on("click", function() {
//         d3.select(this).remove(), d3.select(".vaxLogoDiv").remove(), initCustomGame()
//     })
// }

