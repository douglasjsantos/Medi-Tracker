// pages/dashboard.js
"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { format, addDays, subDays } from "date-fns";

const popularMedications = [
  { label: "Metformina", value: "Metformina" },
  { label: "Aspirina", value: "Aspirina" },
  { label: "Salmeterol", value: "Salmeterol" },
  { label: "Orlistat", value: "Orlistat" },
  { label: "Alendronato", value: "Alendronato" },
  { label: "Eritropoetina", value: "Eritropoetina" },
  { label: "Cisplatina", value: "Cisplatina" },
  { label: "Donepezila", value: "Donepezila" },
  { label: "Metotrexato", value: "Metotrexato" },
];

const popularDoencas = [
  { label: "Hipertensão Arterial", value: "Hipertensão Arterial" },
  { label: "Diabetes Mellitus Tipo 2", value: "Diabetes Mellitus Tipo 2" },
  { label: "Doença Cardíaca Coronária", value: "Doença Cardíaca Coronária" },
  {
    label: "Doença Pulmonar Obstrutiva Crônica",
    value: "Doença Pulmonar Obstrutiva Crônica",
  },
  { label: "Obesidade", value: "Obesidade" },
  { label: "Osteoporose", value: "Osteoporose" },
  { label: "Doença Renal Crônica", value: "Doença Renal Crônica" },
  { label: "Câncer de Pulmão", value: "Câncer de Pulmão" },
  { label: "Doença de Alzheimer", value: "Doença de Alzheimer" },
  { label: "Artrite Reumatoide", value: "Artrite Reumatoide" },
];

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [medications, setMedications] = useState([]);
  const [newDosage, setNewDosage] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedDoenca, setSelectedDoenca] = useState(null);
  const [currentDateMedications, setCurrentDateMedications] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Adicionado state para a data selecionada
  const currentDate = new Date();
  const days = Array.from({ length: 7 }, (_, index) =>
    index < 3
      ? subDays(currentDate, 3 - index)
      : index === 3
      ? currentDate
      : addDays(currentDate, index - 3)
  );
  const formatDate = (date) => format(date, "dd/MM");
  const daysOfWeekPt = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const formatDayOfWeek = (date) => daysOfWeekPt[date.getDay()];
  const router = useRouter();

  const increaseDosage = () => {
    setNewDosage((prevDosage) => prevDosage + 1);
  };

  const decreaseDosage = () => {
    if (newDosage > 0) {
      setNewDosage((prevDosage) => prevDosage - 1);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const addMedication = () => {
    if (!selectedMedication || newDosage.trim() === "" || !selectedDoenca) {
      return;
    }

    const newMedication = {
      name: selectedMedication.label,
      dosage: newDosage,
      disease: selectedDoenca.label,
      date: selectedDate.toISOString(),
    };

    setMedications([...medications, newMedication]);
    setSelectedMedication(null);
    setSelectedDoenca(null);
    setNewDosage("");

    setCurrentDateMedications((prevMedications) => [
      ...prevMedications,
      { ...newMedication, taken: false },
    ]);
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

  const displayMedicationsForDate = (date) => {
    setSelectedDate(date); // Atualizado para definir a data selecionada
    const filteredMedications = medications.filter((medication) => {
      const medicationDate = new Date(medication.date);
      return formatDate(medicationDate) === formatDate(date);
    });

    setCurrentDateMedications(
      filteredMedications.map((medication) => ({ ...medication, taken: false }))
    );
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end w-full mb-4">
        <button
          onClick={handleLogout}
          className="text-purple-700 hover:text-purple-900 font-bold"
        >
          Sair
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-purple-700">
        Olá, bem-vindo
      </h1>
      <p>
        Que medicamento deseja adicionar? Hoje é{" "}
        <span className="font-bold text-purple-700">
          {formatDayOfWeek(currentDate)}
        </span>{" "}
      </p>

      <div className="flex mt-2 space-x-2">
        {days.map((day, index) => (
          <button
            key={index}
            className={`${
              index === 3 ? "bg-purple-700" : "bg-gray-300"
            } text-white px-4 py-2 rounded-md ${
              formatDate(day) === formatDate(selectedDate)
                ? "border-2 border-purple-900"
                : ""
            }`}
            onClick={() => displayMedicationsForDate(day)}
          >
            {formatDate(day)}
          </button>
        ))}
      </div>

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
            onChange={(e) => setNewDosage(e.target.value.replace(/\D/g, ""))}
            className="rounded-md border border-gray-300 px-3 py-2 w-full"
          />
          <Select
            className="w-64"
            options={popularDoencas}
            value={selectedDoenca}
            onChange={(selectedOption) => setSelectedDoenca(selectedOption)}
            placeholder="Selecione uma doença..."
          />
          <button
            onClick={addMedication}
            className="bg-purple-700 text-white px-4 py-2 rounded-md shadow-md"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="mt-4"></div>

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
                <td className="border px-4 py-2">{medication.disease}</td>
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
