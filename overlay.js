/**
 * Overlay class
 * The class adds an overlay to the entire page
 * @author      Luis Tenorio
 * @copyright   Copyright (C) 2015 LuisTen <www.luisten.com>. All rights reserved.
 * @license     http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @description Based on the ItpOverlay function created by Todor Iliev <todor@itprism.com>
 */

function showOverlay() {
    // Adds an overlay
    var oDiv = $("<div></div>");
    oDiv.attr("id", "lt_overlay");
    oDiv.css("display", "block");
    $("body").append(oDiv);

    // Adds loading
    var lDiv = $("<i></i>");
    lDiv.attr("id", "lt_loading");
    lDiv.addClass("fa fa-cog fa-spin fa-5x");
    lDiv.css("display", "block");
    $("body").append(lDiv);
}

function hideOverlay() {
    // Remove the overlay
    $("#lt_loading").remove();
    $("#lt_overlay").remove();
}