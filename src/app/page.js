import React from "react";
import Link from "next/link";
import Footer from "./footer/page";
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
          href="/home"
          className="bg-white text-purple-900 py-2 px-4 rounded-md"
        >
          Login
        </Link>
      </div>
      <div className="mt-8 text-center">
        <p className="mb-4">
          Receba lembretes personalizados para cuidar da sua saúde.
        </p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Recursos Principais</h2>
        <div className="flex justify-center">
          <div className="mx-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-2 text-white"
            >
              <path
                d="M21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83177 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.0318 2.99114 11.2812 2.97856 12.5 3.03368"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 15H15.5M8.5 10H12"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>

            <p>Lembretes Personalizados</p>
          </div>
          <div className="mx-4">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-2 text-white"
            >
              <path
                d="M22 22V17H16V22H22Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 22V17H2V22H8Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M19 17V14H5.00105L5 17"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 7L13.5 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            <p>Gerenciamento de Medicamentos</p>
          </div>
        </div>
      </div>

      <Footer />
      <footer className="text-center text-sm mt-8">
        <p>© 2023 MediTracker. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
