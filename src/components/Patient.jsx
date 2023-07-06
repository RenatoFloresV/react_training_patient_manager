import { useState } from "react";
import { format } from "date-fns";
import Modal from "react-modal";

import DeleteModal from "./DeleteModal";

Modal.setAppElement('#root');

const Patient = ({ patient, setPatient, deletePatient }) => {
    const { name, owner, email, date, symptoms, id } = patient;

    // const handleDelete = ()=> {
    //     const response = confirm('¿Desea eliminar este registro?')
    //     if(response){
    //         deletePatient(id)
    //     }
    // }
    const dateParts = date.split("-");
const year = parseInt(dateParts[0]);
const month = parseInt(dateParts[1]) - 1; // Los meses en JavaScript comienzan desde 0 (enero es 0)
const day = parseInt(dateParts[2]);

const dateFormat = new Date(year, month, day);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deletePatient(id);
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre {""}
                <span className="font-normal capitalize">{name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario {""}
                <span className="font-normal capitalize">{owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha alta {""}
                <span className="font-normal normal-case">{format(dateFormat, 'dd/MM/yyyy')}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas {""}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
    font-bold uppercase rounded-lg text-white"
                    type="button"
                    onClick={() => setPatient(patient)}
                >
                    Editar
                </button>
                <DeleteModal
                    isOpen={isModalOpen}
                    confirmDelete={confirmDelete}
                    cancelDelete={cancelDelete}
                />
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700
    font-bold uppercase rounded-lg text-white"
                    type="button"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Patient;
