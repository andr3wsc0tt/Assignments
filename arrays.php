<?php
  /**
   * Indexed arrays.
   */
  // Assignment.
  $myIndexedArray = array( 'Dog', 'Cat', 'Fish', 'Bird' );
  // Selecting the "second" item (square brackets with the INDEX #1.)
  $secondItem = $myIndexedArray[1]; // "Cat"
  // Adding a new element to our INDEXED array.
  $myIndexedArray[] = 'Lizard';

  /**
   * Associative arrays.
   */
  // Assignment (notice the fat arrow used for key => value pairing.)
  $myAssociativeArray = array(
    'name'      => 'Bob',
    'age'       => 36,
    // An array in an array makes this MULTIDIMENSIONAL.
    'interests' => array( // Notice, this is an INDEXED array INSIDE our ASSOCIATIVE ARRAY.
      'PHP',
      'JavaScript',
      'Hiking'
    )
  );
  // Retrieve specific value (square brackets with the KEY name.)
  $bobAge = $myAssociativeArray['age']; // 36
  // Add a new key/value pair to an EXISTING array.
  $myAssociativeArray['occupation'] = 'Programmer';
  // Get a specific interest.
  $secondInterest = $myAssociativeArray['interests'][1]; // "JavaScript"
  // Add a new interest.
  $myAssociativeArray['interests'][] = 'HTML';
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Arrays</title>
</head>
<body>
  <h1>PHP Arrays</h1>
  <?php include './includes/navigation.php'; ?>
  <h2>Indexed Array</h2>
  <ul>
    <?php foreach ( $myIndexedArray as $animal ) : ?>
      <li>
        <?php echo( $animal ); ?>
      </li>
    <?php endforeach; ?>
  </ul>
  <h2>Associative Array</h2>
  <dl>
      <?php foreach ( $myAssociativeArray as $key => $value ) { // We can call upon KEY and VALUE at once in our loop! Note the fat arrow syntax. ?>
        <dt><?php echo( $key ); // This array element's Key. ?></dt>
        <dd>
          <?php
            // Checking if this is the interests (or another) array.
            if ( is_array( $value ) )
            { // Output each element in the array.
              foreach ( $value as $element )
              {
                echo $element . ', ';
              }
            }
            else
            { // Display the string / integer value, otherwise.
              echo( $value ); // This array element's Value.
            }
          ?>
        </dd>
      <?php } // Ends our foreach. ?>
  </dl>
</body>
</html>