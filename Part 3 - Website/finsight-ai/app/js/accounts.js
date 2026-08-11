// 🌐 Global object to store all accounts
export let allAccounts = JSON.parse(localStorage.getItem('allAccounts')) || {};

// 🧠 Helper: Save to localStorage
function saveAccounts() {
  localStorage.setItem('allAccounts', JSON.stringify(allAccounts));
}

function showForm(id) {
  document
    .querySelectorAll('.form')
    .forEach(form => form.classList.remove('active'));
  document
    .querySelectorAll('.tab-button')
    .forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Activate the corresponding tab button
  if (id === 'login') {
    document.querySelector('.js-login-button').classList.add('active');
  } else {
    document.querySelector('.js-signup-button').classList.add('active');
  }
}

function handleSignup() {
  const name = document.getElementById('signup-name').value.trim();
  const initials = document
    .getElementById('signup-initials')
    .value.trim()
    .toLowerCase();
  const pin = document.getElementById('signup-pin').value.trim();

  if (!name || !initials || !/^\d{4}$/.test(pin)) {
    alert('Please enter valid details including a 4-digit PIN.');
    return;
  }

  if (allAccounts[initials]) {
    alert('An account with these initials already exists!');
    return;
  }

  allAccounts[initials] = {
    owner: name,
    pin: pin,
    balance: 1000,
    movements: [50, 200, 300, 1000, -100, 20, -200, -312, 100, -20],
    interestRate: 1.2,
  };

  saveAccounts();
  alert('Account created successfully! You can now log in.');
  showForm('login');
}

function handleLogin() {
  const initials = document
    .getElementById('login-initials')
    .value.trim()
    .toLowerCase();
  const pin = document.getElementById('login-pin').value.trim();

  const account = allAccounts[initials];

  if (account && account.pin === pin) {
    console.log(account);
    localStorage.setItem('activeUserInitials', initials);
    window.location.href = 'index.html';
  } else {
    alert('Incorrect initials or PIN.');
  }
}
document.querySelector('.js-login').addEventListener('click', handleLogin);
document.querySelectorAll('.js-login-button').forEach(button => {
  button.addEventListener('click', () => {
    showForm('login');
  });
});
document.querySelectorAll('.js-signup-button').forEach(button => {
  button.addEventListener('click', () => {
    showForm('signup');
  });
});
document
  .querySelector('.js-handle-sign-up')
  .addEventListener('click', handleSignup);
