import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

export default function App() {
  return (
    <BrowserRouter>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-green-600 text-white px-4 py-2 rounded-xl z-[100]"
      >
        Skip to main content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
              <p className="font-display font-black text-8xl text-green-200 mb-4">404</p>
              <h1 className="font-display font-bold text-3xl text-gray-900 mb-3">Page Not Found</h1>
              <p className="text-gray-500 mb-8">
                Looks like this page got lost on the delivery route!
              </p>
              <a href="/" className="btn-primary text-base">
                Go Back Home
              </a>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
