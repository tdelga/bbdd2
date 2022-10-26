# Trabajo final Bases de Datos II

## 1. Presentacion

#### Este es el trabajo final para la materia Bases de Datos 2

#### Hecho por Tomas Delgadino

#### Nro de legajo: 14211/5

#### Este proyecto es una API REST, desarrollada con el framework [SailsJS](https://sailsjs.com/), ya que queria trabajar con esta herramienta desde hace un tiempo, tambien me parecio bastante completo y se adapta perfecto a los parametros de este trabajo final. Utiliza como ORM [Waterline](https://waterlinejs.org/), que se puede hacer el uso tanto bases de datos relacionales, como no relacionales.

#### En este proyecto se usaron como bases de datos: ==MySQL y MongoDB==

#### Y como herramienta de testeo decidi utilizar [Insomnia](https://insomnia.rest/), una aplicacion Open Source, ya que ofrece una herramienta de testeo automatico que se puede integrar en deploys automaticos mediante CI/CD, por este motivo decidi utilizar Insomnia.

---

## 2. Instalacion

#### Estos son los requerimientos para poder ejectuar y testear la aplicacion la aplicacion:

- [Node JS](https://nodejs.org/en/) (8 o posterior)
- [InsomniaREST](https://insomnia.rest/download)
- Instalar el plugin siguiente: [aqui](https://insomnia.rest/plugins/insomnia-plugin-save-variables)

#### Estos son los pasos para levantar la aplicacion:

1. Abrir una terminal el la raiz del proyecto
2. Ejecutar el comando `npm install`
3. Ejecutar el comando `npx sails lift`
4. El servidor esta disponible en: [http://localhost:1337](http://localhost:1337), la documentacion esta disponible en: [http://localhost:1337/swagger](http://localhost:1337/swagger)

#### Estos son los pasos para ejecutar los tests:

1. Abrir la aplicacion de Insomnia
2. Importar el archivo ubicado en `./test/Insomnia_2022-10-25.json`
3. Dirigirse a la pestaña de `TEST`
4. Elegir cualquier test y presionar el boton `RUN TESTS`

---

## 3. Consideraciones

1. Para poder cambiar entre MySQL y MongoDB se deben cambiar los siguientes archivos:
   - ./config/models.js: en las linea 74, 75 esta la configuracion de el modelo de datos, en caso de usar MongoDB se debe usar "\_id" y en MySQL se usa "id"
   - ./config/datastores.js: en las 48 a 51, estan los adapters para las diferentes bases de datos y las urls de las mismas
2. Para poder ejecutar los tests las bases de datos deben estar vacias.
