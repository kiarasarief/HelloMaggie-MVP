import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import AuthForm from "./components/sections/AuthForm";
import GoogleForm from "./components/sections/GoogleForm";
import FAQ from "./components/sections/FAQ";
import Team from "./components/sections/Team";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AuthForm />
        <GoogleForm />
        <FAQ />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
