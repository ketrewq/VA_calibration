<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
    <title>VA calibration</title>
    <link rel="stylesheet" type="text/css" href="main.css">
  </head>
  <body>
    <?php
    session_start();
    if(!isset($_SESSION['username'])){
      ?>
      <div class='header'>ARE YOU ADMIN?</div>
      <div class='card' style="flex-direction: column;">
        <p >관리자 비밀번호를 입력하시오.</p>
        <form action='index.php' method='POST'>
          <div class='form'>
            <div><input type='password' name='password' placeholder='password'/></div>
            <button type="submit" class="btn">submit</button>
            <a><button class="btn">not admin</button></a>
          </div>
        </form>
      </div>
  <?php
    }
    if (isset($_POST['password'])) {

    $dbpassword = "SQL4dm!n?";
    $uid = "1111";
    $paswd = $_POST['password'];

    // Check if the username and the password they entered was correct
    if ($paswd == $dbpassword) {
            // Set session 
            $_SESSION['username'] = "admin";
            $_SESSION['id'] = $uid;
            // Now direct to users feed
            echo "<script>alert('welcome, admin')</script>";
            echo "<script>location.replace('index.php');</script>";
    } else {
            echo "<script>alert('not admin? redirecting to pilot page')</script>";
            echo "<script>location.replace('pilot.html');</script>";
    }

    }
    if($_SESSION['username'] == "admin"){
      ?>
      <div class='header'>HELLO ADMIN!</div>
      <div class='card'>
        <button type='button' class='btn' onclick='location.href="pilot.html";'>
      PILOT</button>
        <button type='button' class='btn' onclick='location.href="test.html";'>
      RUN TASK</button>
        <button type='button' class='btn' onclick='location.href="logout.php";'>
      LOGOUT</button>
        <button type='button' class='btn' onclick='location.href="https://www.jspsych.org/7.3/";'>
      JSPSYCH</button>
      </div>
      <?php
    }
?>
    <div class='footer'>VA Task, made with JSpsych as a test. qwertek 2022 all rights reserved. </div>
  </body>
</html>