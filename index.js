// Get input elements (only if they exist on the current page)
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const btn = document.getElementById('btn');

// Save name and email on button click (if input fields exist)
if (btn && Name && Email) {
  btn.addEventListener('click', () => {
    localStorage.setItem('name', Name.value.trim());
    localStorage.setItem('email', Email.value.trim());
  });
}

// Add click event to all topic choices
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const selectedTopic = choice.textContent.trim();
    localStorage.setItem('topic', selectedTopic);
  });
});

// Display saved data on pages like summary.html or index.html
const topicDiv = document.querySelector('.topic');
const nameDiv = document.querySelector('.text');

const storedTopic = localStorage.getItem('topic');
const storedName = localStorage.getItem('name');
const storedEmail = localStorage.getItem('email');

// Show topic
if (topicDiv && storedTopic) {
  topicDiv.textContent = `Selected Topic: ${storedTopic}`;
}

// Show name/email
if (nameDiv) {
  nameDiv.innerHTML = '';
  if (storedName) nameDiv.innerHTML += `<p>Name: ${storedName}</p>`;
  if (storedEmail) nameDiv.innerHTML += `<p>Email: ${storedEmail}</p>`;
}

const buuton=document.getElementById('submit').addEventListener('click', ()=>{
  alert("Summary submited successfully")
  
})