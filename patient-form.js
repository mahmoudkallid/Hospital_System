const form = document.getElementById("patientForm");

form.addEventListener("submit", (e) => {

e.preventDefault();

let valid = true;

// Values
const name = document.getElementById("name").value.trim();
const nationalId = document.getElementById("nationalId").value.trim();
const age = Number(document.getElementById("age").value);

// Reset errors
document.getElementById("nameError").textContent = "";
document.getElementById("idError").textContent = "";
document.getElementById("ageError").textContent = "";
document.getElementById("successMessage").textContent = "";

// Name validation
if(name.length < 3){
document.getElementById("nameError").textContent = "الاسم يجب أن يكون 3 أحرف على الأقل";
valid = false;
}

// National ID validation
if(!/^[0-9]{6,}$/.test(nationalId)){
document.getElementById("idError").textContent = "رقم وطني غير صالح";
valid = false;
}

// Age validation
if(isNaN(age) || age <= 0 || age > 120){
document.getElementById("ageError").textContent = "العمر غير صحيح";
valid = false;
}

if(valid){

const patientData = {
name: name,
nationalId: nationalId,
age: age
};

console.log(patientData);

document.getElementById("successMessage").textContent =
"تم إدخال البيانات بنجاح ✅";

form.reset();
}

});
