import React, { useState } from "react";

const flashcards = [
    { question: "Who is known as the father of computer science?", answer: "Alan Turing" },
    { question: "What does CPU stand for?", answer: "Central Processing Unit" },
    { question: "Which programming language is known for its snake logo?", answer: "Python" },
    { question: "What is the time complexity of binary search?", answer: "O(log n)" },
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "Which data structure uses LIFO (Last In, First Out)?", answer: "Stack" },
    { question: "What is the primary purpose of an operating system?", answer: "To manage hardware and software resources" },
    { question: "What does RAM stand for?", answer: "Random Access Memory" },
    { question: "Which company developed the C programming language?", answer: "Bell Labs" },
    { question: "What is the main function of a compiler?", answer: "To convert source code into machine code" },
    { question: "Which sorting algorithm has the best average-case time complexity?", answer: "Merge Sort (O(n log n))" },
    { question: "What is the name of the first high-level programming language?", answer: "FORTRAN" },
    { question: "Which logic gate returns true only when both inputs are true?", answer: "AND gate" },
    { question: "What does DNS stand for in networking?", answer: "Domain Name System" },
    { question: "Which protocol is used for secure web communication?", answer: "HTTPS (HyperText Transfer Protocol Secure)" }
];

const Flashcard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const nextCard = () => {
        const newIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(newIndex);
        setFlipped(false);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setFlipped(false);
        setFeedback("");
        setUserAnswer("");
    };
    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        setFlipped(false);
        setFeedback("");
        setUserAnswer("");
    };

    const handleCheckAnswer = () => {
        if (userAnswer.trim().toLowerCase() === flashcards[currentIndex].answer.toLowerCase()) {
          setFeedback("✅ Correct!");
        } else {
          setFeedback("❌ Incorrect! Try again.");
        }
    };

    return (
        <div className="container">
            <h1 className="title">Computer Science Trivia 💻</h1>
            <p className="description">How good of CS student are you? Test all of your knowledge here 🧠</p>
            <p>Number of cards: {flashcards.length}</p>

            <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
                <div className="card-inner">
                    <div className="card-front">
                        <h3>{flashcards[currentIndex].question}</h3>
                    </div>
                    <div className="card-back">
                        <h3>{flashcards[currentIndex].answer}</h3>
                    </div>
                </div>
            </div>
            <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />  
             <button onClick={handleCheckAnswer}>Submit</button>
            <p className="feedback">{feedback}</p>

            <div className="buttons">
                <button className="next-button" onClick={handleBack}>⬅ Back</button>
                <button className="next-button" onClick={handleNext}>Next ➡</button>
            </div>
            {/* <button className="next-button" onClick={nextCard}>Next</button> */}
        </div>
    );
};

export default Flashcard;
