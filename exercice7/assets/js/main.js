var age = prompt('Votre âge ? (en années)');
if(!age)
   alert('Vous devez entrez votre âge');
else
{
   if(age >= 18)
      alert('Vous êtes majeur');
   else
      alert('T\'es mineur');
}