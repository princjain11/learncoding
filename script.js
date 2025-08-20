// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('languageModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Language data for modals
const languageData = {
    html: {
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the building blocks of web development with HTML and CSS.',
        topics: [
            'HTML Structure and Elements',
            'CSS Styling and Layout',
            'Responsive Design',
            'CSS Flexbox and Grid',
            'Forms and User Input',
            'CSS Animations and Transitions'
        ],
        projects: [
            'Personal Portfolio Website',
            'Responsive Landing Page',
            'CSS Grid Layout Gallery',
            'Interactive Form Design'
        ],
        duration: '4 weeks',
        difficulty: 'Beginner',
        icon: 'fab fa-html5'
    },
    javascript: {
        title: 'JavaScript Programming',
        description: 'Master JavaScript to create dynamic and interactive web applications.',
        topics: [
            'Variables and Data Types',
            'Functions and Scope',
            'Arrays and Objects',
            'DOM Manipulation',
            'Event Handling',
            'Async Programming (Promises, Async/Await)',
            'ES6+ Features',
            'Error Handling'
        ],
        projects: [
            'Todo List Application',
            'Weather App with API',
            'Interactive Quiz Game',
            'Dynamic Content Loader'
        ],
        duration: '6 weeks',
        difficulty: 'Intermediate',
        icon: 'fab fa-js-square'
    },
    python: {
        title: 'Python Programming',
        description: 'Learn Python, the most beginner-friendly programming language.',
        topics: [
            'Python Basics and Syntax',
            'Data Structures (Lists, Tuples, Dictionaries)',
            'Control Flow and Loops',
            'Functions and Modules',
            'Object-Oriented Programming',
            'File Handling',
            'Error Handling and Debugging',
            'Working with Libraries'
        ],
        projects: [
            'Calculator Application',
            'File Management System',
            'Data Analysis Script',
            'Simple Web Scraper'
        ],
        duration: '8 weeks',
        difficulty: 'Beginner',
        icon: 'fab fa-python'
    },
    java: {
        title: 'Java Programming',
        description: 'Build robust applications with Java object-oriented programming.',
        topics: [
            'Java Basics and Syntax',
            'Object-Oriented Programming',
            'Classes and Objects',
            'Inheritance and Polymorphism',
            'Interfaces and Abstract Classes',
            'Exception Handling',
            'Collections Framework',
            'File I/O Operations'
        ],
        projects: [
            'Bank Account Management System',
            'Student Grade Calculator',
            'Simple Game Development',
            'Database Connection Application'
        ],
        duration: '10 weeks',
        difficulty: 'Intermediate',
        icon: 'fab fa-java'
    },
    swift: {
        title: 'Swift Programming',
        description: 'Develop iOS and macOS applications with Swift.',
        topics: [
            'Swift Basics and Syntax',
            'Variables and Constants',
            'Control Flow',
            'Functions and Closures',
            'Classes and Structures',
            'Protocols and Extensions',
            'Error Handling',
            'iOS Development Basics'
        ],
        projects: [
            'Simple iOS Calculator',
            'Todo List App',
            'Weather App',
            'Photo Gallery App'
        ],
        duration: '8 weeks',
        difficulty: 'Intermediate',
        icon: 'fab fa-swift'
    },
    cpp: {
        title: 'C++ Programming',
        description: 'Master system programming and game development with C++.',
        topics: [
            'C++ Basics and Syntax',
            'Pointers and References',
            'Object-Oriented Programming',
            'Templates and Generic Programming',
            'STL (Standard Template Library)',
            'Memory Management',
            'File Handling',
            'Advanced C++ Features'
        ],
        projects: [
            'Simple Game Engine',
            'Data Structure Implementations',
            'File Processing System',
            'Algorithm Visualizer'
        ],
        duration: '12 weeks',
        difficulty: 'Advanced',
        icon: 'fas fa-copyright'
    }
};

// Comprehensive lesson content for fundamental programming concepts
const lessonContent = {
    fundamentals: {
        title: 'Programming Fundamentals',
        lessons: [
            {
                id: 'variables',
                title: 'Variables and Data Types',
                content: `
                    <div class="lesson-content">
                        <h2>Variables and Data Types</h2>
                        <p>Variables are containers that store data values. Think of them as labeled boxes where you can put different types of information.</p>
                        
                        <h3>What are Variables?</h3>
                        <p>A variable is a named storage location in computer memory that can hold different types of data.</p>
                        
                        <h3>Basic Data Types</h3>
                        <div class="code-example">
                            <h4>JavaScript Example:</h4>
                            <pre><code>// Numbers
let age = 25;
let price = 19.99;

// Strings (text)
let name = "John Doe";
let message = 'Hello World!';

// Booleans (true/false)
let isStudent = true;
let isWorking = false;

// Arrays (collections)
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Objects
let person = {
    name: "John",
    age: 25,
    city: "New York"
};</code></pre>
                        </div>
                        
                        <h3>Variable Declaration</h3>
                        <p>In JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>:</p>
                        <ul>
                            <li><code>let</code> - for variables that can change</li>
                            <li><code>const</code> - for variables that cannot change (constants)</li>
                            <li><code>var</code> - older way (avoid using)</li>
                        </ul>
                        
                        <div class="practice-exercise">
                            <h4>Practice Exercise:</h4>
                            <p>Create variables for your name, age, and favorite programming language.</p>
                            <button class="btn btn-primary" onclick="showSolution('variables')">Show Solution</button>
                        </div>
                    </div>
                `
            },
            {
                id: 'conditionals',
                title: 'If-Else Statements',
                content: `
                    <div class="lesson-content">
                        <h2>If-Else Statements</h2>
                        <p>Conditional statements allow your program to make decisions based on certain conditions.</p>
                        
                        <h3>Basic If Statement</h3>
                        <div class="code-example">
                            <h4>JavaScript Example:</h4>
                            <pre><code>let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}</code></pre>
                        </div>
                        
                        <h3>If-Else Statement</h3>
                        <div class="code-example">
                            <pre><code>let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}</code></pre>
                        </div>
                        
                        <h3>Comparison Operators</h3>
                        <ul>
                            <li><code>==</code> - Equal to (loose equality)</li>
                            <li><code>===</code> - Strictly equal to</li>
                            <li><code>!=</code> - Not equal to</li>
                            <li><code>!==</code> - Strictly not equal to</li>
                            <li><code>&gt;</code> - Greater than</li>
                            <li><code>&lt;</code> - Less than</li>
                            <li><code>&gt;=</code> - Greater than or equal to</li>
                            <li><code>&lt;=</code> - Less than or equal to</li>
                        </ul>
                        
                        <div class="practice-exercise">
                            <h4>Practice Exercise:</h4>
                            <p>Write a program that checks if a number is positive, negative, or zero.</p>
                            <button class="btn btn-primary" onclick="showSolution('conditionals')">Show Solution</button>
                        </div>
                    </div>
                `
            },
            {
                id: 'loops',
                title: 'Loops',
                content: `
                    <div class="lesson-content">
                        <h2>Loops</h2>
                        <p>Loops allow you to execute a block of code multiple times. They're essential for processing data and automating repetitive tasks.</p>
                        
                        <h3>For Loop</h3>
                        <p>The most common loop for iterating a specific number of times.</p>
                        <div class="code-example">
                            <h4>JavaScript Example:</h4>
                            <pre><code>// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// Loop through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}</code></pre>
                        </div>
                        
                        <h3>While Loop</h3>
                        <p>Executes code while a condition is true.</p>
                        <div class="code-example">
                            <pre><code>let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}
// Output: Count: 0, Count: 1, Count: 2</code></pre>
                        </div>
                        
                        <h3>For...Of Loop (Modern JavaScript)</h3>
                        <p>Simpler way to iterate through arrays and other iterable objects.</p>
                        <div class="code-example">
                            <pre><code>let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
// Output: red, green, blue</code></pre>
                        </div>
                        
                        <h3>For...In Loop</h3>
                        <p>Used to iterate through object properties.</p>
                        <div class="code-example">
                            <pre><code>let person = {
    name: "John",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output: name: John, age: 25, city: New York</code></pre>
                        </div>
                        
                        <div class="practice-exercise">
                            <h4>Practice Exercise:</h4>
                            <p>Write a program that prints the first 10 even numbers using a for loop.</p>
                            <button class="btn btn-primary" onclick="showSolution('loops')">Show Solution</button>
                        </div>
                    </div>
                `
            },
            {
                id: 'switch',
                title: 'Switch Statements',
                content: `
                    <div class="lesson-content">
                        <h2>Switch Statements</h2>
                        <p>Switch statements provide an alternative to if-else chains when you need to compare a single value against multiple options.</p>
                        
                        <h3>Basic Switch Statement</h3>
                        <div class="code-example">
                            <h4>JavaScript Example:</h4>
                            <pre><code>let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break;
    case "Wednesday":
        console.log("Middle of the week");
        break;
    case "Thursday":
        console.log("Almost Friday");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Weekend!");
}</code></pre>
                        </div>
                        
                        <h3>Switch with Numbers</h3>
                        <div class="code-example">
                            <pre><code>let grade = 85;

switch (true) {
    case grade >= 90:
        console.log("Grade: A");
        break;
    case grade >= 80:
        console.log("Grade: B");
        break;
    case grade >= 70:
        console.log("Grade: C");
        break;
    case grade >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}</code></pre>
                        </div>
                        
                        <h3>Important Notes</h3>
                        <ul>
                            <li><code>break</code> is crucial - without it, execution continues to the next case</li>
                            <li><code>default</code> handles any value not matched by other cases</li>
                            <li>Switch statements are often more readable than long if-else chains</li>
                        </ul>
                        
                        <div class="practice-exercise">
                            <h4>Practice Exercise:</h4>
                            <p>Create a switch statement that converts numbers 1-7 to day names.</p>
                            <button class="btn btn-primary" onclick="showSolution('switch')">Show Solution</button>
                        </div>
                    </div>
                `
            },
            {
                id: 'arrays',
                title: 'Arrays',
                content: `
                    <div class="lesson-content">
                        <h2>Arrays</h2>
                        <p>Arrays are ordered collections of data. They allow you to store multiple values in a single variable.</p>
                        
                        <h3>Creating Arrays</h3>
                        <div class="code-example">
                            <h4>JavaScript Example:</h4>
                            <pre><code>// Array literal syntax
let fruits = ["apple", "banana", "orange"];

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let emptyArray = [];</code></pre>
                        </div>
                        
                        <h3>Accessing Array Elements</h3>
                        <div class="code-example">
                            <pre><code>let colors = ["red", "green", "blue"];

console.log(colors[0]);  // "red" (first element)
console.log(colors[1]);  // "green" (second element)
console.log(colors[2]);  // "blue" (third element)
console.log(colors.length);  // 3 (array length)</code></pre>
                        </div>
                        
                        <h3>Common Array Methods</h3>
                        <div class="code-example">
                            <pre><code>let fruits = ["apple", "banana"];

// Add elements
fruits.push("orange");        // Add to end
fruits.unshift("grape");      // Add to beginning

// Remove elements
fruits.pop();                 // Remove from end
fruits.shift();               // Remove from beginning

// Find elements
let index = fruits.indexOf("banana");  // Get index
let hasApple = fruits.includes("apple");  // Check if exists

// Transform arrays
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(x => x * 2);  // [2, 4, 6, 8, 10]
let evens = numbers.filter(x => x % 2 === 0);  // [2, 4]
let sum = numbers.reduce((acc, x) => acc + x, 0);  // 15</code></pre>
                        </div>
                        
                        <h3>Looping Through Arrays</h3>
                        <div class="code-example">
                            <pre><code>let fruits = ["apple", "banana", "orange"];

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of loop (recommended)
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Arrow function with forEach
fruits.forEach(fruit => console.log(fruit));</code></pre>
                        </div>
                        
                        <div class="practice-exercise">
                            <h4>Practice Exercise:</h4>
                            <p>Create an array of numbers and find the sum of all even numbers.</p>
                            <button class="btn btn-primary" onclick="showSolution('arrays')">Show Solution</button>
                        </div>
                    </div>
                `
            }
        ]
    }
};

// Solutions for practice exercises
const solutions = {
    variables: `
        <div class="solution">
            <h4>Solution:</h4>
            <pre><code>let myName = "Your Name";
let myAge = 25;
let favoriteLanguage = "JavaScript";

console.log("Name: " + myName);
console.log("Age: " + myAge);
console.log("Favorite Language: " + favoriteLanguage);</code></pre>
        </div>
    `,
    conditionals: `
        <div class="solution">
            <h4>Solution:</h4>
            <pre><code>let number = 5;

if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}</code></pre>
        </div>
    `,
    loops: `
        <div class="solution">
            <h4>Solution:</h4>
            <pre><code>for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}
// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</code></pre>
        </div>
    `,
    switch: `
        <div class="solution">
            <h4>Solution:</h4>
            <pre><code>let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}</code></pre>
        </div>
    `,
    arrays: `
        <div class="solution">
            <h4>Solution:</h4>
            <pre><code>let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        sum += number;
    }
}

console.log("Sum of even numbers: " + sum);
// Output: Sum of even numbers: 30</code></pre>
        </div>
    `
};

// Course tab data
const courseTabs = {
    fundamentals: {
        courses: [
            {
                title: 'Programming Basics',
                level: 'Level 1',
                topics: [
                    'Variables and Data Types',
                    'Control Structures',
                    'Functions and Methods',
                    'Basic Algorithms'
                ]
            },
            {
                title: 'Object-Oriented Programming',
                level: 'Level 2',
                topics: [
                    'Classes and Objects',
                    'Inheritance',
                    'Polymorphism',
                    'Encapsulation'
                ]
            }
        ]
    },
    web: {
        courses: [
            {
                title: 'Frontend Development',
                level: 'Level 2',
                topics: [
                    'HTML5 and CSS3',
                    'JavaScript ES6+',
                    'Responsive Design',
                    'Web APIs'
                ]
            },
            {
                title: 'Backend Development',
                level: 'Level 3',
                topics: [
                    'Server-side Programming',
                    'Database Design',
                    'API Development',
                    'Authentication'
                ]
            }
        ]
    },
    mobile: {
        courses: [
            {
                title: 'iOS Development',
                level: 'Level 3',
                topics: [
                    'Swift Programming',
                    'UIKit Framework',
                    'Core Data',
                    'App Store Deployment'
                ]
            },
            {
                title: 'Android Development',
                level: 'Level 3',
                topics: [
                    'Kotlin Programming',
                    'Android SDK',
                    'Material Design',
                    'Google Play Deployment'
                ]
            }
        ]
    },
    advanced: {
        courses: [
            {
                title: 'Data Structures & Algorithms',
                level: 'Level 4',
                topics: [
                    'Advanced Data Structures',
                    'Algorithm Analysis',
                    'Sorting and Searching',
                    'Dynamic Programming'
                ]
            },
            {
                title: 'System Design',
                level: 'Level 5',
                topics: [
                    'Scalable Architecture',
                    'Microservices',
                    'Cloud Computing',
                    'Performance Optimization'
                ]
            }
        ]
    }
};

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Language modal functionality
function openLanguage(language) {
    const data = languageData[language];
    if (!data) return;

    const modalHTML = `
        <div class="language-modal">
            <div class="modal-header">
                <div class="language-title">
                    <i class="${data.icon}"></i>
                    <h2>${data.title}</h2>
                </div>
                <div class="language-meta">
                    <span class="difficulty ${data.difficulty.toLowerCase()}">${data.difficulty}</span>
                    <span class="duration">${data.duration}</span>
                </div>
            </div>
            
            <p class="language-description">${data.description}</p>
            
            <div class="modal-sections">
                <div class="modal-section">
                    <h3><i class="fas fa-list"></i> What You'll Learn</h3>
                    <ul class="topics-list">
                        ${data.topics.map(topic => `<li><i class="fas fa-check"></i> ${topic}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-project-diagram"></i> Projects You'll Build</h3>
                    <ul class="projects-list">
                        ${data.projects.map(project => `<li><i class="fas fa-rocket"></i> ${project}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="startCourse('${language}')">
                    <i class="fas fa-play"></i>
                    Start Learning
                </button>
                <button class="btn btn-outline" onclick="viewSyllabus('${language}')">
                    <i class="fas fa-file-alt"></i>
                    View Syllabus
                </button>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Course tab functionality
function showCourseTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.course-tab').forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Show corresponding content
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add('active');
        loadCourseContent(tabName);
    }
}

// Load course content dynamically
function loadCourseContent(tabName) {
    const tabContent = document.getElementById(tabName);
    const data = courseTabs[tabName];
    
    if (!data || !tabContent) return;
    
    const coursesHTML = data.courses.map(course => `
        <div class="course-card">
            <div class="course-header">
                <h3>${course.title}</h3>
                <span class="course-level">${course.level}</span>
            </div>
            <ul class="course-topics">
                ${course.topics.map(topic => `<li><i class="fas fa-check"></i> ${topic}</li>`).join('')}
            </ul>
            <button class="btn btn-outline" onclick="startCourse('${course.title.toLowerCase().replace(/\s+/g, '-')}')">
                Start Learning
            </button>
        </div>
    `).join('');
    
    tabContent.innerHTML = `<div class="course-grid">${coursesHTML}</div>`;
}

// Enhanced course and language actions
function startCourse(courseId) {
    if (courseId === 'fundamentals' || courseId === 'programming-basics' || 
        courseId === 'html' || courseId === 'javascript' || courseId === 'python' || 
        courseId === 'java' || courseId === 'swift' || courseId === 'cpp') {
        showLessonContent('fundamentals');
    } else {
        // For other courses, show a placeholder
        showLessonContent('fundamentals'); // Default to fundamentals for now
    }
}

function viewSyllabus(language) {
    showSyllabusContent(language);
}

// Show lesson content
function showLessonContent(courseType) {
    const content = lessonContent[courseType];
    if (!content) return;

    const lessonHTML = `
        <div class="lesson-container">
            <div class="lesson-header">
                <h2>${content.title}</h2>
                <button class="btn btn-outline" onclick="closeLesson()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
            
            <div class="lesson-navigation">
                ${content.lessons.map((lesson, index) => `
                    <button class="lesson-nav-btn ${index === 0 ? 'active' : ''}" 
                            onclick="showLesson('${lesson.id}')">
                        ${index + 1}. ${lesson.title}
                    </button>
                `).join('')}
            </div>
            
            <div class="lesson-content-area">
                ${content.lessons[0].content}
            </div>
        </div>
    `;

    modalContent.innerHTML = lessonHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show specific lesson
function showLesson(lessonId) {
    const lesson = lessonContent.fundamentals.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    // Update navigation buttons
    document.querySelectorAll('.lesson-nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Update content
    const contentArea = document.querySelector('.lesson-content-area');
    if (contentArea) {
        contentArea.innerHTML = lesson.content;
    }
}

// Show syllabus content
function showSyllabusContent(language) {
    const data = languageData[language];
    if (!data) return;

    const syllabusHTML = `
        <div class="syllabus-container">
            <div class="syllabus-header">
                <h2>${data.title} - Complete Syllabus</h2>
                <button class="btn btn-outline" onclick="closeLesson()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
            
            <div class="syllabus-content">
                <div class="syllabus-overview">
                    <h3>Course Overview</h3>
                    <p>${data.description}</p>
                    <div class="course-info">
                        <span><i class="fas fa-clock"></i> Duration: ${data.duration}</span>
                        <span><i class="fas fa-signal"></i> Level: ${data.difficulty}</span>
                    </div>
                </div>
                
                <div class="syllabus-modules">
                    <h3>Course Modules</h3>
                    ${data.topics.map((topic, index) => `
                        <div class="module">
                            <h4>Module ${index + 1}: ${topic}</h4>
                            <ul>
                                <li>Introduction to ${topic}</li>
                                <li>Practical examples and exercises</li>
                                <li>Hands-on coding practice</li>
                                <li>Quiz and assessment</li>
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <div class="syllabus-projects">
                    <h3>Final Projects</h3>
                    ${data.projects.map((project, index) => `
                        <div class="project">
                            <h4>Project ${index + 1}: ${project}</h4>
                            <p>Apply all learned concepts to build a complete ${project.toLowerCase()}.</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    modalContent.innerHTML = syllabusHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close lesson/syllabus
function closeLesson() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show solution for practice exercises
function showSolution(exerciseId) {
    const solution = solutions[exerciseId];
    if (!solution) return;

    // Find the practice exercise and append solution
    const exerciseElement = event.target.closest('.practice-exercise');
    if (exerciseElement) {
        // Remove existing solution if any
        const existingSolution = exerciseElement.querySelector('.solution');
        if (existingSolution) {
            existingSolution.remove();
            event.target.textContent = 'Show Solution';
        } else {
            exerciseElement.insertAdjacentHTML('beforeend', solution);
            event.target.textContent = 'Hide Solution';
        }
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.language-card, .course-card, .practice-card, .feature');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Typing animation for code
function typeCode() {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 500);
    });
}

// Initialize code animation
document.addEventListener('DOMContentLoaded', () => {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        line.style.transition = 'all 0.5s ease';
    });
    
    setTimeout(typeCode, 1000);
});

// Practice section interactions
document.addEventListener('DOMContentLoaded', () => {
    const practiceButtons = document.querySelectorAll('.practice-card .btn');
    practiceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const cardTitle = e.target.closest('.practice-card').querySelector('h3').textContent;
            alert(`Starting ${cardTitle.toLowerCase()}`);
        });
    });
});

// Search functionality (placeholder)
function searchCourses(query) {
    // In a real application, this would search through courses
    console.log('Searching for:', query);
}

// Progress tracking (placeholder)
function trackProgress(courseId, lessonId) {
    // In a real application, this would save progress to localStorage or database
    localStorage.setItem(`progress_${courseId}`, lessonId);
}

// Get user progress
function getUserProgress(courseId) {
    return localStorage.getItem(`progress_${courseId}`) || 0;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Ctrl/Cmd + K for search (placeholder)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        alert('Search functionality coming soon!');
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // In a real application, this would send data to analytics service
    console.log('Event tracked:', eventName, eventData);
}

// Show lesson content
function showLessonContent(courseType) {
    const content = lessonContent[courseType];
    if (!content) return;

    const lessonHTML = `
        <div class="lesson-container">
            <div class="lesson-header">
                <h2>${content.title}</h2>
                <button class="btn btn-outline" onclick="closeLesson()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
            
            <div class="lesson-navigation">
                ${content.lessons.map((lesson, index) => `
                    <button class="lesson-nav-btn ${index === 0 ? 'active' : ''}" 
                            onclick="showLesson('${lesson.id}')">
                        ${index + 1}. ${lesson.title}
                    </button>
                `).join('')}
            </div>
            
            <div class="lesson-content-area">
                ${content.lessons[0].content}
            </div>
        </div>
    `;

    modalContent.innerHTML = lessonHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show specific lesson
function showLesson(lessonId) {
    const lesson = lessonContent.fundamentals.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    // Update navigation buttons
    document.querySelectorAll('.lesson-nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Update content
    const contentArea = document.querySelector('.lesson-content-area');
    if (contentArea) {
        contentArea.innerHTML = lesson.content;
    }
}

// Show syllabus content
function showSyllabusContent(language) {
    const data = languageData[language];
    if (!data) return;

    const syllabusHTML = `
        <div class="syllabus-container">
            <div class="syllabus-header">
                <h2>${data.title} - Complete Syllabus</h2>
                <button class="btn btn-outline" onclick="closeLesson()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
            
            <div class="syllabus-content">
                <div class="syllabus-overview">
                    <h3>Course Overview</h3>
                    <p>${data.description}</p>
                    <div class="course-info">
                        <span><i class="fas fa-clock"></i> Duration: ${data.duration}</span>
                        <span><i class="fas fa-signal"></i> Level: ${data.difficulty}</span>
                    </div>
                </div>
                
                <div class="syllabus-modules">
                    <h3>Course Modules</h3>
                    ${data.topics.map((topic, index) => `
                        <div class="module">
                            <h4>Module ${index + 1}: ${topic}</h4>
                            <ul>
                                <li>Introduction to ${topic}</li>
                                <li>Practical examples and exercises</li>
                                <li>Hands-on coding practice</li>
                                <li>Quiz and assessment</li>
                            </ul>
                        </div>
                    `).join('')}
                </div>
                
                <div class="syllabus-projects">
                    <h3>Final Projects</h3>
                    ${data.projects.map((project, index) => `
                        <div class="project">
                            <h4>Project ${index + 1}: ${project}</h4>
                            <p>Apply all learned concepts to build a complete ${project.toLowerCase()}.</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    modalContent.innerHTML = syllabusHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close lesson/syllabus
function closeLesson() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show solution for practice exercises
function showSolution(exerciseId) {
    const solution = solutions[exerciseId];
    if (!solution) return;

    // Find the practice exercise and append solution
    const exerciseElement = event.target.closest('.practice-exercise');
    if (exerciseElement) {
        // Remove existing solution if any
        const existingSolution = exerciseElement.querySelector('.solution');
        if (existingSolution) {
            existingSolution.remove();
            event.target.textContent = 'Show Solution';
        } else {
            exerciseElement.insertAdjacentHTML('beforeend', solution);
            event.target.textContent = 'Hide Solution';
        }
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openLanguage = openLanguage;
window.showCourseTab = showCourseTab;
window.startCourse = startCourse;
window.viewSyllabus = viewSyllabus;
window.showLesson = showLesson;
window.closeLesson = closeLesson;
window.showSolution = showSolution;
