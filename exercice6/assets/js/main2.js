function getAge(){
     
    var shoeSize = document.getElementById('shoeSize').value;
    var yearOfBirth = document.getElementById('yearOfBirth').value;
    console.log(shoeSize+ ' / '+ yearOfBirth);

    var result = ((((shoeSize * 2) + 5) * 50)- yearOfBirth) + 1769;
    console.log(result);
    
    alert(result);
    }
