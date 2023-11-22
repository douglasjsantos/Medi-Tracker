// pages/index.js
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen relative p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">MediTracker</h1>
        <p className="text-lg mb-4">
          Nunca esqueça de tomar seus medicamentos!
        </p>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <Link
          href="/"
          className="bg-white text-purple-900 py-2 px-4 rounded-md"
        >
          Login
        </Link>
      </div>
      <div className="mt-8 text-center">
        <p className="mb-4">
          Receba lembretes personalizados para cuidar da sua saúde.
        </p>
        <p>
          O MediTracker simplifica o gerenciamento de medicamentos, garantindo
          que você nunca perca uma dose importante.
        </p>
      </div>
      <footer className="text-center text-sm mt-8">
        <p>© 2023 MedReminder. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
