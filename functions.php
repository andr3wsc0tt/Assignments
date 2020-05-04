<?php

add_action( 'wp_enqueue_scripts', function() {

    wp_enqueue_script( 
        'example-theme-scripts',
        get_theme_file_uri(
            './assets/js/scripts.js'
        ),
        array(),
        strftime(get_theme_file_uri(
            './assets/js/scripts.js'
        ) ),
        TRUE
    );

    wp_enqueue_style(
        'example-theme-styles',
        get_theme_file_uri(
            './assets/css/main.css'
        )
    );

} );
register_nav_menus(
    array(
        'main_menu' => 'Main Menu'
    )
);