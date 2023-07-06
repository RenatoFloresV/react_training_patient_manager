import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient , setPatient}) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymtoms] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSymtoms(patient.symptoms);
        }
    }, [patient]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    const generateId = () => {
        const random = Math.random.toString(36).substr(2);
        const date = Date.now();
        return random + date;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation
        if ([name, owner, email, date, symptoms].includes("")) {
            console.log("Hay un campo vacío");
            setError(true);
            return;
        }
        setError(false);

        //Patient Object
        const patientObject = {
            name,
            owner,
            email,
            date,
            symptoms,
        };

        if (patient.id) {
            // Edit register
            patientObject.id = patient.id;
            const patientUpdated = patients.map((patientState) =>
                patientState.id === patient.id ? patientObject : patientState
            );
            setPatients(patientUpdated);
            setPatient({})
        } else {
            // New register
            (patientObject.id = generateId()),
                setPatients([...patients, patientObject]);
        }

        // Form reset
        setName("");
        setOwner("");
        setEmail("");
        setDate("");
        setSymtoms("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 pb-10">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className=" text-lg mt-5 text-center mb-10">
                Añadir Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Nombre Mascota {''}
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        value={name}
                        onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre del propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        value={owner}
                        onChange={(e) => setOwner(capitalizeFirstLetter(e.target.value))}
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Correo de contacto
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha de alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt2 
                    placeholder-gray-400 rounded-md  "
                        placeholder="Describe los síntomas"
                        value={symptoms}
                        onChange={(e) => setSymtoms(capitalizeFirstLetter(e.target.value))}
                    />
                </div>

                <input
                    type="submit"
                    className=" bg-indigo-600 w-full text-white p-3 
                    font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={patient.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    );
};

export default Form;
