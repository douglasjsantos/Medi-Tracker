// pages/dashboard.js
"use client";
import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState("");
  const [newDosage, setNewDosage] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const addMedication = () => {
    if (newMedication.trim() === "" || newDosage.trim() === "") {
      return;
    }

    setMedications([
      ...medications,
      { name: newMedication, dosage: newDosage },
    ]);
    setNewMedication("");
    setNewDosage("");
  };

  const editMedication = (index, newName) => {
    const updatedMedications = [...medications];
    updatedMedications[index].name = newName;
    setMedications(updatedMedications);
  };

  const deleteMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  if (!isLoggedIn) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-full flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-purple-700">
        Olá, bem-vindo
      </h1>
      <p>Que medicamento deseja adicionar?</p>

      <div className="mt-4">
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Nome do Medicamento"
            value={newMedication}
            onChange={(e) => setNewMedication(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Dosagem do Medicamento"
            value={newDosage}
            onChange={(e) => setNewDosage(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 w-full"
          />
          <button
            onClick={addMedication}
            className="bg-purple-700 text-white px-4 py-2 rounded-md shadow-md"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="mt-4">
        <table className="min-w-full border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Remédio</th>
              <th className="border px-4 py-2">Dosagem</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((medication, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{medication.name}</td>
                <td className="border px-4 py-2">{medication.dosage}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => editMedication(index, prompt("Novo nome:"))}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteMedication(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
