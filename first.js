// const quotes = [
//     " Life is about making an impact, not making an income. --Kevin Kruse",
//     "The only way to do great work is to love what you do. --Steve Jobs",
//     "Innovation distinguishes between a leader and a follower. --Steve Jobs",
//     "Don't let the noise of others' opinions drown out your own inner voice. --Steve Jobs",
//     "The best time to plant a tree was 20 years ago. The second best time is now. --Chinese Proverb",
//     "An unexamined life is not worth living. --Socrates",
//     "Eighty percent of success is showing up. --Woody Allen",
//     "Your time is limited, so don't waste it living someone else's life. --Steve Jobs",
//     "Winning isn't everything, but wanting to win is. --Vince Lombardi",
//     "I am not a product of my circumstances. I am a product of my decisions. --Stephen Covey",
//     "Every child is an artist. The problem is how to remain an artist once he grows up. --Pablo Picasso",
//     "You can never cross the ocean until you have the courage to lose sight of the shore. --Christopher Columbus",
//     "Either you run the day, or the day runs you. --Jim Rohn",
//     "Whether you think you can or you think you can't, you're right. --Henry Ford",
//     "The two most important days in your life are the day you are born and the day you find out why. --Mark Twain",
//     "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it. --Johann Wolfgang von Goethe",
//     "The best revenge is massive success. --Frank Sinatra",
//     "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. --Zig Ziglar",
//     "Life shrinks or expands in proportion to one's courage. --Anais Nin",
//     "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. --Vincent Van Gogh"
// ];

// const button = document.querySelector("button");
// const quote = document.querySelector("h1");

// button.addEventListener('click',() =>{
//     const index = Math.floor(Math.random()*20);
//     quote.textContent = quotes[index];
// })


// NEW ADD JAVASCRIPT FOR PROFESSIONAL-----

const quotes = [
    { text: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Don't let the noise of others' opinions drown out your own inner voice.", author: "Steve Jobs" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "An unexamined life is not worth living.", author: "Socrates" },
    { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    { text: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso" },
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
    { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", author: "Johann Wolfgang von Goethe" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.", author: "Zig Ziglar" },
    { text: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin" },
    { text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const copyStatus = document.getElementById("copy-status");
const counterEl = document.getElementById("counter");

let currentIndex = -1;

function pad(num) {
    return String(num).padStart(2, "0");
}

function showQuote(index) {
    quoteEl.classList.add("fade");
    authorEl.classList.add("fade");

    setTimeout(() => {
        quoteEl.textContent = quotes[index].text;
        authorEl.textContent = `— ${quotes[index].author}`;
        counterEl.textContent = `${pad(index + 1)} / ${pad(quotes.length)}`;

        quoteEl.classList.remove("fade");
        authorEl.classList.remove("fade");
    }, 200);
}

function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === currentIndex && quotes.length > 1);
    return index;
}

generateBtn.addEventListener("click", () => {
    currentIndex = getRandomIndex();
    showQuote(currentIndex);
    copyStatus.classList.remove("show");
});

copyBtn.addEventListener("click", async () => {
    const current = quotes[currentIndex] || { text: quoteEl.textContent, author: authorEl.textContent };
    const textToCopy = `"${current.text}" ${authorEl.textContent}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        copyStatus.textContent = "Copied to clipboard";
    } catch {
        copyStatus.textContent = "Couldn't copy — try manually selecting";
    }

    copyStatus.classList.add("show");
    setTimeout(() => copyStatus.classList.remove("show"), 2000);
});

// Initialize with a random quote on load
currentIndex = getRandomIndex();
quoteEl.textContent = quotes[currentIndex].text;
authorEl.textContent = `— ${quotes[currentIndex].author}`;
counterEl.textContent = `${pad(currentIndex + 1)} / ${pad(quotes.length)}`;