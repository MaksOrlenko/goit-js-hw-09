const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
  
const storageForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

populateText();


form.addEventListener("input", checkUserMessage); 

function checkUserMessage() {
const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

  form.addEventListener("submit", alertMessageForUser);

function alertMessageForUser(e) {
  e.preventDefault();

  if (form.elements.email.value.trim() === '' || form.elements.message.value.trim() === '') {
    alert('Please enter your email and message');
    return;
  }
  console.log("Data submit:", JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
   const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    form.elements.email.value = storageForm.email.trim();
    textarea.value = storageForm.message.trim();
    
  }
}