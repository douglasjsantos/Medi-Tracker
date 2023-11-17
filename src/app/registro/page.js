export default function Registro() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <a className="text-4xl font-extrabold text-purple-700" href="/">
          Meditracker
        </a>
      </div>
      <div className="max-w-md w-full p-6 rounded-md shadow-md bg-white space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Já tem uma conta? Faça{" "}
            <a href="/" className="text-purple-700 font-bold">
              Login
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                  placeholder="Nome"
                />
              </div>
              <div>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                  placeholder="Sobrenome"
                />
              </div>
            </div>

            <div>
              <input
                type="date"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2"
                placeholder="Data de Nascimento"
              />
            </div>

            <div>
              <input
                type="text"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2"
                placeholder="Número do Documento"
              />
            </div>

            <div>
              <input
                type="email"
                autoComplete="none"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2"
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
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
