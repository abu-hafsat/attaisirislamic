const submit = document.getElementById("submit");
let myname = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let dateofbirth = document.getElementById("dob");
let myschool = document.getElementById("school");
let myeducation = document.getElementById("education");
let convtime = document.getElementById("time");
let myaddress = document.getElementById("address");
let choosedcourse = document.getElementById("course");
let convclass = document.getElementById("class");
let quranlevel = document.getElementById("quran");
let form = document.getElementById("form");

form.addEventListener("submit", prevent());
submit.addEventListener("click", function() {
    if(myname.value == "" || phone.value == "" || email.value == "" || dateofbirth.value == ""
    || myschool.value == "" || myeducation.value == "" || convtime.value == "" || myaddress.value == ""
    ) { 
    document.getElementById("form").style.display = "flex";
    document.getElementById("preview").style.display = "none";
    document.getElementById("submit1").style.display = "flex";
    } else { 
     document.getElementById("preview").style.display = "flex";
     document.getElementById("preview").style.flexDirection = "column";
    document.getElementById("form").style.display = "none";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("submit").style.display = "flex";
    document.getElementById("acpt1").style.display = "flex";
    document.getElementById("tex1").innerText = fullname();
    fullname(); 
    document.getElementById("acpt2").style.display = "flex";
    document.getElementById("tex2").innerText = phonenumb();
    phonenumb(); 
    document.getElementById("acpt3").style.display = "flex";
    document.getElementById("tex3").innerText = emailadd();
    emailadd();
    document.getElementById("acpt4").style.display = "flex";
    document.getElementById("tex4").innerText = dob();
    dob();
    document.getElementById("acpt5").style.display = "flex";
    document.getElementById("tex5").innerText = school();
    school();
    document.getElementById("acpt6").style.display = "flex";
    document.getElementById("tex6").innerText = education();
    education();
    document.getElementById("acpt7").style.display = "flex";
    document.getElementById("tex7").innerText = time();
    time();
    document.getElementById("acpt8").style.display = "flex";
    document.getElementById("tex8").innerText = address();
    address(); }
    if(choosedcourse.value !== document.getElementById("course1").value ||
        convclass.value !== document.getElementById("course2").value ||
        quranlevel.value !== document.getElementById("course3").value ) {
    
     document.getElementById("preview").style.display = "flex";
    document.getElementById("acpt9").style.display = "flex";
    document.getElementById("tex9").innerText = course();
    course();
    document.getElementById("acpt10").style.display = "flex";
    document.getElementById("tex10").innerText = classtype();
    classtype();
    document.getElementById("acpt11").style.display = "flex";
    document.getElementById("tex11").innerText = quran();
    quran(); } else { 
        document.getElementById("form").style.display = "flex";
        document.getElementById("preview").style.display = "none";
    }}) 



    const prevent = (event) => {
        event.preventDefault()
    }
    const fullname = () => {
        return myname.value;
    }
    const phonenumb = () => {
        return phone.value;
    }
    const emailadd = () => {
        return email.value;
    }
    const dob = () => {
        return dateofbirth.value;
    }
    const school = () => {
        return myschool.value;
    }
    const education = () => {
        return myeducation.value;
    }
    const time = () => {
        return convtime.value;
    }
    const address = () => {
        return myaddress.value;
    }
    const course = () => {
        return choosedcourse.value;
    }
    const classtype = () => {
        return convclass.value;
    }
    const quran = () => {
        return quranlevel.value;
    }

const classoption = () => { 
    return document.getElementById("course2").value;
}
const quranoption = () => { 
    return document.getElementById("course3").value;
}