<?php
/**
 * Plugin Name: Angie's Bespoke Post Pages
 * Plugin URI: http://souldeux.com
 * Description: Customizes the post page for ease-of-use by SBC contributors
 * Version: 1.0.0
 * Author: Nick Perry
 * Author URI: http://souldeux.com
 * License: GPL2
 */


function hide_stuff( $hook ) {
    if ( $hook != 'post.php' && $hook != 'post-new.php')
        return;
    wp_enqueue_script( 'hider_script', plugin_dir_url(__FILE__) . '/hider.js' );
}
add_action('admin_enqueue_scripts', 'hide_stuff')

?>