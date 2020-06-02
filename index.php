<?php
    if (isset($_POST['submit']) and $_POST != null) {
        $to = "ikhsanir21@gmail.com";
        $subject = "Cerita Najla" . date("Y/m/d");
        $message = "Najla wrote the following:" . " " . $_POST['textArea'];

        mail($to, $subject, $message);
        echo "<script>console.log('Debug Objects: " . $message . "' );</script>";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Najla Asyifa</title>
    <link rel="icon" href="icon/heart.svg">

    <link rel="stylesheet" type="text/css" href="font-web.css"/>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="main-content">
        <h1 id="clock">09.11 AM</h1>
        <p id="najlasyifa"><a id="time">Good Morning</a> <a style="font-family: 'Airbnb Cereal App Bold';">Najla Asyifa</a> <img src="icon/heart.svg" style="margin-left: 8px; width: 12px; height: 12px;"></p>
        <br><p id="kokbelumtidur">Kok belum tidur?</p>
        <br>

        <div id="formArea">
            <form action="" id="keluhkesahForm" method="POST">
                <label for="textarea">Ada Cerita apa hari ini?</label> 
                <textarea name="textArea" id="isi" maxlength="300" autofocus onkeyup="count_down(this);"></textarea>  
                <p><span id="chars">300</span> Characters Remaining</p> 
                <input type="submit" name="submit" value="submit">
            </form>
        </div>
        
        <!--<div id="blog">
            <p><h3 style="letter-spacing: 0.25px;">BLOG</h3></p>
            <p class="timestamp">30/05/2020 | 21:00 PM</p>
            <a target="_blank" href="img/najla1.png"><img src="img/najla1.png" alt="najla" class="rounded-corners"></a>
            <p>Najla orangnya tuh cantik banget sebenernya, cuman seperti biasa, dia gk mau ngaku aja. Udah dibilangin beberapa kali coba.</p>

         </div>-->
    </div>

    <script src="script.js"></script>
</body>
</html>