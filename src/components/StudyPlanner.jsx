import { useState } from "react";
import { BookOpen, CheckCircle2, Circle, Lightbulb, Plus } from "lucide-react";
import styles from "./studyPlanner.module.css";

const temasIniciales = [
    {
        id: 1,
        titulo: "Repasar componentes funcionales",
        categoria: "React",
        completado: true,
    },
    {
        id: 2,
        titulo: "Practicar props con una tarjeta",
        categoria: "Props",
        completado: false,
    },
    {
        id: 3,
        titulo: "Renderizar listas con map",
        categoria: "Listas",
        completado: false,
    },
];

function Encabezado() {
    return (
        <header className={styles.header}>
            <p>Actividad React + Vite</p>
            <h1>Planificador de estudio</h1>
        </header>
    );
}

function PerfilEstudiante({ nombre, grupo, meta }) {
    return (
        <section className={styles.profile}>
            <BookOpen size={32} />
            <div>
                <h2>{nombre}</h2>
                <p>{grupo}</p>
                <span>{meta}</span>
            </div>
        </section>
    );
}

function StudyPlanner() {
    const [temas, setTemas] = useState(temasIniciales);
    const [nuevoTema, setNuevoTema] = useState("");
    const [minutos, setMinutos] = useState(25);
    const [mostrarConsejos, setMostrarConsejos] = useState(false);

    const temasCompletados = temas.filter((tema) => tema.completado).length;

    const agregarTema = (event) => {
        event.preventDefault();

        if (nuevoTema.trim() === "") {
            return;
        }

        const tema = {
            id: crypto.randomUUID(),
            titulo: nuevoTema,
            categoria: "Personal",
            completado: false,
        };

        setTemas([...temas, tema]);
        setNuevoTema("");
    };

    const cambiarEstado = (id) => {
        setTemas(
            temas.map((tema) =>
                tema.id === id
                    ? { ...tema, completado: !tema.completado }
                    : tema
            )
        );
    };

    return (
        <main className={styles.app}>
            <Encabezado />

            <PerfilEstudiante
                nombre="Omar Valencia"
                grupo="Grupo 7SD"
                meta="Meta: practicar React con una mini aplicacion propia"
            />

            <section className={styles.controls}>
                <form onSubmit={agregarTema} className={styles.form}>
                    <input
                        type="text"
                        value={nuevoTema}
                        placeholder="Nuevo tema de estudio"
                        onChange={(event) => setNuevoTema(event.target.value)}
                    />
                    <button type="submit">
                        <Plus size={18} />
                        Agregar
                    </button>
                </form>

                <div className={styles.timer}>
                    <span>{minutos} min</span>
                    <div>
                        <button onClick={() => setMinutos(minutos + 5)}>
                            +5
                        </button>
                        <button
                            onClick={() => setMinutos(Math.max(5, minutos - 5))}
                        >
                            -5
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.summary}>
                <p>
                    Progreso: {temasCompletados} de {temas.length} temas
                    completados
                </p>
                <button onClick={() => setMostrarConsejos(!mostrarConsejos)}>
                    <Lightbulb size={18} />
                    {mostrarConsejos ? "Ocultar consejo" : "Mostrar consejo"}
                </button>
            </section>

            {mostrarConsejos && (
                <aside className={styles.tip}>
                    Divide tu practica en bloques cortos, prueba cada cambio en
                    pantalla y explica con tus palabras que hace cada estado.
                </aside>
            )}

            <ul className={styles.list}>
                {temas.map((tema) => (
                    <li className={styles.item} key={tema.id}>
                        <button
                            className={styles.status}
                            onClick={() => cambiarEstado(tema.id)}
                            aria-label="Cambiar estado"
                        >
                            {tema.completado ? (
                                <CheckCircle2 size={24} />
                            ) : (
                                <Circle size={24} />
                            )}
                        </button>
                        <div>
                            <h3>{tema.titulo}</h3>
                            <p>{tema.categoria}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default StudyPlanner;
