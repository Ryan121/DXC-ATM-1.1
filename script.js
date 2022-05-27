// This script is for the technical page

var dcSplit, posnEq, firstGrp, lastGrp, posnCB, regEx, i=0;
 dcSplit=document.cookie.split("; ");
 regEx=(/CB\d=/);
 for(i=0; i<dcSplit.length; i++)
  { posnEq = dcSplit[i].indexOf("=")+1;
    posnCB=dcSplit[i].search(regEx);
    if(posnCB != -1)
      { firstGrp = dcSplit[i].substring(posnCB, posnEq-1);
        lastGrp = dcSplit[i].substring( posnEq, dcSplit[i].length);
        document.getElementById(firstGrp).checked=eval(lastGrp);
   }  }
const checks = document.querySelectorAll('[name="Course"][type="checkbox"]')

const cert_checks = document.querySelectorAll('[name="Cert"][type="checkbox"]')
//add the username
if (localStorage.getItem("username") === null) {
  var myname = prompt("What is your name?");
  localStorage.setItem('username', myname);
}
//add the email
if (localStorage.getItem("email") === null) {
  var myemail = prompt("And your email address?");
  localStorage.setItem('email', myemail);
}
//add the status
if (localStorage.getItem("status") === null) {
  var mystatus = prompt("Are you assigned to any role as of now? (FT, PT, NA)");
  localStorage.setItem('status', mystatus);
}
//add the starting date
if (localStorage.getItem("date") === null) {
  var mydate = prompt("When did you started your bootcamp training? FORMAT: (DD-MM-YEAR)");
  localStorage.setItem('date', mydate);
}
//add the employeeID
if (localStorage.getItem("id") === null) {
  var myid = prompt("Enter your Employee ID");
  localStorage.setItem('id', myid);
}
//add the Degree
if (localStorage.getItem("degree") === null) {
  var mydegree = prompt("Enter the Highest Degree you have achieved(for e.g: MSc in Computer Science)");
  localStorage.setItem('degree', mydegree);
}

for(let i = 0 ; i < checks.length ; i++ ) {
  document.getElementById(`${checks[i].id}`).addEventListener("click", function() { alwaysload(); updatePercentageDisplay(); }, false);
} // Added by Daniel Wilson (Thank you!!) <3

for(let i = 0 ; i < cert_checks.length ; i++ ) {
  document.getElementById(`${cert_checks[i].id}`).addEventListener("click", function() { certificationmanager(); }, false);
} 

function certificationmanager(){

  var certs_completed = document.querySelectorAll('input[name="Cert"][type="checkbox"]:checked');

  certs = [];

  for (let i = 0 ; i < certs_completed.length ; i++ ){
  
    certs.push(certs_completed[i].id);

  }

  localStorage.setItem("completed_certs", certs);
}



function clearClick(){
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    email = "Reload to set again";
    username = "Reload to set again";
    document.getElementById ("registeredemail").innerHTML = email;
    document.getElementById ("welcometext").innerHTML = username;
    window.location.reload();
}
function clearClickEmp(){
    localStorage.removeItem("id");
    myid = "Reload to set again";
    document.getElementById ("registeredid").innerHTML = myid;
    window.location.reload();
}

function clearClickDegree(){
    localStorage.removeItem("degree");
    mydegree = "Reload to set again";
    document.getElementById ("registereddegree").innerHTML = mydegree;
    window.location.reload();
}


function clearClick2(){
    localStorage.removeItem("status");
    status = "Reload to set again";
    document.getElementById ("registeredstatus").innerHTML = status;
    window.location.reload();
}

function popup(){
  alertify.alert('Reset your Details', 'Here you can reset the information if it has changed recently, or if you think some information might be wrong. <p>&nbsp;</p> <br> <button class="buttonv2 button5" onclick="clearClick()">Reset your name and email.</button> <button class="buttonv2 button5" onclick="clearClickEmp()">Reset your employee ID.</button> <button class="buttonv2 button5" onclick="clearClick2()">Reset your working status.</button> <button class="buttonv2 button5" onclick="clearClick3()">Reset your starting date and degree.</button>', function(){ alertify.success('No Data was changed.'); });
}
function clearClick3(){
    localStorage.removeItem("date");
    localStorage.removeItem("degree");
    mydegree = "Reload to set again";
    document.getElementById("registereddate").innerHTML = mydate;
    document.getElementById("registereddegree").innerHTML = mydegree;
    window.location.reload();
}
document.getElementById("welcometext").innerHTML = localStorage.getItem("username");
document.getElementById("registeredemail").innerHTML = localStorage.getItem("email");
document.getElementById("registeredstatus").innerHTML = localStorage.getItem("status");
document.getElementById("registereddate").innerHTML = localStorage.getItem("date");
document.getElementById("registeredid").innerHTML = localStorage.getItem("id");
document.getElementById ("registereddegree").innerHTML = localStorage.getItem("degree");

var userfullname = localStorage.getItem("username");
var m_status = localStorage.getItem("status");
var m_date = localStorage.getItem("date");
var m_id = localStorage.getItem("id");
var m_id_con = parseInt(localStorage.getItem("id"));

// update the checkboxs
function updatetheCheck() {
	for(let i = 0 ; i < checks.length ; i++ ) {
		let check = String(checks[i].id)
		var value = document.getElementById(`${checks[i].id}`)
		if(localStorage[`${check}`] == 'true') {
			value.setAttribute('checked', 'true')
		} else {
			value.removeAttribute('checked');
		}
  }

  for(let i = 0 ; i < cert_checks.length ; i++ ) {
		let cert_check = String(cert_checks[i].id)
		var value = document.getElementById(`${cert_checks[i].id}`)
		if(localStorage[`${cert_check}`] == 'true') {
			value.setAttribute('checked', 'true')
		} else {
			value.removeAttribute('checked');
		}
  }
}

// update the cert checkboxs
function updatethecertCheck() {
	for(let i = 0 ; i < cert_checks.length ; i++ ) {
		let cert_check = String(cert_checks[i].id)
		var value = document.getElementById(`${cert_checks[i].id}`)
		if(localStorage[`${cert_check}`] == 'true') {
			value.setAttribute('checked', 'true')
		} else {
			value.removeAttribute('checked');
		}
  }
}

// adding the checkbox stuff inside LocalStorage
let creatLocalStorage = function() {

	for(let i = 0 ; i < checks.length ; i++ ) {
		var value = document.getElementById(`${checks[i].id}`).checked;
		localStorage.setItem(`${checks[i].id}`, value);
	};

  for(let i = 0 ; i < cert_checks.length ; i++ ) {
		var value = document.getElementById(`${cert_checks[i].id}`).checked;
		localStorage.setItem(`${cert_checks[i].id}`, value);
	};
}

// adding the cert checkbox stuff inside LocalStorage
let createcertLocalStorage = function() {
	for(let i = 0 ; i < cert_checks.length ; i++ ) {
		var value = document.getElementById(`${cert_checks[i].id}`).checked;
		localStorage.setItem(`${cert_checks[i].id}`, value);
	};
}

updatetheCheck();
document.onchange = creatLocalStorage;

//updatethecertCheck();
//document.onchange = createcertLocalStorage;

//var total = 142; // 2 courses non selectable 

//var completed = document.querySelectorAll('input[type="checkbox"]:checked').length

var completedList = document.querySelectorAll('input[name="Course"][type="checkbox"]:checked');

//localStorage.setItem('technical_completion', 0);
//localStorage.setItem('MLops_completion', 0);
//localStorage.setItem('data_engineering_completion', 0);


function removeElement(arrayName,arrayElement)
 {
    for(var i=0; i<arrayName.length;i++ )
     { 
        if(arrayName[i]==arrayElement)
            arrayName.splice(i,1); 
      } 

      return arrayName;
  }


//localStorage.setItem('archivedcheckedList1', archivedcheckedList);
//console.log(localStorage.getItem('archivedcheckedList1'));
//localStorage.setItem('technical_completion_List', []);    
//localStorage.setItem('MLops_completion_List', []);   
//localStorage.setItem('data_engineering_completion_List', []); 
//localStorage.setItem('cb_completion_List', []);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function uniqueArray2(arr) {
  var a = [];
  for (var i=0, l=arr.length; i<l; i++)
      if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
          a.push(arr[i]);
  return a;
}

function arrDifference (arr1, arr2) {
  var arr = [];
  arr1 = arr1.toString().split(',').map(Number);
  arr2 = arr2.toString().split(',').map(Number);
  // for array1
  for (var i in arr1) {
     if(arr2.indexOf(arr1[i]) === -1)
     arr.push(arr1[i]);
  }
  // for array2
  for(i in arr2) {
     if(arr1.indexOf(arr2[i]) === -1)
     arr.push(arr2[i]);
  }
  return arr.sort((x,y) => x-y);
}

//localStorage.setItem('comparison_list',[]);
//localStorage.setItem('output_list',[]);

function updateList(){

  //console.log('First ' + archivedcheckedList);

  var localCompleted = document.querySelectorAll('input[name="Course"][type="checkbox"]:checked');
  //console.log('localCompleted', localCompleted);
  decantList = [];

    // Decant checked box's into array
    for (let a = 0; a < localCompleted.length; a++){

        decantList.push(localCompleted[a].id);
    }

    //console.log('real time list', decantList);

    var outputList = [];

    if (localStorage.getItem('output_list') != null){

      var outputList = localStorage.getItem('output_list').split(',');
      //console.log('outputList', outputList);

      //if (localStorage.getItem('output_list') != null){
      // outputList = localStorage.getItem('output_list').split(',');
      //}

      // Check for differences between ticked boxes on different pages
      var checkbox_differences_1 = outputList.filter(x => decantList.indexOf(x) === -1);  
      var checkbox_differences_2 = decantList.filter(x => outputList.indexOf(x) === -1); 
      var all_checkbox_differences = checkbox_differences_1.concat(checkbox_differences_2);

      //console.log('CHECcies', checkbox_differences_1, checkbox_differences_2, all_checkbox_differences);
      

      // Determine whether the checkbox ID is actually on the current page  
      for (let a = 0; a < all_checkbox_differences.length; a++){

        if(document.getElementById(all_checkbox_differences[a]) != null && document.getElementById(all_checkbox_differences[a]).checked == true){

            //console.log('YESS CHEC', all_checkbox_differences[a]);

            //savedList.push(all_checkbox_differences[a]);

            outputList.push(all_checkbox_differences[a]);
    
        }
      } 

      if(checkbox_differences_1.length > 0 && checkbox_differences_1.includes("") == false){

        for (let a = 0; a < checkbox_differences_1.length; a++){

          if (document.getElementById(checkbox_differences_1[a]) != null && document.getElementById(checkbox_differences_1[a]).checked == false){

            //console.log('removed differnce', checkbox_differences_1[a]);
    
            var index = outputList.indexOf(checkbox_differences_1[a]);
            //console.log('index to remove', index);
    
            outputList[index] = outputList[index].replace(checkbox_differences_1[a],'');
    
          }

        } 
    }
      
      outputList = removeElement(outputList,"");
      //console.log(outputList);
    }

    // Set list for refernce
    localStorage.setItem('output_list', outputList);
    //localStorage.setItem('comparison_list', decantList);
    //console.log(decantList);
    return outputList;
     //var archivedcheckedList = localStorage.getItem('archivedcheckedList');  
     //console.log(archivedcheckedList);
     //var archivedcheckedList = archivedcheckedList.split(',');
     //console.log(archivedcheckedList);

   
}



var completed = document.querySelectorAll('input[name="Course"][type="checkbox"]:checked').length
var total = document.querySelectorAll('[name="Course"][type="checkbox"]').length
var per = (completed/total)*100;

//console.log(total);
function alwaysload() {

    updateList();

    completed = document.querySelectorAll('input[name="Course"][type="checkbox"]:checked').length
    total = document.querySelectorAll('[name="Course"][type="checkbox"]').length
    per = (completed/total)*100;
     
    }


function printthis(){
  alert("Here are a few details of you " + userfullname + "\n" + "Number of course completed: "+completed + " Out of: "+total + "\n" + "Percentage of completion:"+ (completed/total)*100);

}


function moduleCompletion(completedList){

  var modules_complete = 0;
  var completed_modules = [];

  //console.log(completedList[0].id);

  // lists, 0 = technical, 1 = MLops, 2 = de, 3 = consilting
  for (let i = 0; i < lists.length; i++){

    for (let a = 0; a < completedList.length; a++){

      for (let j = 0; j < lists[i].length; j++){

        if(lists[i][j] === completedList[a]){
       
          modules_complete += 1;
          break;

        }
      }

    }

    completed_modules.push(modules_complete);
    modules_complete = 0;

  }

  return completed_modules;
}

const Public_Service_Announcement = "This is an automatically generated email. Please do not edit or change the text.";

function sendMail(type) //Only wanted this to work with Outlook.
{
  //localStorage.setItem('technical_completion', completed1);
  //localStorage.setItem('technical_completion_total', total_for_var);

  var temp = [];

  if (localStorage.getItem('output_list') == null){

    localStorage.setItem('output_list', "");
    temp = updateList();
    console.log(temp);

  }

    var m_name = localStorage.getItem("username");
    var m_email = localStorage.getItem("email");
    var m_date = localStorage.getItem("date");

    var CourseIndexes = [];
    var CourseIndexeswithzeros = [];
    var completed_modules = [];

    //
    if (localStorage.getItem('output_list') != null){

      temp = localStorage.getItem('output_list').split(',');

      for (let i = 0; i < temp.length; i++){

        CourseIndexes.push(temp[i].replace('CB',''));
      }  

      // Convert from an array of strings to ints
      var CourseIndexes = CourseIndexes.map(Number);  
      
      // Sort the array - Smallest to Largest
      CourseIndexes.sort(function(a, b){return a-b});


      iterator = 0;
      // Add in 0's to denote non-completion of module - Neccessary because Power Automate is shite
      for (let i = 0; i < 194; i++){ // 194 - Number of active modules

        if (i == (CourseIndexes[iterator] - 1)){

          CourseIndexeswithzeros.push(CourseIndexes[iterator]);

          iterator += 1;

        }else{

          CourseIndexeswithzeros.push(0);
        }
      }  
      console.log('CI',CourseIndexeswithzeros);

      completed_modules = moduleCompletion(temp);
      console.log(completed_modules);
    }

    console.log(CourseIndexes);

    var CertIndexes = [];
    var CertIndexeswithzeros = [];

    if (localStorage.getItem('completed_certs') != null){

      var temp = localStorage.getItem('completed_certs').split(',');

      for (let i = 0; i < temp.length; i++){

        CertIndexes.push(temp[i].replace('CT',''));
      }  
       CertIndexes = CertIndexes.map(Number);   

       iterator = 0;
      // Add in 0's to denote non-completion of cert - Neccessary because Power Automate is shite
      for (let i = 0; i < 31; i++){ // 31 - Number of active certifications

        if (i == (CertIndexes[iterator] - 1)){

          CertIndexeswithzeros.push(CertIndexes[iterator]);

          iterator += 1;

        }else{

          CertIndexeswithzeros.push(0);
        }
      }  
    }

    //console.log(CertIndexes);
    
    //

    // Main bootcamp completion 
    var mb_completed = completed_modules[0]; //localStorage.getItem("technical_completion");   
    var mb_total = lists[0].length; //localStorage.getItem('technical_completion_total');
    var mb_percentage = Math.floor( (mb_completed / mb_total) * 100);

    // Bootcamp+ MLops
    var MLops_completed = completed_modules[1]; //localStorage.getItem("MLops_completion");   
    var MLops_total = lists[1].length; //localStorage.getItem('MLops_completion_total');
    var ML_percentage = Math.floor( (MLops_completed / MLops_total) * 100);

    // Bootcamp+ Data Engineering 
    var DE_completed = completed_modules[2]; //localStorage.getItem("data_engineering_completion");   
    var DE_total = lists[2].length; //localStorage.getItem('data_engineering_completion_total');
    var DE_percentage = Math.floor( (DE_completed / DE_total) * 100);

    // Consulting 
    var cb_completed = completed_modules[3]; //localStorage.getItem("cb_completion");   
    var cb_total = lists[3].length; //localStorage.getItem('cb_total');
    var cb_percentage = Math.floor( (cb_completed / cb_total) * 100);

    window.location.href = "mailto:ryan.sers@dxc.com?subject=Graduate Bootcamp Update&body="+
    Public_Service_Announcement+"%0D%0A"+"%0D%0A"+"Name:"+m_name+"%0D%0A"+
    "Employee ID:"+m_id_con+"%0D%0A"+"Email Address:"+m_email+"%0D%0A"+"Bootcamp: "+type+"%0D%0A"+"Start Date: "+m_date+"%0D%0A"+
    "Technical Modules: "+mb_completed+" completed"+" / "+mb_total+" total"+ " = "+ mb_percentage.toFixed(0)+" percent"+"%0D%0A"+
    "MLOps+: "+MLops_completed+" completed"+" / "+MLops_total+" total"+ " = "+ ML_percentage.toFixed(0)+" percent"+"%0D%0A"+
    "Data Engineering+: "+DE_completed+" completed"+" / "+DE_total+" total"+ " = "+ DE_percentage.toFixed(0)+" percent"+
    "%0D%0A"+"Consulting Modules: "+cb_completed+" completed"+" / "+cb_total+" total"+ " = "+cb_percentage.toFixed(0)+" percent"+
    "%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+
    "%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+"%0D%0A"+
    "Certifications:"+CertIndexeswithzeros.toString()+"%0D%0A"+
    "Modules:"+CourseIndexeswithzeros.toString()+"%0D%0A";
}

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('ul li').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {
		if (  $(window).width() > 500 ) {
			$('ul li').removeAttr('style');
		 }
	});//end resize
});//end ready

//var copyTextareaBtn = document.querySelector('.copybtn');
//copyTextareaBtn.addEventListener('click', function(event) {
//  var copy_text = document.getElementById("copyid");
//  var range = document.createRange();
//  range.selectNode(copy_text);
//  window.getSelection().addRange(range);

//  try {
//    var successful = document.execCommand('copy');
//    var msg = successful ? 'successfully' : 'unsuccessfully';
//    console.log('Copying text command was ' + msg);
//    alert("Id copied "+msg);
//  } catch (err) {
//    console.log('Oops, unable to copy');
//  }
//});
function copythis(){
const text = window.localStorage.getItem('id');
navigator.clipboard.writeText(text).then(function() {
  alertify.success('Id copied to clipboard');
}, function() {
  alertify.error('Unable to copy the ID');
});
}

$(function(){
  updatePercentageDisplay();
});

function updatePercentageDisplay() {
  var $ppc = $('.progress-pie-chart'),
    percent = parseInt((completed/total)*100),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  if (percent < 50) {
    $ppc.addClass('lt-50');
  }
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(percent+'%');

  var container = document.getElementsByClassName("progress-pie-chart");
  var content = container.innerHTML;
  container.innerHTML = content;
}

// Popup Added

$('#close').click(function() {
    $(this).parent().hide();
    $('#shadowbox').hide();
            //Function after window is closed
            yourfunction();
});

//Your Function
function yourfunction() {
        alert('window has been closed');
}


$('#click').click(function() {
     $('#shadowbox, #banner').show();
});

$('#test').click(function() {
    alert('Button was clicked');
})

// Initialise Bootcamp comparison lists

var technicalList = [];
const tech_mods = 142;

var mlOps = [];
const mlops_mods = 0;

var dataEngineering = [];
const de_mods = 62;

var consulting = [];
const cons_mods = 104;

var lists = [technicalList, mlOps, dataEngineering,  consulting];

const start_mods = [1, 0, 3, 147];

const course_mods = [142, 0, 18, 188];

for (let i = 0; i < course_mods.length; i++){

  if ( i != 1){

    for (let j = start_mods[i]; j < (course_mods[i] + 1); j++){

      //console.log(i); console.log(j);
      lists[i].push("CB" + j.toString());
    }
  }
}

// MLOps
lists[1].push("CB68","CB69","CB70","CB71","CB72","CB73","CB74","CB75","CB76","CB77","CB78","CB79","CB80","CB81","CB82","CB98",
"CB99","CB100","CB101","CB102","CB103","CB104","CB105","CB106","CB107","CB108","CB109","CB110","CB111","CB112","CB113","CB189","CB190");
// Data Engineering
lists[2].push("CB22","CB23","CB28","CB29","CB30","CB32","CB92","CB93","CB94","CB95","CB96","CB97","CB63","CB64","CB65","CB66",
"CB48","CB49","CB50","CB51","CB55","CB56","CB57","CB87","CB88","CB89","CB90","CB91","CB143","CB144","CB145","CB136","CB137",
"CB138","CB139","CB140","CB141","CB142","CB146");
// Consulting
lists[3].push("CB1","CB2","CB3","CB4","CB5","CB6","CB7","CB13","CB14","CB15","CB30","CB31","CB32","CB33","CB34","CB35","CB36",
"CB37","CB38","CB39","CB40","CB41","CB42","CB43","CB44","CB48","CB49","CB50","CB51","CB52","CB53","CB54","CB55","CB56","CB57",
"CB58","CB59","CB60","CB61","CB62","CB67","CB87","CB88","CB89","CB90","CB91","CB92","CB93","CB94","CB95","CB96","CB97","CB98",
"CB99","CB100","CB101","CB102","CB103","CB191","CB192","CB193","CB194");

//console.log(lists[0].length); console.log(lists[2].length); console.log(lists[3].length);

function timeRefresh(time) {
  setTimeout("location.reload(true);", time);
        }
