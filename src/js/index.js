// Slider

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Validation for each field

function checkValidator(element, regex, msgErr, err){
  
  if(element.value){
    if(regex.exec(element.value) == null){
      err.innerHTML = msgErr
    }else{
      err.innerHTML = ''
    }
  }else{
    err.innerHTML = `veuillez remplir ce champs`
  }
}

function checkTextArea(element, err){
  if(element.value){
  }else{
    err.innerHTML = `veuillez remplir le champs text`
  }
}

// Validation function for the form

function valid(){

  // prevent from refreshing the form

  document.getElementById("formId").addEventListener("click", function(event){
      event.preventDefault()
  });

  // get field element 

  const firstName = document.getElementById('firstName')
  const lastName = document.getElementById('lastName')
  const email = document.getElementById('email')
  const text = document.getElementById('text')

  // get field error element

  const errFirstName = document.getElementById('errorValidatorFirstName')
  const errLastName = document.getElementById('errorValidatorLastName')
  const errEmail = document.getElementById('errorValidatorEmail')
  const errText = document.getElementById('errorValidatorText')

  // error messages

  const msgErrLettersOnly = "seules les lettres sont autorisées sur ce champs"
  const msgErrEmail = "veuillez entrer une email valide"

  // regex

  const onlyLetters = /^[a-zA-Z]+$/
  const onlyEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  // check errors

  checkValidator(firstName, onlyLetters, msgErrLettersOnly, errFirstName)
  checkValidator(lastName, onlyLetters, msgErrLettersOnly, errLastName)
  checkValidator(email, onlyEmail, msgErrEmail, errEmail)
  checkTextArea(text, errText)

}
