<?php
  $randomFactJSONString = file_get_contents( 'https://cat-fact.herokuapp.com/facts');
  // Convert the response to a PHP object.
  $randomFactObject = json_decode( $randomFactJSONString );
  // Collect the first user in the results array.
  $randomFact = $randomFactObject->all;
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External API PHP Test</title>
</head>
<body>
  <h1>Animal Facts</h1>
  <dl>
    <dt>Fact</dt>
    <dd>
    <?php 
      echo "<ul>";
      foreach ($randomFact as $fact) {
      echo "<li>$fact->text</li>";
      }
      echo "</ul>";
      ?>
    </dd>
  </dl>
</body>
</html>