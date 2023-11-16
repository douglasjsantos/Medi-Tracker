import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700">MediTracker</h1>
      </div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Faça login na sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou
            <a
              href="#"
              className="font-medium text-purple-700 hover:text-purple-800 px-2"
            >
              Registre-se
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                placeholder="E-mail"
              />
            </div>

            <div>
              <input
                type="password"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2"
                placeholder="Senha"
              />
            </div>
          </div>

          <div>
            <button className="group-relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
