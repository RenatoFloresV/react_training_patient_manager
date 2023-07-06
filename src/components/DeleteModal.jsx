import ReactModal from "react-modal";

const DeleteModal = ({ isOpen, confirmDelete, cancelDelete }) => {
    const customStyles = {
        overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
            width: "400px",
            height: "225px",
            margin: "auto",
        },
    };

    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel="Confirm Delete"
            style={customStyles}
            className="bg-white rounded-lg p-6"
        >
            <h2 className="text-2xl font-bold mb-4">Confirmar Eliminación</h2>
            <p className="text-lg mb-6">
                ¿Estás seguro de que deseas eliminar este registro?
            </p>
            <div className="flex justify-between">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    onClick={confirmDelete}
                >
                    Eliminar
                </button>
                <button
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    onClick={cancelDelete}
                >
                    Cancelar
                </button>
            </div>
        </ReactModal>
    );
};

export default DeleteModal;
