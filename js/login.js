document.getElementById ('login-btn').addEventListener
('click', function (){
    // Get User Email Access 
    const emailField = document.getElementById ('user-email');
    const userEmail = emailField.value;
    // Get User PassWord Access 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // Get User Login Check
    if( userEmail == 'shamim@gmail.com' &&
    userPassword == 'shamim123'){
        window.location.href = 'banking.html';
    }
});