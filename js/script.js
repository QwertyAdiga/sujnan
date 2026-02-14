const teachersData = [
  { name: "Lokesh", subject: "Physics", image: "assets/teachers/lokesh.webp" },
  { name: "Charishma", subject: "Chemistry", image: "assets/teachers/charishma.webp" },
  { name: "Sandesh", subject: "Mathematics", image: "assets/teachers/sandesh.webp" },
  { name: "Lakshmi", subject: "Biology", image: "assets/teachers/lakshmi.webp" },
  { name: "Sathyaprakash", subject: "Chemistry", image: "assets/teachers/sathyaprakash.webp" },
  { name: "Ranjan", subject: "Physics", image: "assets/teachers/ranjan.webp" },
  { name: "Ragini", subject: "Zoology", image: "assets/teachers/ragini.webp" },
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

var showAllTeachers   = false;
var showAllNews       = false;
var showAllFacilities = false;

document.addEventListener('DOMContentLoaded', function() {
  initializeTeachers();
  initializeNews();
  initializeFacilities();
  initializeStatsObserver();
  initializeVideo();
  window.addEventListener('scroll', handleScroll);
});

function scrollToSection(sectionId) {
  var element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
  }
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}

function handleScroll() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

document.addEventListener('click', function(event) {
  var navLinks = document.getElementById('navLinks');
  var hamburger = document.getElementById('hamburger');
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

function initializeStatsObserver() {
  var statsSection = document.getElementById('stats');
  var hasAnimated  = false;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !hasAnimated) {
        startCounterAnimations();
        hasAnimated = true;
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) { observer.observe(statsSection); }
}

function startCounterAnimations() {
  document.querySelectorAll('.stat-number').forEach(function(counter) {
    var target    = parseInt(counter.getAttribute('data-target'));
    var increment = Math.ceil(target / 200);
    animateCounter(counter, target, increment);
  });
}

function animateCounter(element, target, increment) {
  var current = 0;
  var timer = setInterval(function() {
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
  var grid       = document.getElementById('teachersGrid');
  var showMoreBtn = document.getElementById('teachersShowMore');

  grid.innerHTML = '';

  teachersData.forEach(function(teacher, index) {
    var card = createTeacherCard(teacher);
    if (index >= 3) { card.classList.add('hidden'); }
    grid.appendChild(card);
  });

  if (teachersData.length > 3) { showMoreBtn.style.display = 'block'; }

  document.getElementById('teachersButtonText').textContent =
    'Show More (' + (teachersData.length - 3) + ' more)';
}

function createTeacherCard(teacher) {
  var card = document.createElement('div');
  card.className = 'teacher-card';

  card.innerHTML =
    '<div class="teacher-image-container">' +
      '<img src="' + teacher.image + '" alt="' + teacher.name + '" class="teacher-image"' +
        ' onerror="this.style.display=\'none\'">' +
      '<div class="teacher-placeholder">Faculty</div>' +
    '</div>' +
    '<div class="teacher-info">' +
      '<h3 class="teacher-name">' + teacher.name + '</h3>' +
      '<p class="teacher-subject">' + teacher.subject + '</p>' +
    '</div>';

  return card;
}

function toggleTeachers() {
  showAllTeachers = !showAllTeachers;
  var cards      = document.querySelectorAll('.teacher-card');
  var buttonText = document.getElementById('teachersButtonText');

  cards.forEach(function(card, index) {
    if (index >= 3) {
      if (showAllTeachers) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  buttonText.textContent = showAllTeachers
    ? 'Show Less'
    : 'Show More (' + (teachersData.length - 3) + ' more)';
}

function initializeNews() {
  var grid       = document.getElementById('newsGrid');
  var showMoreBtn = document.getElementById('newsShowMore');

  grid.innerHTML = '';

  newsData.forEach(function(news, index) {
    var card = createNewsCard(news);
    if (index >= 3) { card.classList.add('hidden'); }
    grid.appendChild(card);
  });

  if (newsData.length > 3) { showMoreBtn.style.display = 'block'; }

  document.getElementById('newsButtonText').textContent =
    'Show More (' + (newsData.length - 3) + ' more)';

  updateNewsCentering();
}

function createNewsCard(news) {
  var card = document.createElement('a');
  card.href   = news.link;
  card.target = '_blank';
  card.rel    = 'noopener noreferrer';
  card.className = 'news-card';

  card.innerHTML =
    '<div class="news-image-container">' +
      '<img src="' + news.image + '" alt="' + news.title + '" class="news-image">' +
      '<div class="news-image-overlay"></div>' +
    '</div>' +
    '<div class="news-content">' +
      '<h3 class="news-title">' + news.title + '</h3>' +
      '<p class="news-description">' + news.description + '</p>' +
    '</div>';

  return card;
}

function toggleNews() {
  showAllNews = !showAllNews;
  var cards      = document.querySelectorAll('.news-card');
  var buttonText = document.getElementById('newsButtonText');

  cards.forEach(function(card, index) {
    if (index >= 3) {
      if (showAllNews) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  buttonText.textContent = showAllNews
    ? 'Show Less'
    : 'Show More (' + (newsData.length - 3) + ' more)';

  updateNewsCentering();
}

function updateNewsCentering() {
  var allCards    = document.querySelectorAll('.news-card');
  var visibleCards = [];

  allCards.forEach(function(card) {
    card.classList.remove('news-card-centered');
    if (!card.classList.contains('hidden')) { visibleCards.push(card); }
  });

  var count     = visibleCards.length;
  var remainder = count % 3;

  if (remainder === 1) {
    visibleCards[count - 1].classList.add('news-card-centered');
  }
}


function initializeFacilities() {
  var grid       = document.getElementById('facilitiesGrid');
  var showMoreBtn = document.getElementById('facilitiesShowMore');

  grid.innerHTML = '';

  facilitiesData.forEach(function(facility, index) {
    var card = createFacilityCard(facility);
    if (index >= 3) { card.classList.add('hidden'); }
    if (index === 2 && facilitiesData.length > 3) {
      card.classList.add('third-item-centered');
    }
    grid.appendChild(card);
  });

  if (facilitiesData.length > 3) { showMoreBtn.style.display = 'block'; }

  document.getElementById('facilitiesButtonText').textContent =
    'Show More (' + (facilitiesData.length - 3) + ' more)';
}

function createFacilityCard(facility) {
  var card = document.createElement('div');
  card.className = 'facility-card';
  card.innerHTML = '<p class="facility-text">' + facility + '</p>';
  return card;
}

function toggleFacilities() {
  showAllFacilities = !showAllFacilities;
  var cards      = document.querySelectorAll('.facility-card');
  var buttonText = document.getElementById('facilitiesButtonText');

  if (cards[2]) {
    if (showAllFacilities) {
      cards[2].classList.remove('third-item-centered');
    } else {
      cards[2].classList.add('third-item-centered');
    }
  }

  cards.forEach(function(card, index) {
    if (index >= 3) {
      if (showAllFacilities) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  buttonText.textContent = showAllFacilities
    ? 'Show Less'
    : 'Show More (' + (facilitiesData.length - 3) + ' more)';
}

function initializeVideo() {
  var video     = document.getElementById('collegeVideo');
  var wrapper   = document.getElementById('videoWrapper');
  var playBtn   = document.getElementById('vcPlayBtn');
  var muteBtn   = document.getElementById('vcMuteBtn');
  var volSlider = document.getElementById('vcVolume');
  var volLabel  = document.getElementById('vcVolLabel');
  var bigPlay   = document.getElementById('vcBigPlay');
  var seekBar   = document.getElementById('vcSeekBar');
  var timeLabel = document.getElementById('vcTime');

  if (!video || !wrapper) { return; }

  video.volume = 0.5;
  video.muted  = false;
  updateVolFill(50);

  function updateVolFill(pct) {
    volSlider.style.setProperty('--vol-pct', pct + '%');
  }

  function updateSeekFill(pct) {
    seekBar.style.setProperty('--seek-pct', pct + '%');
  }

  function formatTime(secs) {
    if (!secs || isNaN(secs)) return '0:00';
    var m = Math.floor(secs / 60);
    var s = Math.floor(secs % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function updateTimeLabel() {
    var cur = video.currentTime  || 0;
    var dur = video.duration     || 0;
    if (timeLabel) {
      timeLabel.textContent = formatTime(cur) + ' / ' + formatTime(dur);
    }
  }

  function setPlaying(on) { wrapper.classList.toggle('playing', on); }
  function setMuted(on)   { wrapper.classList.toggle('muted',   on); }

  playBtn.addEventListener('click', function() {
    if (video.paused) { video.play(); } else { video.pause(); }
  });

  bigPlay.addEventListener('click', function() { video.play(); });

  muteBtn.addEventListener('click', function() {
    video.muted = !video.muted;
  });

  volSlider.addEventListener('input', function() {
    var pct      = parseInt(volSlider.value, 10);
    video.volume = pct / 100;
    video.muted  = (pct === 0);
    volLabel.textContent = pct + '%';
    updateVolFill(pct);
  });

  var isSeeking = false;

  seekBar.addEventListener('mousedown', function() { isSeeking = true; });
  seekBar.addEventListener('touchstart', function() { isSeeking = true; });

  seekBar.addEventListener('input', function() {
    var pct = parseFloat(seekBar.value);
    var dur = video.duration;
    if (dur && !isNaN(dur)) {
      video.currentTime = (pct / 100) * dur;
    }
    updateSeekFill(pct);
    updateTimeLabel();
  });

  seekBar.addEventListener('change', function() { isSeeking = false; });
  seekBar.addEventListener('mouseup',   function() { isSeeking = false; });
  seekBar.addEventListener('touchend',  function() { isSeeking = false; });

  video.addEventListener('play', function() {
    setPlaying(true);
    bigPlay.classList.add('hidden');
  });

  video.addEventListener('pause', function() {
    setPlaying(false);
  });

  video.addEventListener('ended', function() {
    setPlaying(false);
    bigPlay.classList.remove('hidden');
    if (seekBar) { seekBar.value = 100; updateSeekFill(100); }
  });

  video.addEventListener('volumechange', function() {
    var pct = video.muted ? 0 : Math.round(video.volume * 100);
    volSlider.value      = pct;
    volLabel.textContent = pct + '%';
    updateVolFill(pct);
    setMuted(video.muted || pct === 0);
  });

  video.addEventListener('timeupdate', function() {
    if (isSeeking) return;
    var dur = video.duration;
    if (dur && !isNaN(dur)) {
      var pct = (video.currentTime / dur) * 100;
      seekBar.value = pct;
      updateSeekFill(pct);
    }
    updateTimeLabel();
  });

  video.addEventListener('loadedmetadata', function() {
    updateTimeLabel();
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        video.play().catch(function() {});
      } else {
        if (!video.paused) { video.pause(); }
      }
    });
  }, { threshold: 0.25 });

  observer.observe(video);
}
