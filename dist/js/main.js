// Select DOM Items
const menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  menuNav = document.querySelector('.menu-nav'),
  menuBranding = document.querySelector('.menu-branding'),
  navItems = document.querySelectorAll('.nav-item'),
  mainEl = document.querySelector('main');

// Set Initial State Of Menu
let showMen = false;

function toggleMenu() {
  if (!showMen) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMen = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMen = false;
  }
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function toggleFooter() {
  if (mainEl.id === 'home' && document.getElementById('main-footer')) {
    document.getElementById('main-footer').remove();
  } else if (mainEl.id !== 'home' && !document.getElementById('main-footer')) {
    const footerEl = document.createElement('footer');
    footerEl.id = 'main-footer';
    footerEl.classList.add('main-footer');
    footerEl.innerHTML = `
      Copyright &copy; 2020
    `;

    insertAfter(footerEl, mainEl);
  }
}

menuBtn.addEventListener('click', toggleMenu);

///////////////////////////////////////////////////////////////////////////////

const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home State
const homeState = function (page) {
  mainEl.id = 'home';
  toggleMenu();
  mainEl.innerHTML = `
    <h1 class="lg-heading">Ilya <span class="text-secondary">Orlov</span></h1>
    <h2 class="sm-heading">
      Front-end Web Developer<span
        class="txt-type"
        data-wait="3000"
        data-words='[", Orange Juice Lover", ", Part-time Comedian", ", What else goes in here?"]'
      ></span>
    </h2>
    <div class="icons">
      <a
        href="https://github.com/Novailoveyou"
        name="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github fa-2x"></i>
      </a>
      <!-- <a href="#">
        <i class="fab fa-linkedin fa-2x"></i>
      </a> -->
      
      <a
        href="https://www.youtube.com/channel/UC2rI3sYpG6dH7acoTiQMXsQ"
        name="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-youtube fa-2x"></i>
      </a>

      <a
        href="https://twitter.com/novailoveyou"
        name="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </a>
    </div>
  `;

  toggleFooter();
};

// About State
const aboutState = function (page) {
  mainEl.id = 'about';
  toggleMenu();
  mainEl.innerHTML = `
    <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">
      Let me tell you a few things...
    </h2>
    <div class="about-info">
      <div class="bio-image"></div>

      <div class="bio">
        <h3 class="text-secondary">BIO</h3>
        <p>
          I'm 22 years old front-end web developer from Moscow specializing in
          CSS&HTML and JavaScript. I've got a huge passion for programming so
          I taught myself how to code with the enormous help of Brad Traversy.
          My goal is to simply be useful to others and put my skills to work.
        </p>
      </div>

      <div class="job job-1">
        <h3>Contributor on Brad Traversy GitHub</h3>
        <h6>Contributor</h6>
        <p>
          I am thrilled to be one out of 9 contributors in
          <a
            href="https://github.com/bradtraversy/vanillawebprojects/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="text-secondary"
              >bradtraversy/vanillawebprojects repo</span
            ></a
          >
          with 4.6k stars on GitHub. This repo used in Brad's Udemy course
          with over 12000 students as of May 7, 2020.
        </p>
      </div>

      <div class="job job-2">
        <h3>Work for local clients</h3>
        <h6>Front-end developer</h6>
        <p>
          Before I moved to Moscow I used to freelance for local businesses in
          my hometown. I've been hired by the clients to create a website such
          as
          <a
            href="https://novailoveyou.github.io/TRIO/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="text-secondary">this one</span></a
          >
          for their businesses. <br />
          You can also
          <a
            href="https://github.com/Novailoveyou/TRIO"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="text-secondary">view it on GitHub</span></a
          >
        </p>
      </div>

      <div class="job job-3">
        <h3>Always code always learn</h3>
        <h6>Vanilla JavaScript developer</h6>
        <p>
          I have received a
          <a
            href="http://ude.my/UC-9427525c-1e81-4565-98f5-d74f6f835603"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="text-secondary">Certificate of Completion</span></a
          >
          for completing Modern JavaScript From The Beginning online course
          taught by Brad Traversy on Udemy, as well as
          <a
            href="http://ude.my/UC-9b9f13fa-5d27-4128-937c-4c47b756ab11"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="text-secondary">Certificate of Completion</span></a
          >
          for completing 20 Web Projects With Vanilla JavaScript
        </p>
      </div>
    </div>
  `;

  toggleFooter();
};

// Work State
const workState = function (page) {
  mainEl.id = 'work';
  toggleMenu();
  mainEl.innerHTML = `
    <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>
    <div class="projects">
      <div class="item">
        <a
          href="https://novailoveyou.github.io/SpeedTyper/"
          name="Speed Typer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project1.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/SpeedTyper/"
          name="Speed Typer"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/SpeedTyper"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
      <div class="item">
        <a
          href="https://novailoveyou.github.io/Memory-Cards/"
          name="Memory Cards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project2.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/Memory-Cards/"
          name="Memory Cards"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/Memory-Cards"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
      <div class="item">
        <a
          href="https://novailoveyou.github.io/Meal-Finder/"
          name="Meal Finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project3.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/Meal-Finder/"
          name="Meal Finder"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/Meal-Finder"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
      <div class="item">
        <a
          href="https://novailoveyou.github.io/Speech-Text-Reader/"
          name="Speech Text Reader"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project4.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/Speech-Text-Reader/"
          name="Speech Text Reader"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/Speech-Text-Reader"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
      <div class="item">
        <a
          href="https://novailoveyou.github.io/Exchange-Rate-Calculator/"
          name="Exchange Rate Calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project5.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/Exchange-Rate-Calculator/"
          name="Exchange Rate Calculator"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/Exchange-Rate-Calculator"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
      <div class="item">
        <a
          href="https://novailoveyou.github.io/TRIO/"
          name="TRIO company page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="img/projects/project6.jpg" alt="Project" />
        </a>
        <a
          href="https://novailoveyou.github.io/TRIO/"
          name="TRIO company page"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-light"
        >
          <i class="fas fa-eye"></i>Project
        </a>
        <a
          href="https://github.com/Novailoveyou/TRIO"
          name="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-dark"
        >
          <i class="fab fa-github"></i>Github
        </a>
      </div>
    </div>
  `;

  toggleFooter();
};

// Contact State
const contactState = function (page) {
  mainEl.id = 'contact';
  toggleMenu();
  mainEl.innerHTML = `
    <h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1>
    <h2 class="sm-heading">
      This is how you can reach me...
    </h2>
    <div class="boxes">
      <a
        href="mailto:novailoveyoux@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-secondary">Email: </span>novailoveyoux@gmail.com
      </a>

      <a
        href="https://wa.me/79277773366"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-secondary">WhatsApp: </span>+7 (927) 777-3366
      </a>

      <a
        href="https://vk.com/imnotthere3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-secondary">VK: </span>vk.com/imnotthere3
      </a>
  `;

  toggleFooter();
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home-page'),
  about = document.getElementById('about'),
  work = document.getElementById('work'),
  contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState());

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

// Work
work.addEventListener('click', (e) => {
  page.change(new workState());

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState());

  e.preventDefault();
});

///////////////////////////////////////////////////////////////////////////////

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to the next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

document.getElementById('home-page').addEventListener('click', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
