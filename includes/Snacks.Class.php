<?php // include_once is used to ensure this code is not included/run multiple times.
// In the case of a class declaration, it would cause an error to run multiple times!
include_once dirname( __FILE__ ) . '/Snack.Class.php';
class Snacks
{
  // Properties.
  private $allSnacks = array();

  // Methods.

  function __construct ( $jsonFilePath = '' )
  { // Check if the file exists.
    if ( file_exists( $jsonFilePath ) )
    { // Will retrieve the file contents as a string.
      $jsonString = file_get_contents( $jsonFilePath );
      // Convert the JSON string to a PHP object.
      $jsonObject = json_decode( $jsonString );
      // Check if the "snacks" are an array.
      if ( is_array( $jsonObject->snacks ) )
      { // Store the array in our property.
        $this->allSnacks = $jsonObject->snacks;
      }
      // If snacks are NOT an array.
      else
      { // Show a warning in the browser.
        echo '<p>WARNING: The snacks appear to be malformed!</p>';
      }
    }
    // If file doesn't exist.
    else
    { // Show a warning in the browser.
      echo '<p>WARNING: Your file doesn\'t exist!</p>';
    }
  }

  // Output all of the snacks.
  public function output ()
  { // If there ARE snacks.
    if ( is_array( $this->allSnacks ) && !empty( $this->allSnacks ) )
    { // Heading, and open our unordered list.
      echo '<h2>Snacks List</h2><ul>';
      // Loop through the snacks!
      foreach ( $this->allSnacks as $snack )
      { // Create an instance of our OTHER class: Snack! Pass in the values.
        $newSnack = new Snack( $snack->name, $snack->price, $snack->type );
        // Echo out our result.
        echo '<li>'.$newSnack->output( FALSE ).'</li>';
      } // Close the unordered list.
      echo '</ul>';
    }
  }

  // Find a particular snack.
  public function findSnackByIndex ( $id = FALSE )
  { // Check if the submission is a number (integer.)
    if ( is_integer( $id ) )
    { // Check if the snack at this INDEX even EXISTS!?
      if ( isset( $this->allSnacks[$id] ) )
      { // Retrieve that snack from the array!
        $foundSnack = new Snack(
          $this->allSnacks[$id]->name,
          $this->allSnacks[$id]->price,
          $this->allSnacks[$id]->type
        );
        // Output that snack!
        $foundSnack->output();
      }
      // If the Snack is not found...
      else
      { // Output a warning for the user.
        echo '<p>Sorry, we couldn\'t find a snack at ID: '.$id.'!</p>';
      }
    }
    // No ID, or an invalid ID was passed.
    else
    { // Output a warning for the user.
      echo '<p>No ID, or an invalid ID was passed; unable to find snack for ID: '.$id.'.</p>';
    }
  }
}