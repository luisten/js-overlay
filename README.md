# js-overlay
A tiny jQuery and CSS overlay script to provide better UX during AJAX callbacks.
Credit given where credit is due. This script is based on the Javascript 
ItpOverlay function created by Todor Iliev (todor@itprism.com).

To make sure that the script works on your page, you have to include the jQuery 
and Font-Awesome references in your header.

====================  jQuery Reference  ====================
Include the following:
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


=================  Font Awesome Reference  ================= 
Include the following:
<link rel="stylesheet" id="font-awesome-css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css?ver=4.2.3" type="text/css" media="all">

If you're using WordPress, use the following snippet in your PHP file:
/**
 * Load Font Awesome CSS
 */
add_action( 'wp_enqueue_scripts', 'enqueue_font_awesome' );
function enqueue_font_awesome() {
	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' );
}



====================  HOW TO USE  =====================
Make sure that you included the jQuery and Font-Awesome references in your 
page's header.

The overlay can be shown by simply calling showOverlay() at any moment and then 
hidden using hideOverlay().

To best integrate this with your AJAX calls, use the following structure:
$.ajax({
    url : <the URL that will process your call>,
    type : <POST or GET>,
    data : {
            key1: value,
            key2: value,
            key3: value
    },
    beforeSend : function() { showOverlay(); },
    success : function( response ) { 
        hideOverlay();
        <...your code...>
    },
    error : function() {
        hideOverlay();
        <...your code...>
    }
});

By using showOverlay() in the beforeSend option you guarantee that the entire
page will be blocked with the overlay while the call is being processed. Then 
include hideOverlay() both on the success and error options to make sure your
page doesn't seem to be eternally stuck in the call.

Alternatively, you can call the showOverlay() and hideOverlay() functions before 
and after the actual AJAX call.