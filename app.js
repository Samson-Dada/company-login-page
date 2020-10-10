// global variable
const mainPage = document.getElementById('main-page--modal');
const staffForm = document.getElementById('staff-modal--login');
const loginHeader = document.getElementById('login-modal-page');
const staffGreetModal = document.getElementById('staff-signed-modal');
//
const loginBtnHolder = document.getElementById('login-btn-holder');
const InfoHolder = document.getElementById('info-holder');
const loginHolder = document.getElementById('login-holder');

const visitorForm = document.getElementById('visitor-modal--login');

// Display login
const loginHolderHandler = () => {
  loginHolder.classList.add('login-visible');
};
loginBtnHolder.addEventListener('click', loginHolderHandler);

// Display Staff login
const staffLoginPageHandler = () => {
  const staffName = document.getElementById('staff-name').value;
  const staffId = document.getElementById('staff-id').value;
  if (staffName.trim() === '' || staffId.trim() === '') {
  }
  staffForm.classList.add('staff-login');
  if (staffForm) {
    mainPage.classList.add('remove-page');
  }
};

const staffBtn = loginHolder.lastElementChild;

staffBtn.addEventListener('click', staffLoginPageHandler);

const staffLogin = document.getElementById('loginBtn');
staffLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const staffName = document.getElementById('staff-name').value;
  console.log(staffName);
  const staffId = document.getElementById('staff-id').value;
  console.log(staffId);
  if (staffName.trim() === '' || staffId.trim() === '') {
    const alertNow = document.createElement('span');
    alertNow.innerHTML = `
    <small id="staff-login--error"><i class="fa fa-warning"></i>Wrong Details, Please Enter The Correct Details</small>
    `;
    staffForm.append(alertNow);
  } else {
    const staffPageHandler = () => {
      const staffProfile = document.getElementById('staff-profile');
      staffProfile.classList.add('display-staff');
      if (staffForm) {
        mainPage.classList.add('remove-page');
      }
      if (staffProfile) {
        staffForm.style.display = 'none';
      }
      if (staffForm) {
        loginHeader.style.display = 'none';
      }

      if (staffGreetModal) {
        setTimeout(() => {
          staffGreetModal.style.display = 'block';
        }, 1500);
      }
      if (staffGreetModal) {
        const staffName = document.getElementById('staff-name').value;
        const greetText = document.getElementById('staff-greet-modal--text');
        greetText.innerHTML = `Dear ${staffName}, Good Moring and Welcome To Bluehub`;
      }
    };
    // const loginBtn = document.getElementById('loginBtn');
    // loginBtn.addEventListener('click', (event) => {
    // });
    staffPageHandler();
  }
});

// Remove or close Staff greeting modal
const staffGreetHandler = () => {
  staffGreetModal.style.display = 'none';
};
const icon = document.getElementById('close-icon');
icon.addEventListener('click', staffGreetHandler);

const visitorHandler = () => {
  visitorForm.classList.add('visitor-login');
  if (visitorForm) {
    mainPage.classList.add('remove-page');
  }
};
// Display Visitor page
const visitorBtn = document.getElementById('visitor-btn');
visitorBtn.addEventListener('click', (event) => {
  visitorHandler();
  event.preventDefault();
});
