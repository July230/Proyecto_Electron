# Introducción

El siguiente laboratorio es la base fundamental para hacer desarrollo utilizando como la tecnología Electron JS, manejo del renderer, procesos, etc. El lenguaje de programación es JavaScript. Nos basaremos en la documentación oficial de ['Electron'](https://www.electronjs.org/), la herramienta ['Electron Forge'](https://www.electronforge.io/) y algunas guías en YouTube:
- ['Breve introducción a Electron'](https://www.youtube.com/watch?v=m3OjWNFREJo)
- ['Usando Electron'](https://www.youtube.com/watch?v=ir9yaSgbOdY)
- ['Creando una app con JavaScript y Electron'](https://www.youtube.com/watch?v=ML743nrkMHw)

---

# Electron

## Contexto de la tecnología

Electron.js es un framework que permite construir aplicaciones de escritorio multiplataforma utilizando tecnologías web como JavaScript, HTML y CSS. Electron facilita el desarrollo de interfaces modernas y dinámicas, lo cual es una gran ventaja para el proyecto, ya que una parte clave es ofrecer una interfaz intuitiva y fácil de usar. Además, la aplicación está destinada a ejecutarse en Windows, por lo que el hecho de que Electron empaquete la aplicación con Chromium y Node.js garantiza compatibilidad sin afectar significativamente el rendimiento del sistema.

El desarrollo en Electron es similar al desarrollo web, por lo que la curva de aprendizaje no es tan pronunciada si ya se cuenta con experiencia en tecnologías web. Sin embargo, uno de los retos principales es entender cómo interactuar con el proceso principal y con el “renderer”, así como gestionar eficientemente los recursos del sistema. La documentación oficial y la amplia comunidad nos brindan una gran cantidad de recursos para aprender a usar Electron. Se estima que un desarrollador con experiencia previa en tecnologías web puede aprender los fundamentos de Electron en aproximadamente una semana y alcanzar un dominio más avanzado en alrededor de un mes.

## Herramientas requerimientos

- Editor de código
- Línea de comandos (terminal, power shell)
- git y github
- Node.js y npm

---

## Preparando el proyecto

### Iniciar el proyecto npm

Las aplicaciones Electron se estructuran con npm, con el archivo package.json como punto de entrada. Para empezar, creamos una carpeta e inicializamos un paquete npm dentro de ella con npm init.

```
mkdir my-electron-app
cd my-electron-app
npm init
```

- El punto de entrada será un archivo llamado main.js

Una vez dentro de nuestro proyecto, instalamos la dependencia

```
npm install electron --save-dev
```

Estamos familiarizados con esto, tendremos la carpeta `node_modules`, al igual que un archivo Nuestro archivo package-lock.json que especifica las versiones exactas de las dependencias que se instalarán. El archivo package.json probablemente se vea así la primera vez:

```
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jane Doe",
  "license": "MIT",
  "devDependencies": {
    "electron": "23.1.3"
  }
}
```

### Agregando un .gitignore

Recordemos que es una buena práctica el tener un repositorio En un proyecto de git donde nuestro repositorio también es remoto en GitHub, no olvidemos agregar un archivo .gitignore. Si no estás haciendo un repositorio de git, facilita el mantenimiento del código, nos permite tener un control de versiones, asilamos el flujo de trabajo, entre otros.

## Iniciando una aplicación de Electron

El script principal que definamos en package.json es el punto de entrada de cualquier aplicación Electron. Este script controla el proceso principal, que se ejecuta en un entorno Node.js y es responsable de controlar el ciclo de vida de la aplicación, mostrar interfaces nativas, realizar operaciones privilegiadas y administrar los procesos de renderizado.

Antes de crear nuestra aplicación Electron, usaremos un script sencillo para asegurarte de que el punto de entrada del proceso principal esté configurado correctamente. Creamos un archivo main.js en la carpeta raíz del proyecto con una sola línea de código:

```
console.log('Hola mundo desde Electron')
```

El proceso principal de Electron es un entorno de ejecución de Node.js, podemos ejecutar código Node.js arbitrario con el comando electron. Para ejecutar este script, vamos a añadir `electron .` al comando de inicio en el campo scripts de tu package.json. Este comando indicará al ejecutable de Electron que busque el script principal en el directorio actual y lo ejecute en modo de desarrollo.

```
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jane Doe",
  "license": "MIT",
  "devDependencies": {
    "electron": "23.1.3"
  }
}
```

Y ejecutamos el siguiente comando dentro de nuestro proyecto

```
npm run start
```

La terminal imprime `Hola mundo desde Electron`.