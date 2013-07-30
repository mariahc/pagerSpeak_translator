//jquery equilivelent of window onload
//$ is short for jQuery
$(document).ready(function(){
  
  var lookupTable = {
  'i love you' : '143',
  'hello' : '07734',
  'a' : '4',
  'b' : '8',
  'c' : '0',
  'd' : '0',
  'e' : '3',
  'f' : '4',
  'g' : '9',
  'h' : '4',
  'i' : '1',
  'j' : '7',
  'k' : '15',
  'l' : '1',
  'm' : '177',
  'n' : '17',
  'o' : '0',
  'p' : '9',
  'q' : '9',
  'r' : '12',
  's' : '5',
  't' : '7',
  'u' : '11',
  'v' : '11',
  'w' : '111',
  'x' : '22',
  'y' : '4',  
  'z' : '2',
  '?' : '2'}
  ;



  $('#AddItem').click(function(){
 
   var userText = $('#item').val();
    
    
    for ( var key in lookupTable )
    {
      userText = userText.replace(key, lookupTable[key]);
    }

    
   var target = $('ul');
       
   var theLI = $("<li>").html(userText).appendTo(target);
    theLI.click(function(){
    
      $(this).fadeOut(750);
   
    
    }); 
    
    $('#item').val('');
  
  });

});
