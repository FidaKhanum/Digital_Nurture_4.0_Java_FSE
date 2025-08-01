import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  // State to keep track of the currently active view
  const [activeView, setActiveView] = useState('books'); // 'books', 'blogs', or 'courses'
  
  // State to demonstrate the && operator
  const [showExtraInfo, setShowExtraInfo] = useState(true);

  // --- Method 1: Using a helper function with a switch statement ---
  // This is a clean way to handle multiple conditions, similar to using if/else if/else.
  const renderActiveView = () => {
    switch (activeView) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Blogger App</h1>
        <nav>
          <button onClick={() => setActiveView('books')}>Book Details</button>
          <button onClick={() => setActiveView('blogs')}>Blog Details</button>
          <button onClick={() => setActiveView('courses')}>Course Details</button>
        </nav>
      </header>

      <main>
        {/* The selected component is rendered here using the helper function */}
        {renderActiveView()}

        <div className="extra-section">
          <h2>Other Rendering Examples</h2>
          
          {/* --- Method 2: Ternary Operator (? :) --- */}
          {/* This is great for simple if/else logic inline. */}
          <div className="example-card">
            <h3>Ternary Operator Example</h3>
            {activeView === 'books' ? (
              <p>You are currently viewing the <strong>Books</strong> section.</p>
            ) : (
              <p>You are not viewing the books section.</p>
            )}
          </div>

          {/* --- Method 3: Logical && Operator --- */}
          {/* This is useful for rendering something only if a condition is true. */}
          <div className="example-card">
            <h3>Logical '&&' Operator Example</h3>
            <button onClick={() => setShowExtraInfo(!showExtraInfo)}>
              {showExtraInfo ? 'Hide' : 'Show'} Extra Info
            </button>
            {showExtraInfo && (
              <div className="extra-info">
                <p>This message is shown because 'showExtraInfo' is true.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
