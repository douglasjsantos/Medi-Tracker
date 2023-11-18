// pages/dashboard.js
"use client";
import { useState } from "react";
import Select from "react-select";

const popularMedications = [
  { label: "Paracetamol", value: "Paracetamol" },
  { label: "Ibuprofeno", value: "Ibuprofeno" },
  { label: "Aspirina", value: "Aspirina" },
  { label: "Amoxicilina", value: "Amoxicilina" },
  { label: "Omeprazol", value: "Omeprazol" },
  { label: "Metformina", value: "Metformina" },
  { label: "Simvastatina", value: "Simvastatina" },
  { label: "Atorvastatina", value: "Atorvastatina" },
  { label: "LevoTiroxina", value: "LevoTiroxina" },
  { label: "Metoprolol", value: "Metoprolol" },
  { label: "Amlodipina", value: "Amlodipina" },
  { label: "Losartana", value: "Losartana" },
  { label: "Clopidogrel", value: "Clopidogrel" },
  { label: "Rosuvastatina", value: "Rosuvastatina" },
  { label: "Salbutamol", value: "Salbutamol" },
  { label: "Escitalopram", value: "Escitalopram" },
  { label: "Sertralina", value: "Sertralina" },
  { label: "Tramadol", value: "Tramadol" },
  { label: "Metronidazol", value: "Metronidazol" },
  { label: "Citalopram", value: "Citalopram" },
  { label: "Diazepam", value: "Diazepam" },
  { label: "Warfarina", value: "Warfarina" },
  { label: "Furosemida", value: "Furosemida" },
  { label: "Amiodarona", value: "Amiodarona" },
  { label: "Fluoxetina", value: "Fluoxetina" },
  { label: "Prednisona", value: "Prednisona" },
  { label: "Ramipril", value: "Ramipril" },
  { label: "Lisinopril", value: "Lisinopril" },
  { label: "Doxiciclina", value: "Doxiciclina" },
  { label: "Gabapentina", value: "Gabapentina" },
  { label: "Montelucaste", value: "Montelucaste" },
  { label: "Valsartana", value: "Valsartana" },
  { label: "AAS", value: "AAS" },
  { label: "Hidroclorotiazida", value: "Hidroclorotiazida" },
  { label: "Pantoprazol", value: "Pantoprazol" },
  { label: "Candesartana", value: "Candesartana" },
  { label: "Levotiroxina", value: "Levotiroxina" },
  { label: "Venlafaxina", value: "Venlafaxina" },
  { label: "Clonazepam", value: "Clonazepam" },
  { label: "Paroxetina", value: "Paroxetina" },
  {
    label: "Amoxicilina + Ácido Clavulânico",
    value: "Amoxicilina + Ácido Clavulânico",
  },
  { label: "Mirtazapina", value: "Mirtazapina" },
  { label: "Olanzapina", value: "Olanzapina" },
  { label: "Duloxetina", value: "Duloxetina" },
  { label: "Cefalexina", value: "Cefalexina" },
  { label: "Fluconazol", value: "Fluconazol" },
  {
    label: "Metformina + Cloridrato de Pioglitazona",
    value: "Metformina + Cloridrato de Pioglitazona",
  },
  { label: "Esomeprazol", value: "Esomeprazol" },
  { label: "Enalapril", value: "Enalapril" },
  { label: "Naproxeno", value: "Naproxeno" },
  { label: "Ceftriaxona", value: "Ceftriaxona" },
  { label: "Sinvastatina", value: "Sinvastatina" },
  { label: "Salmeterol + Fluticasona", value: "Salmeterol + Fluticasona" },
  { label: "Ezetimiba", value: "Ezetimiba" },
  { label: "Rosiglitazona", value: "Rosiglitazona" },
  { label: "Quetiapina", value: "Quetiapina" },
  { label: "Ciprofloxacino", value: "Ciprofloxacino" },
  { label: "Atenolol", value: "Atenolol" },
  { label: "Pioglitazona", value: "Pioglitazona" },
  { label: "Aripiprazol", value: "Aripiprazol" },
  { label: "Trazodona", value: "Trazodona" },
  { label: "Carbamazepina", value: "Carbamazepina" },
  { label: "Cefuroxima", value: "Cefuroxima" },
  { label: "Amitriptilina", value: "Amitriptilina" },
  { label: "Risperidona", value: "Risperidona" },
  { label: "Digoxina", value: "Digoxina" },
  {
    label: "Amitriptilina + Clordiazepóxido",
    value: "Amitriptilina + Clordiazepóxido",
  },
  { label: "Fenitoína", value: "Fenitoína" },
  { label: "Loratadina", value: "Loratadina" },
  { label: "Diltiazem", value: "Diltiazem" },
  { label: "Ondansetrona", value: "Ondansetrona" },
];

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [medications, setMedications] = useState([]);
  const [newDosage, setNewDosage] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [disease, setDisease] = useState("");
  const [currentDateMedications, setCurrentDateMedications] = useState([]);

  const addMedication = () => {
    if (!selectedMedication || newDosage.trim() === "") {
      return;
    }

    setMedications([
      ...medications,
      { name: selectedMedication.label, dosage: newDosage },
    ]);
    setSelectedMedication(null);
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

    setCurrentDateMedications((prevMedications) =>
      prevMedications.filter((_, i) => i !== index)
    );
  };

  const markMedicationTaken = (index) => {
    const updatedMedications = [...currentDateMedications];
    updatedMedications[index].taken = !updatedMedications[index].taken;
    setCurrentDateMedications(updatedMedications);
  };

  const displayMedicationsForCurrentDate = () => {
    setCurrentDateMedications(
      medications.map((medication) => ({ ...medication, taken: false }))
    );
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
          <Select
            className="w-64"
            options={popularMedications}
            value={selectedMedication}
            onChange={(selectedOption) => setSelectedMedication(selectedOption)}
            placeholder="Selecione um medicamento..."
          />
          <input
            type="text"
            placeholder="Dosagem do Medicamento"
            value={newDosage}
            onChange={(e) => setNewDosage(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Nome da Doença"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
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
        <button
          onClick={displayMedicationsForCurrentDate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          Mostrar Medicações do Dia Atual
        </button>
      </div>

      <div className="mt-4">
        <table className="min-w-full border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Remédio</th>
              <th className="border px-4 py-2">Dosagem</th>
              <th className="border px-4 py-2">Doença</th>
              <th className="border px-4 py-2">Tomado</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {currentDateMedications.map((medication, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{medication.name}</td>
                <td className="border px-4 py-2">{medication.dosage}</td>
                <td className="border px-4 py-2">{disease}</td>
                <td className="border px-4 py-2">
                  {medication.taken ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                      ✔
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md">
                      ✘
                    </span>
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => editMedication(index, prompt("Novo nome:"))}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteMedication(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    Excluir
                  </button>
                  <button
                    onClick={() => markMedicationTaken(index)}
                    className={`bg-purple-700 hover:bg-purple-800 text-white px-2 py-1 rounded-md ml-2 ${
                      medication.taken ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={medication.taken}
                  >
                    Marcar Tomado
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
