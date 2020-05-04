<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
    <?php 
    
    bloginfo('name');
    if ( $current_post_title = get_the_title() ){
        echo ' | ' . $current_post_title;
    }
    ?></title>
    <?php wp_head(); ?>
</head>
<body>
<h1>
<?php 
    
    bloginfo('name');
    if ( $current_post_title = get_the_title() ){
        echo ' | ' . $current_post_title;
    }
    ?>
    </h1>

    <nav>
        <h2>Website Navigation (Main Menu)</h2>
        <?php wp_nav_menu( array( 
            'theme_location' => 'main_menu'
            ) ); ?>
    </nav>
</body>
</html>