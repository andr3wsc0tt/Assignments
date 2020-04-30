<?php
  /**
   * DEBUG error reporting!
   * !!! REMOVE BEFORE PUSHING TO PROD !!!
   */
  ini_set( 'display_errors', 1 );
  ini_set( 'display_startup_errors', 1 );
  error_reporting( E_ALL );
  /**
   * A basic object.
   */
  $myObject = new stdClass(); // "new" keyword is REQUIRED when making an object from a CLASS (or BLUEPRINT.)
  // To add a property to our object, we use the -> arrow syntax.
  $myObject->name      = 'Jim Bob-Bob';
  $myObject->age       = 41;
  $myObject->interests = array( 'PHP', 'CSS' );
  /**
   * Include our class / blueprint file, so we can use our class.
   */
  include './includes/Snack.Class.php';
  // Let's make a snack...
  $cheetos       = new Snack( 'Cheetos', 3.99, 'Chip' );
  $gushers       = new Snack( 'Fruit Gushers', 2.56, 'Fruit' );
  $jollyRanchers = new Snack( 'Jolly Ranchers', 1.25, 'Fruit' );
  $sharwarma     = new Snack( 'Sharwarma', 7.86, 'Wrap' );
  // Let's throw them in an array for easy output...
  $snacks = array( $cheetos, $gushers, $jollyRanchers, $sharwarma );
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP OOP</title>
</head>
<body>
  <h1>PHP OOP</h1>
  <?php include './includes/navigation.php'; ?>
  <h2>$myObject dump:</h2>
  <pre><?php var_dump( $myObject ); ?></pre>
  <h2>Snacks</h2>
  <?php if ( count( $snacks ) > 0 ) : ?>
    <ul>
      <?php foreach ( $snacks as $snack ) : ?>
        <li>
          <?php $snack->output( TRUE ); // Run our method! It echoes the snack for us :) ?>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</body>
</html>