// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,20}$/;

  if (!regex.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZipcode() {
  const zipcode = document.getElementById('zipcode');
  const regex = /^[0-9]{4}\s*[a-zA-Z]{2}$/;

  if (!regex.test(zipcode.value)) {
    zipcode.classList.add('is-invalid');
  } else {
    zipcode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const regex = /^\(?\d{2}\)?[- ]?\d{8}$/;

  if (!regex.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }

}