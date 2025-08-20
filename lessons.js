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

// Export for use in main script
window.lessonContent = lessonContent;
window.solutions = solutions;
