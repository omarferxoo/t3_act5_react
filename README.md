<div align="center">

TECNOLOGICO NACIONAL DE MEXICO

INSTITUTO TECNOLOGICO DE OAXACA

Departamento de Ingenieria en Sistemas Computacionales



Materia: Programacion Web

Actividad: Actividad 5. React con Vite

Docente: Martinez Nieto Adelina

Grupo: 7SD

Alumno: Valencia Borja Omar Rutilio

Numero de control: 22161258

Oaxaca, Oaxaca, 04 de Julio de 2026

</div>

# t3_act5_react

Mini aplicacion hecha con React y Vite. El proyecto consiste en una lista de notas/tareas donde se practican componentes, props, estado con `useState`, efectos con `useEffect`, eventos, renderizado condicional y listas con `.map()`.

## Funcionalidades

- Crear notas desde un formulario.
- Mostrar una lista dinamica de notas.
- Marcar y desmarcar notas como completadas.
- Editar el texto de una nota.
- Eliminar notas.
- Uso de iconos con `lucide-react`.
- Uso de CSS Modules para estilos por componente.

## Componentes usados

- `TodoApp`: componente principal de la mini aplicacion. Maneja el estado de las notas y renderiza la lista.
- `TodoForm`: componente con props para agregar una nueva nota.
- `EditNoteForm`: componente con props para editar una nota existente.

## Preguntas

### a) ¿Que diferencia hay entre props y state en React?

Las `props` son datos que un componente recibe desde otro componente. Sirven para pasar informacion de un componente padre a un componente hijo. En cambio, el `state` es informacion interna que pertenece a un componente y puede cambiar durante la ejecucion de la aplicacion.

Por ejemplo, en mi proyecto `TodoForm` recibe la prop `onAgregarNota`, mientras que `TodoApp` usa state para guardar la lista de notas.

### b) ¿Por que es importante usar una key al renderizar una lista de elementos?

La `key` ayuda a React a identificar cada elemento de una lista. Esto es importante porque cuando la lista cambia, React puede saber que elemento se agrego, elimino o actualizo sin volver a renderizar todo de forma innecesaria.

En mi aplicacion uso:

```jsx
notas.map((nota) => (
    <li key={nota.id}>
        {nota.text}
    </li>
))
```

### c) Explica con tus propias palabras que hace la funcion useState y da un ejemplo de donde la usaste en tu mini aplicacion.

`useState` permite crear una variable de estado en un componente funcional. Esta variable puede cambiar y cuando cambia React actualiza la pantalla automaticamente.

En mi proyecto lo use para guardar las notas:

```jsx
const [notas, setNotas] = useState([]);
```

Tambien lo use para saber que nota se esta editando:

```jsx
const [notaEditandoId, setNotaEditandoId] = useState(null);
```

### d) Enlace del repositorio de GitHub

[https://github.com/omarferxoo/t3_act5_react](https://github.com/omarferxoo/t3_act5_react)

### e) Enlace del proyecto desplegado en GitHub Pages

[https://omarferxoo.github.io/t3_act5_react/](https://omarferxoo.github.io/t3_act5_react/)

## Comandos principales

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Generar build:

```bash
npm run build
```

Desplegar en GitHub Pages:

```bash
npm run deploy
```
