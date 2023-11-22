"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Adicione o estado de login
  const router = useRouter();

  useEffect(() => {
    // Verifica se há um token no localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Se houver um token, define o estado isLoggedIn como true
      setIsLoggedIn(true);
      // Se houver um token, redireciona para a dashboard
      router.push("/dashboard");
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      const url = `http://localhost:8080/paciente/${cpf}?SENHA_PACIENTE=${senha}`;
      const response = await axios.get(url);
      const token = response.data.token;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/home");
    } catch (error) {
      if (error.response && error.response.data) {
        setErroLogin(`Erro ao fazer login: ${error.response.data}`);
      } else if (error.message) {
        setErroLogin(`Erro ao fazer login: ${error.message}`);
      } else {
        setErroLogin("Erro ao fazer login. Detalhes do erro:", error);
      }
    }
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <a className="text-4xl font-extrabold text-purple-700" href="/">
          Meditracker
        </a>
      </div>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
            Faça login na sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ou
            <a
              href="/registro"
              className="text-purple-700 font-bold hover:text-purple-900 px-1"
            >
              Registre-se
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                autoComplete="none"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                placeholder="CPF"
              />
            </div>

            <div>
              <input
                type="password"
                autoComplete="none"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent mt-2"
                placeholder="Senha"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group-relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800"
            >
              Login
            </button>
          </div>
        </form>

        {erroLogin && (
          <div className="mt-4 text-red-600 font-bold">{erroLogin}</div>
        )}
      </div>
    </div>
  );
}
