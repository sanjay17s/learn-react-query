import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main content of our website.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company and mission.</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;