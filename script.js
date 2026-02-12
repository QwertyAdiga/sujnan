const teachersData = [
  { name: "Lokesh", subject: "Physics", image: "assets/teachers/lokesh.JPG" },
  { name: "Charishma", subject: "Chemistry", image: "assets/teachers/charishma.jpg" },
  { name: "Sandesh", subject: "Mathematics", image: "assets/teachers/sandesh.jpeg" },
  { name: "Lakshmi", subject: "Biology", image: "assets/teachers/lakshmi.JPG" },
  { name: "Sathyaprakash", subject: "Chemistry", image: "assets/teachers/sathyaprakash.jpeg" },
  { name: "Ranjan", subject: "Physics", image: "assets/teachers/ranjan.jpeg" },
  { name: "Ragini", subject: "Zoology", image: "assets/teachers/ragini.jpeg" },
];

const newsData = [
  {
    title: "Jagadguru Sri Sannidhanam's Visit",
    description: "Inaugurated Vani Vilas men's hostel and established Sri Saraswati Vigraha",
    image: "assets/news/swamiji.jpg",
    link: "https://www.sringeri.net/events/sujnan-pu-college-vidyaranya-english-medium-school-inauguration/"
  },
  {
    title: "Justice Santosh Hegde Interaction",
    description: "Former Supreme Court judge spoke about corruption in the country and gave social values to students",
    image: "assets/news/judge.webp",
    link: "https://tulunaduvarthe.com/justice-santosh-hegde-interacts-with-students-at-sugnan-pu-college/"
  },
  {
    title: "Yuva Dasara Achievement",
    description: "Our Sujnan college was selected in top 8 college out of 700 colleges in Karnataka in \"Yuva Dasara\" conducted in Mysore",
    image: "assets/news/mysuru-dance.webp",
    link: "https://tulunaduvarthe.com/kundapur-sugnan-pu-students-dance-performance-shines-at-yuva-dasara/"
  },
  {
    title: "Abacus Competition Winners",
    description: "Advik Shetty and Drisha Shetty achieved first place in Abacus competition conducted Alvas PU College",
    image: "assets/news/abacus.jpg",
    link: "https://vasthava.com/?p=9489"
  },
  {
    title: "Kabaddi Tournament Host",
    description: "Sujnan PU college hosted Taluk level Kabaddi tournament with the collaboration of education department",
    image: "assets/news/kabaddi-tournament.webp",
    link: "https://tulunaduvarthe.com/sujnana-pu-college-inauguration-of-kabaddi-tournament/"
  },
  {
    title: "Javelin Throw Achievement",
    description: "Samith secured 3rd rank in state level javelin throw competition conducted by Amateur Athletic Association Udupi",
    image: "assets/news/javelin-throw.webp",
    link: "https://tulunaduvarthe.com/state-level-javelin-competition-samith-of-sujnana-pu-college-was-third/"
  },
  {
    title: "Karate State Selection",
    description: "Mozam, Sujnan PU college student selected for state-level Karate competition conducted in PoornaPrajna college",
    image: "assets/news/karate.webp",
    link: "https://tulunaduvarthe.com/karate-competition-sugnan-pu-colleges-mojam-selected-for-state-level/"
  },
  {
    title: "Badminton State Selection",
    description: "Sachi Shetty selected for state-level badminton competition conducted by education department",
    image: "assets/news/badminton.webp",
    link: "https://tulunaduvarthe.com/shuttle-badminton-sachi-shetty-of-sugnan-pu-college-selected-for-state-level/"
  },
  {
    title: "CA-CS Foundation Orientation",
    description: "CA-CS foundation orientation program conducted by CA Deepika Vasani for commerce students",
    image: "assets/news/ca-cs.webp",
    link: "https://tulunaduvarthe.com/ca-cs-foundation-course-orientation-program-at-sugnan-pu-college/"
  }
];

const facilitiesData = [
  "Weekly Competitive (JEE/NEET/CET) exam on every Monday for evaluating previous week's topics and resolving doubts on the same afternoon",
  "Study hours after college gives students time to resolve the doubts and revise today's topics, helping to learn without any distractions",
  "Top tier faculties from all over India with years of experience in competitive exams. Lecturers stay in hostel to solve student's doubts any time",
  "Celebration of festival on campus to make students feel the campus as home and not miss their family",
  "Dedicated software and app where you can see the performance of your child in every exam, protected through unique password for every child",
  "Integrated system of teaching where board and competitive syllabus are taught simultaneously providing extra support for students",
  "Security personnel for the institution in the entry. Campus is fully equipped with CCTV cameras",
  "Separate hostel facilities for boys and girls in the campus. Phone booth to talk with only parents' numbers and fixed time for communication",
  "On-site health clinic in the campus with medical professionals for 24/7. Dedicated wardens for every floor in the hostel to ensure safety of students",
  "Laundry services, housekeeping for hostel students. Evening snacks and dining facilities with nutritious food for hostelites"
];

let showAllTeachers = false;
let showAllNews = false;
let showAllFacilities = false;

document.addEventListener('DOMContentLoaded', function() {
  initializeTeachers();
  initializeNews();
  initializeFacilities();
  initializeStatsObserver();
  
  window.addEventListener('scroll', handleScroll);
});

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

function handleScroll() {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function initializeStatsObserver() {
  const statsSection = document.getElementById('stats');
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        startCounterAnimations();
        hasAnimated = true;
      }
    });
  }, {
    threshold: 0.3
  });
  
  if (statsSection) {
    observer.observe(statsSection);
  }
}

function startCounterAnimations() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = Math.ceil(target / 200);
    animateCounter(counter, target, increment);
  });
}

function animateCounter(element, target, increment) {
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = current + '+';
    }
  }, 20);
}

function initializeTeachers() {
  const grid = document.getElementById('teachersGrid');
  const showMoreBtn = document.getElementById('teachersShowMore');
  
  grid.innerHTML = '';
  
  teachersData.forEach((teacher, index) => {
    const card = createTeacherCard(teacher);
    
    if (index >= 3) {
      card.classList.add('hidden');
    }
    
    grid.appendChild(card);
  });
  
  if (teachersData.length > 3) {
    showMoreBtn.style.display = 'block';
  }
}

function createTeacherCard(teacher) {
  const card = document.createElement('div');
  card.className = 'teacher-card';
  
  card.innerHTML = `
    <div class="teacher-image-container">
      <img src="${teacher.image}" alt="${teacher.name}" class="teacher-image"
           onerror="this.style.display='none'; this.parentElement.querySelector('.teacher-placeholder').style.display='flex';">
      <div class="teacher-placeholder" style="display:none;">Faculty</div>
    </div>
    <div class="teacher-info">
      <h3 class="teacher-name">${teacher.name}</h3>
      <p class="teacher-subject">${teacher.subject}</p>
    </div>
  `;
  
  return card;
}

function toggleTeachers() {
  showAllTeachers = !showAllTeachers;
  const cards = document.querySelectorAll('.teacher-card');
  const buttonText = document.getElementById('teachersButtonText');
  
  cards.forEach((card, index) => {
    if (index >= 3) {
      if (showAllTeachers) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
  
  if (showAllTeachers) {
    buttonText.textContent = 'Show Less';
  } else {
    buttonText.textContent = `Show More (${teachersData.length - 3} more)`;
  }
}

function initializeNews() {
  const grid = document.getElementById('newsGrid');
  const showMoreBtn = document.getElementById('newsShowMore');
  
  grid.innerHTML = '';
  
  newsData.forEach((news, index) => {
    const card = createNewsCard(news);
    
    if (index >= 3) {
      card.classList.add('hidden');
    }
    
    grid.appendChild(card);
  });
  
  if (newsData.length > 3) {
    showMoreBtn.style.display = 'block';
  }
  
  updateNewsCentering();
}

function createNewsCard(news) {
  const card = document.createElement('a');
  card.href = news.link;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = 'news-card';
  
  card.innerHTML = `
    <div class="news-image-container">
      <img src="${news.image}" alt="${news.title}" class="news-image">
      <div class="news-image-overlay"></div>
    </div>
    <div class="news-content">
      <h3 class="news-title">${news.title}</h3>
      <p class="news-description">${news.description}</p>
    </div>
  `;
  
  return card;
}

function updateNewsCentering() {
  const cards = document.querySelectorAll('.news-card');
  
  // Remove any previous centering classes
  cards.forEach(card => {
    card.classList.remove('news-card-centered');
  });
  
  // Count visible cards
  const visibleCards = Array.from(cards).filter(c => !c.classList.contains('hidden'));
  const count = visibleCards.length;
  const remainder = count % 3;
  
  // If the last row has only 1 card, center it in column 2
  if (remainder === 1) {
    visibleCards[count - 1].classList.add('news-card-centered');
  }
}

function toggleNews() {
  showAllNews = !showAllNews;
  const cards = document.querySelectorAll('.news-card');
  const buttonText = document.getElementById('newsButtonText');
  
  cards.forEach((card, index) => {
    if (index >= 3) {
      if (showAllNews) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
  
  if (showAllNews) {
    buttonText.textContent = 'Show Less';
  } else {
    buttonText.textContent = `Show More (${newsData.length - 3} more)`;
  }
  
  updateNewsCentering();
}

function initializeFacilities() {
  const grid = document.getElementById('facilitiesGrid');
  const showMoreBtn = document.getElementById('facilitiesShowMore');
  
  grid.innerHTML = '';
  
  facilitiesData.forEach((facility, index) => {
    const card = createFacilityCard(facility);
    
    if (index >= 3) {
      card.classList.add('hidden');
    }
    
    if (index === 2 && facilitiesData.length > 3) {
      card.classList.add('third-item-centered');
    }
    
    grid.appendChild(card);
  });
  
  if (facilitiesData.length > 3) {
    showMoreBtn.style.display = 'block';
  }
}

function createFacilityCard(facility) {
  const card = document.createElement('div');
  card.className = 'facility-card';
  
  card.innerHTML = `
    <p class="facility-text">${facility}</p>
  `;
  
  return card;
}

function toggleFacilities() {
  showAllFacilities = !showAllFacilities;
  const cards = document.querySelectorAll('.facility-card');
  const buttonText = document.getElementById('facilitiesButtonText');
  
  // Fix: handle card 2 centering OUTSIDE the index >= 3 gate
  if (cards[2]) {
    if (showAllFacilities) {
      cards[2].classList.remove('third-item-centered');
    } else {
      cards[2].classList.add('third-item-centered');
    }
  }
  
  cards.forEach((card, index) => {
    if (index >= 3) {
      if (showAllFacilities) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
  
  if (showAllFacilities) {
    buttonText.textContent = 'Show Less';
  } else {
    buttonText.textContent = `Show More (${facilitiesData.length - 3} more)`;
  }
}

document.addEventListener('click', function(event) {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
