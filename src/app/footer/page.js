// components/Footer.js

import React from "react";

const members = [
  {
    name: "Douglas Santos",
    rm: "552365",
    turma: "1TDSPY",
    cargo: "Desenvolvedor Front-end",
  },
  {
    name: "Mariana Bastos",
    rm: "97510",
    turma: "1TDSPY",
    cargo: "Desenvolvedora Back-End",
  },
  {
    name: "Diego Henrique",
    rm: "550269",
    turma: "1TDSPY",
    cargo: "Desenvolvedor Back-End",
  },
  {
    name: "Vicenzo Guardabassi",
    rm: "550208",
    turma: "1TDSPY",
    cargo: "Desenvolveu a Experiência do Usuário",
  },
  {
    name: "Ezequiel Bispo",
    rm: "99573",
    turma: "1TDSPY",
    cargo: "Desenvolveu a Experiência do Usuário",
  },

  // Adicione outros membros da equipe conforme necessário
];

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8 text-center">
      <h2 className="text-lg font-bold mb-4">Equipe</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="mb-2">
            <strong>{member.name}</strong> - RM: {member.rm} | Turma:{" "}
            {member.turma} | Cargo: {member.cargo}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
