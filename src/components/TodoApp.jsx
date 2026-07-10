import styles from "./todoApp.module.css";
import TodoForm from "./todoForm/TodoForm";
import EditNoteForm from "./EditNoteForm/EditNoteForm";
import { useState, useEffect } from "react";
import { SquarePen, Trash } from "lucide-react";

const notasIniciales = [
    {
        id: 1,
        text: "Aprender React",
        completed: false,
    },
    {
        id: 2,
        text: "Hacer ejercicio",
        completed: true,
    },
    {
        id: 3,
        text: "Leer un libro",
        completed: false,
    },
];

// useEffect()
function TodoApp() {
    const [notas, setNotas] = useState([]);
    const [notaEditandoId, setNotaEditandoId] = useState(null);
    const [tareas, setTareas] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const onHandleClick = () => {
        setTareas([...tareas, "nueva tarea"]); // esta es la forma correcta
        // setTareas(tareas.push("nueva tarea"))
    };

    // setTareas([...tareas, "nueva tarea"]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/notas");

                if (!response.ok) {
                    throw new Error(`Error http: ${response.status}`);
                }

                const data = await response.json();
                setNotas(data);
                console.log("NOTAS CARGADAS");
            } catch (error) {
                console.log(error);
                setNotas(notasIniciales);
            }
        };

        fetchData();
    }, []);

    const agregarNota = (nuevaNota) => {
        setNotas([...notas, nuevaNota]);
    };

    const eliminarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
        fetch(`http://localhost:3000/notas/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Error al eliminar la nota: ${response.status}`
                    );
                }
                console.log("Nota eliminada correctamente");
            })
            .catch((error) => console.error(error));
    };

    const actualizarNota = (notaActualizada) => {
        setNotas(
            notas.map((nota) =>
                nota.id === notaActualizada.id ? notaActualizada : nota
            )
        );
    };

    const marcarComoCompleta = async (notaId) => {
        const nota = notas.find((nota) => nota.id === notaId);
        const notaLocalActualizada = {
            ...nota,
            completed: !nota.completed,
        };

        setNotas(
            notas.map((nota) =>
                nota.id === notaId ? notaLocalActualizada : nota
            )
        );

        try {
            const response = await fetch(
                `http://localhost:3000/notas/${notaId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ completed: !nota.completed }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Error al actualizar una nota: ${response.status}`
                );
            }

            const notaActualizada = await response.json();
            setNotas(
                notas.map((nota) =>
                    nota.id === notaId ? notaActualizada : nota
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    // (props) | (propsComponente)
    // { notasApp }
    // const { notasApp } = props

    return (
        <>
            <h1 className={styles.titulo}>Notas</h1>
            <TodoForm onAgregarNota={agregarNota} />
            <ul className={styles.noteList}>
                {notas.map((nota) => (
                    <li className={styles.noteItem} key={nota.id}>
                        <div className={styles.noteContent}>
                            <span>
                                {nota.text} {nota.completed ? "✅" : "❌"}
                            </span>
                            <div className={styles.iconsContainer}>
                                <button
                                    className={styles.toggleButton}
                                    onClick={() => marcarComoCompleta(nota.id)}
                                >
                                    {nota.completed ? "Desmarcar" : "Completar"}
                                </button>
                                <SquarePen
                                    onClick={() => setNotaEditandoId(nota.id)}
                                    size={26}
                                />
                                <Trash
                                    onClick={() => eliminarNota(nota.id)}
                                    size={26}
                                />
                            </div>
                        </div>
                        {notaEditandoId === nota.id && (
                            <EditNoteForm
                                nota={nota}
                                onEditarNota={actualizarNota}
                                onCancelar={() => setNotaEditandoId(null)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoApp;

// props propiedades
