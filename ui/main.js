console.log('Loaded!');
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function() 
{
 var names = ['name1','name2','name3','name4'] ;  
    var list='';
    for(var i=0;i<=names.length;i++){
'<li>' +names[i]+ '</li>'  ;
}
var ul = document.getElementById('nameslist');
ul.innerHTML = 'list';
};