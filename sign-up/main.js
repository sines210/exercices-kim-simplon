var checkBox = document.querySelector("#toggle-password-visibility");
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#comfirm-password');
var userName = document.querySelector('#username');
var error = document.querySelector('.error');
var alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];
var progress = document.querySelector('#progress');
var progressLabel = document.querySelector('#progresslabel')
var isUsed = false




//progressbar password

password.addEventListener('input', (event) =>{
  if(password.value.length==0)
  {progress.value=0;
  progressLabel.innerHTML='';
  progress.style.display='none'}
 if(password.value.length >= 1 && password.value.length < 4 )
  {progress.value = 25;
    progress.style.display='block'
    progress.style.backgroundColor = 'yellow'
    progressLabel.innerHTML='sécurité du mot de passe très faible'}
    if(password.value.length >= 4 && password.value.length < 8)
    {progress.value = 50;
      progressLabel.innerHTML='sécurité du mot de passe faible'}
      if(password.value.length >= 8 && password.value.length < 12)
      {progress.value = 75;
        progressLabel.innerHTML='sécurité du mot de passe bonne'}
        if(password.value.length >= 12)
        {progress.value = 100;
          progressLabel.innerHTML='sécurité du mot de passe très bonne'}
  
})


//boucle alreadyRegisteredNames
userName.addEventListener('input', (event) =>{
  userName.value =  userName.value.toLowerCase();
  for (var i = 0; i<=alreadyRegisteredUsernames.length; i++)
  {if(userName.value === alreadyRegisteredUsernames[i]){
    isUsed = true;}
   }
})

//validation form

document.querySelector("form").addEventListener("submit",  (event) => {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  // /:sinon au lieu de faire tt ca js on peux mettre des required dans les input du HTML pour les soumissions de champs vides:


  if(password.value === userName.value && password.value != '')  
  {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "Le nom d'utilisateur et le mot de passe ne doivent pas être les mêmes";
    password.style.border='1px solid red';
    userName.style.border='1px solid red';
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }

  else if(password.value != confirmPassword.value)
  {error.innerHTML='Les mots de passe ne correspondent pas';
  password.style.border='1px solid red';
  confirmPassword.style.border='1px solid red';
  event.preventDefault();
}

else if (userName && isUsed === true)
{
  error.innerHTML = 'Ce nom est déjà utilisé';
userName.style.border = '1px solid red';
event.preventDefault()}


  else
  {    document.querySelector("main").innerHTML = "Compte créé :)";
}
     
}, false)


userName.addEventListener('click', () =>
{
  userName.value = '';
     password.value = '';
     confirmPassword.value = '';
      error.innerHTML = "";
      userName.style.border='1px solid black';
      password.style.border='1px solid black';
      confirmPassword.style.border='1px solid black';
      isUsed=false;

})
password.addEventListener('click', () =>
{
     password.value = '';
      error.innerHTML = "";
      password.style.border='1px solid black';
      confirmPassword.style.border='1px solid black';

})

confirmPassword.addEventListener('click', () =>
{
     confirmPassword.value = '';
      error.innerHTML = "";
      password.style.border='1px solid black';
      confirmPassword.style.border='1px solid black';

})




//show password 

checkBox.addEventListener('click', () =>{

    if (password.type === "password" || confirmPassword.type === 'password') {
      password.type = "text";
      confirmPassword.type = "text";
    } else {
      password.type = "password";
      confirmPassword.type = "password";

    }
  
})



//change background color

var switchButton = document.querySelector('.changeColor');
var main = document.querySelector('main')

var changeBackground = (c) =>{

  document.body.style.backgroundColor = c; 
  
} 

switchButton.addEventListener('input', (event) =>{

 changeBackground(switchButton.value);
     
 
})





//TODO


//tester getelementbyid et queryselec ur un champ required

//voir setCustomValidity

//boucler sur les usernameAlreadyknown au lieu d'utiliser les index numériques

//essayer de mettre en place une progress bar custom avec plusieurs couleurs selon value si ca marche pas (et ya peu de chance que ca marche), coder une progress bar range

//essayer de faire tt l'exercice en html

//pour désactiver l'autocomplétion : soit autocomplete="off, soit changer le name !=username (usernam1 c bon par exple) cette méthode permet d'éviter la détection par les autres sites qui récupèrent la valeur de l'username pour autocomplétion sur autres sites


//voir mutation Observer pour la gestion des événements et de leur chronologie;


//essayer d'utiliser les this ds différents comtextes;

//voir les différences entre paramètres, propriétés, callbk...

// pour les règles de validation des formulaires côté serveur , voir les regExp;


//validation : nbre max caractere ! match input / mauvais format .... + connexion

// pour copier du code en format code sur discord enbed le code avec 3 bktip sur chaque coté