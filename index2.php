<?php // include_once is used to ensure this code is not included/run multiple times.
// In the case of a class declaration, it would cause an error to run multiple times!
class Read
{
  // Properties.
  private $allArticles = array();

  // Methods.

  function __construct ( $jsonFilePath = '' )
  { // Check if the file exists.
    if ( file_exists( $jsonFilePath ) )
    { // Will retrieve the file contents as a string.
      $jsonString = file_get_contents( $jsonFilePath );
      // Convert the JSON string to a PHP object.
      $jsonObject = json_decode( $jsonString );
      // Check if the "articles" are an array.
      if ( is_array( $jsonObject->articles ) )
      { // Store the array in our property.
        $this->allArticles = $jsonObject->articles;
      }
      // If articles are NOT an array.
      else
      { // Show a warning in the browser.
        echo '<p>WARNING: The articles appear to be malformed!</p>';
      }
    }
    // If file doesn't exist.
    else
    { // Show a warning in the browser.
      echo '<p>WARNING: Your file doesn\'t exist!</p>';
    }
  }

  public function getJSON()
  {
      return $this->allArticles;
  }
}

class Output {

    private $output = '';

    function __construct ( $allArticles )
  { // Check if the file exists.
    if (is_array($allArticles)){
        $this->output = $allArticles;
    }
  }
  // Output all of the articles.
  public function output ()
  { // If there ARE articles.
    if ( is_array( $this->output ) && !empty( $this->output ) )
    { // Heading, and open our unordered list.
      echo '<h2>Articles</h2><ul>';
      // Loop through the articles!
      foreach ( $this->output as $article )
      { // Create an instance of our OTHER class: Article! Pass in the values.
        
        // Echo out our result.
        echo '<li>'.$article->id.'</li>';
        echo '<li>'.$article->title.'</li>';
        echo '<li>'.$article->content.'</li>';
      } // Close the unordered list.
      echo '</ul>';
    }
  }
}

$read = new Read(dirname( __FILE__ ) . '/data/oop-and-file.json');
$out = new Output($read->getJSON());

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php $out->output() ?>
</body>
</html>