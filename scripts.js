document.addEventListener('DOMContentLoaded', function () {

    var textbox = document.querySelector('.newsletter form');
    var etext = document.getElementById('email');
    var popuptext = document.querySelector('.newsletter .message')

    textbox.addEventListener('submit', function(event){

            event.preventDefault();
            
            textcon = etext.value.trim(); 


            if (textcon !== ''){

                popuptext.textContent = 'Thank you! Your email address ' + textcon + ' has been added to our mailing list!';
            } else {
                popuptext.textContent = 'Please enter a valid email address.';
            }

            etext.value = '';
    })



});
