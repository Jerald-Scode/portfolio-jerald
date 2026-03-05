import { NextResponse } from "next/server";

/**
 * Curated collection of inspirational quotes for developers.
 * The API returns a different quote each day based on the date,
 * so every visitor sees the same "quote of the day."
 */
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to carpet.", author: "Chris Heilmann" },
  { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
  { text: "It's not a bug. It's an undocumented feature!", author: "Anonymous" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.", author: "Mosher's Law" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.", author: "Elbert Hubbard" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
  { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
  { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
  { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
  { text: "Knowledge is power.", author: "Francis Bacon" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
];

export async function GET() {
  // Use the current date to deterministically pick a quote of the day
  const today = new Date();
  const dayOfYear =
    Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
  const index = dayOfYear % quotes.length;
  const quote = quotes[index];

  return NextResponse.json({
    quote: quote.text,
    author: quote.author,
    date: today.toISOString().split("T")[0],
  });
}
