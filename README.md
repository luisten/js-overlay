# js-overlay
A tiny jQuery and CSS overlay script to provide better UX during AJAX callbacks.

This script is based on the Javascript ItpOverlay function created by Todor Iliev (todor@itprism.com).

For a complete guide visit [http://www.luisten.com/blog/hypnotize-your-users-during-ajax-calls-with-this-js-overlay/](http://www.luisten.com/blog/hypnotize-your-users-during-ajax-calls-with-this-js-overlay/)

To make sure that the script works on your page, you have to include the jQuery 
and Font-Awesome references in your header.

###jQuery Reference
`<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>`



###Font-Awesome Reference
`<link rel="stylesheet" id="font-awesome-css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css?ver=4.2.3" type="text/css" media="all">`

If you're using WordPress, use the following snippet in your PHP file:

```
add_action( 'wp_enqueue_scripts', 'enqueue_font_awesome' );
function enqueue_font_awesome() {
	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' );
}
```


##HOW TO USE
Make sure that you included the jQuery and Font-Awesome references in your 
page's header.

The overlay can be shown by simply calling `showOverlay()` at any moment and then 
hidden using `hideOverlay()`.

To use it with an AJAX call, use `showOverlay()` in the beforeSend option and 
`hideOverlay()` in the success and error options.