import styles from "./TodoForm.module.css";
import { useState } from "react";
import { Plus } from "lucide-react";

const TodoForm = ({ onAgregarNota }) => {
    const [textNote, setTextNote] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (textNote === "") {
            console.log("No se puede agregar notas vacias");
            return;
        }

        // Aqui tenemos que enviar la nota a la db
        const newNote = {
            text: textNote,
            completed: false,
        };

        try {
            const response = await fetch("http://localhost:3000/notas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newNote),
            });

            if (!response.ok) {
                throw new Error(`Error http: ${response.status}`);
            }

            const data = await response.json();
            onAgregarNota(data);
        } catch (error) {
            console.error(error);
            onAgregarNota({
                id: crypto.randomUUID(),
                ...newNote,
            });
        }

        setTextNote("");
    };

    return (
        <div className={styles.formContainer}>
            <h2>Todo Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="nota"
                    name="nota"
                    value={textNote}
                    onChange={(event) => setTextNote(event.target.value)}
                />
                <button type="submit">
                    <Plus size={16} />
                    Crear nota
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
