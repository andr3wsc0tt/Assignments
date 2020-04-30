<?php
<<<<<<< HEAD
  session_start(); // BEFORE ANY OUTPUT, YOU MUST DECLARE IF YOU'D LIKE TO USE SESSION.

  // Let's check if our SESSION entry exists...
  if ( !isset( $_SESSION['tasks'] ) )
  { // If it DOESN'T exist, let's make a default value (this way we can array_push to it later!)    
    $_SESSION['tasks'] = array();
  }

  if ( !isset( $_SESSION['complete'] ) )
  { // If it DOESN'T exist, let's make a default value (this way we can array_push to it later!)    
    $_SESSION['complete'] = array();
  }

  $_SESSION['tasks'] = array_values( $_SESSION['tasks'] );
  $_SESSION['complete'] = array_values( $_SESSION['complete'] );

  if ( isset( $_POST ) && !empty( $_POST ) ) // Making sure SOMETHING was submitted.
  {
    $newTask = $_POST['addTask'];
    unset($_POST['addTask']);
    $_SESSION['tasks'][$newTask] = $newTask;

    if ( isset( $_POST['reset'])) {
      $_SESSION['tasks'] = array();
      $_SESSION['complete'] = array();
      session_destroy();
    }

    if ( isset( $_POST['task'])) {
      $completeTask = $_POST['task'];

      $key = array_search($completeTask, array_values($_SESSION['tasks']));

      unset($_SESSION['tasks'][$key]);
      unset($_SESSION['tasks'][""]);
      $_SESSION['complete'][] = $completeTask;

    }
  }

=======
  // This file's code will execute right here in the file.
  include './includes/datatypes.php';
>>>>>>> c34cde428d633cd4f2ea4d6e69fe167cd4d83f89
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<<<<<<< HEAD
  <title>PHP Assignment</title>
  
</head>
<body>
  <h1>PHP Form Handling</h1>
  <h2>Task</h2>
  <p>
    <?php echo $message; // Output our "sign-in" related message. ?>
  </p>
  <form action="./index.php" method="POST"><?php // Forms can use GET or POST method. ?>
    <label for="newtask">
      Enter a new task
      <input type="text" name="addTask" id="newtask">
    </label>
    <input type="submit" value="Add to list">
    <input type="submit" name="reset" value="reset">
  </form>

  
  <?php if ( !empty( $_SESSION['tasks'] ) ) : $task=0; ?>
   
    <h2>Tasks</h2>

    <form action="./index.php" method="POST">
    <ul>
      <?php foreach ( $_SESSION['tasks'] as $interest ) : $task++ ?>
        <li>
        <label for="<?php echo "task$task"?>"><?php echo $interest; ?></label>
          <input type="checkbox" id="<?php echo "task$task"?>" name="<?php echo "task"?>" onchange="this.form.submit()" value="<?php echo $interest; ?>">
        </li>
      <?php endforeach; ?>
      </ul>
      </form>
  <?php endif; ?>
  

  <?php if ( !empty( $_SESSION['complete'] ) ) : $task=0; ?>
  <h2> Completed Tasks </h2>
  <form>
      <?php foreach ( $_SESSION['complete'] as $interest ) : $task++ ?>
        <li>
          
          <?php echo $interest; ?>
        </li>
      <?php endforeach; ?>
    </form>
  <?php endif; ?>
  
  <pre>
    <strong>$_POST contents:</strong>
    <?php var_dump( $_POST ); ?>
  </pre>
  <pre>
    <strong>$_SESSION contents:</strong>
    <?php var_dump( $_SESSION ); ?>
  </pre>
  
=======
  <title><?php echo $myMessage; // Echo is used for outputting strings. ?></title>
</head>
<body>
  <h1><?php echo $myMessage; ?></h1>
  <?php include './includes/navigation.php'; // We're executing this code right here... the nav will display. ?>
  <pre>
    <?php
      // Var dump is great for seeing what's inside!
      var_dump( $myOtherArray );
    ?>
  </pre>
  <h2>Concatenated String</h2>
  <p>
    <?php echo $concattedString; ?>
  </p>
  <h2>Difference Between Single and Double Quoted Strings</h2>
  <h3>Single Quoted</h3>
  <p>
    <?php echo $mySingleQuoteHelloString; ?>
  </p>
  <h3>Double Quoted</h3>
  <p>
    <?php echo $myDoubleQuoteHelloString; ?>
  </p>
>>>>>>> c34cde428d633cd4f2ea4d6e69fe167cd4d83f89
</body>
</html>