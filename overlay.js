/**
 * Overlay class
 * The class adds an overlay to the entire page
 * @author      Luis Tenorio
 * @copyright   Copyright (C) 2015 LuisTen <www.luisten.com>. All rights reserved.
 * @license     http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @description A simple and elegant jQuery overlay to display while waiting for AJAX queries. See the guide at http://www.luisten.com/blog/hypnotize-your-users-during-ajax-calls-with-this-js-overlay/
 */

function showOverlay() {
    // Adds the fullscreen overlay
    var oDiv = $("<div></div>");
    oDiv.attr("id", "lt_overlay");
    oDiv.css("display", "block");
    $("body").append(oDiv);

    // Adds the spinner
    var lDiv = $("<i></i>");
    lDiv.attr("id", "lt_loading");
    lDiv.addClass("fa fa-cog fa-spin fa-5x");
    lDiv.css("display", "block");
    $("body").append(lDiv);
}

function hideOverlay() {
    $("#lt_loading").remove();
    $("#lt_overlay").remove();
}