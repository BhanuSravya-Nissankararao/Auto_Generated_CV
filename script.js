const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.


function handleSubmit(e) {
     e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
  //name
  var name = document.getElementById("Name").value;
  document.getElementById("display-name").innerHTML = name;
  document.getElementById("Name").value="";
  //email
  var email = document.getElementById("Email").value;
  document.getElementById("display-email").innerHTML = email+" |";
  document.getElementById("Email").value="";
  //phone
  var phone=document.getElementById("Phone").value;
  document.getElementById("display-phone").innerHTML=phone+" |";
  document.getElementById("Phone").value="";
  //github
  var github=document.getElementById("Github").value;
  document.getElementById("display-github").innerHTML=github+" |";
  document.getElementById("Github").value="";
  //linkedin
  var linked=document.getElementById("Linked").value;
  document.getElementById("display-linked").innerHTML=linked;
  document.getElementById("Linked").value="";
  //college
  var college=document.getElementById("College").value;
  document.getElementById("display-college").innerHTML=college;
  document.getElementById("College").value="";
  //degree
  var degree=document.getElementById("Degree").value;
  document.getElementById("display-degree").innerHTML=degree;
  document.getElementById("Degree").value="";
  //startyear
  var startyear=document.getElementById("Startyear").value;
  document.getElementById("display-startyear").innerHTML=startyear+"-";
  document.getElementById("Startyear").value="";
  //endyear
  var endyear=document.getElementById("Endyear").value;
  document.getElementById("display-endyear").innerHTML=endyear;
  document.getElementById("Endyear").value="";
  //cgpa
  var cgpa=document.getElementById("CGPA").value;
  document.getElementById("display-cgpa").innerHTML=cgpa;
  document.getElementById("CGPA").value="";
  //skills
  var skills=document.getElementById("Skills").value;
  document.getElementById("display-skills").innerHTML=skills;
  document.getElementById("Skills").value="";
  //projectname
  var projectname=document.getElementById("Projectname").value;
  document.getElementById("display-projectname").innerHTML=projectname;
  document.getElementById("Projectname").value="";
  //projectdescription
  var projectdescription=document.getElementById("Projectdescription").value;
  document.getElementById("display-projectdescription").innerHTML=projectdescription;
  document.getElementById("Projectdescription").value="";
  //projectlink
  var projectlink=document.getElementById("Projectlink").value;
  document.getElementById("display-projectlink").innerHTML=projectlink;
  document.getElementById("Projectlink").value="";
  //company
  var company=document.getElementById("Company").value;
  document.getElementById("display-company").innerHTML=company;
  document.getElementById("Company").value="";
  //designation
  var designation=document.getElementById("Designation").value;
  document.getElementById("display-designation").innerHTML=designation;
  document.getElementById("Designation").value="";
  //duration
  var duration=document.getElementById("Duration").value;
  document.getElementById("display-duration").innerHTML=duration;
  document.getElementById("Duration").value="";
  //description
  var description=document.getElementById("Description").value;
  document.getElementById("display-description").innerHTML=description;
  document.getElementById("Description").value="";
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
