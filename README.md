<div align="center">

TECNOLOGICO NACIONAL DE MEXICO

INSTITUTO TECNOLOGICO DE OAXACA

Departamento de Ingenieria en Sistemas Computacionales

<img src="img/logoportada.png" alt="Logo de portada" width="260">

Materia: Programacion Web

Actividad: Actividad 5. React con Vite

Docente: Martinez Nieto Adelina

Grupo: 7SD

Alumno: Valencia Borja Omar Rutilio

Numero de control: 22161258

Oaxaca, Oaxaca, 04 de Julio de 2026

</div>

# t3_act5_react

Mini aplicacion propia creada con React y Vite. El proyecto es un **Planificador de estudio** donde se pueden agregar temas, marcar temas como completados, ajustar un contador de minutos de estudio y mostrar u ocultar un consejo.

La aplicacion fue hecha para practicar lo visto en el video: componentes funcionales, props, estado con `useState`, eventos, renderizado condicional y listas dinamicas con `.map()`.

## Funcionalidades

- Agregar un nuevo tema de estudio.
- Mostrar una lista dinamica de temas usando `.map()`.
- Marcar y desmarcar temas como completados.
- Cambiar un contador de minutos con botones.
- Mostrar u ocultar un consejo de estudio.
- Mostrar una tarjeta de perfil usando props.
- Estilos responsivos para computadora, tablet y celular.

## Componentes usados

- `StudyPlanner`: componente principal de la mini aplicacion.
- `Encabezado`: componente funcional simple.
- `PerfilEstudiante`: componente que recibe y muestra props.

## Preguntas

### a) Que diferencia hay entre props y state en React?

Las `props` son datos que un componente recibe desde otro componente. Sirven para pasar informacion de un componente padre a un componente hijo. Normalmente el componente que recibe props solo las usa para mostrar informacion o ejecutar una funcion recibida.

El `state` es informacion interna de un componente. Puede cambiar con el tiempo y cuando cambia React actualiza lo que se ve en pantalla.

En mi proyecto, `PerfilEstudiante` recibe props como `nombre`, `grupo` y `meta`. En cambio, `StudyPlanner` usa state para guardar los temas, el texto del nuevo tema, los minutos y si se muestra o no el consejo.

### b) Por que es importante usar una key al renderizar una lista de elementos?

La `key` ayuda a React a identificar cada elemento de una lista. Esto es importante porque cuando se agrega, elimina o cambia un elemento, React puede actualizar solo lo necesario.

En mi aplicacion la uso al renderizar los temas:

```jsx
temas.map((tema) => (
    <li key={tema.id}>
        {tema.titulo}
    </li>
))
```

### c) Explica con tus propias palabras que hace la funcion useState y da un ejemplo de donde la usaste en tu mini aplicacion.

`useState` permite crear una variable que React puede recordar y actualizar. Cuando esa variable cambia usando su funcion `set`, React vuelve a renderizar el componente para mostrar el nuevo valor.

En mi aplicacion lo use para guardar la lista de temas:

```jsx
const [temas, setTemas] = useState(temasIniciales);
```

Tambien lo use para el contador de minutos:

```jsx
const [minutos, setMinutos] = useState(25);
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
