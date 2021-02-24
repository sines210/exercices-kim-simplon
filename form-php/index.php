<?php require './head.php';

?>

<?php $aDeviner = 1250;
$error= null;
$success= null;
$value=null;
?>

<?php 
if(isset($_POST['guess'])){

  $value=(int)$_POST['guess'];

  if($_POST['guess']<$aDeviner){
    $error = 'Propisition trop basse';
  }
  elseif($_POST['guess']>$aDeviner){
    $error = 'Propisition trop élevée';
  }
  else{
    $success=  'Bravo vous avez trouvé '. $value;
  }

}

?>


<!-- Test faille xss -->
<!-- //code problématique (test balises dans l'input)
// if(isset($_POST['test'])){

//   $value=$_POST['test'];
// } -->
<!-- résolution htmlspecialchars -->
<?php 

if(isset($_POST['test'])){

$value= htmlspecialchars($_POST['test']);
}

?>


<body>
<header>
  <img alt="logo du juste prix" src="/logo.jpg" />
</header>
<main>
  <img src="/montre.jpg" alt="une belle montre de luxe" />
  <form action="index.php" method="post">
    <div class="input-group">
      <div id="reponse"><?php echo $error,$success?></div>
      <label for="price">C'est combien ?</label>
      <span>$</span><input id="price" name="guess" type='number'/>
    </div>
    <button type="submit">Valider</button>
    <div id="reponse"><?php echo $value?></div>
    <input type="text" name = 'test'>
    <button type="submit">Valider</button>
  </form>
</main>
</body>
</html>






