[Front Health e-Commerce App ](https://github.com/hernbb/project-front-health-app)
### Instructions

#### Instala dependencias
- npm i
- npm run dev
<!-- #### Crea archivo .env y agrega variables de entorno
![.env](https://user-images.githubusercontent.com/14861253/170860925-8da6984f-791a-4f9a-8747-d7e4a4917310.png)
- crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno: <br>
  - TOKEN_SECRET = super-secret-password <br>
  - MONGODB_URI = "ruta de la base de datos" -> opcional, mirad /project3-back/db/index.js para entenderlo<br>
  (si tiene MONGODB_URI aceptará esta, sino || aceptará "mongodb://localhost...") <br>
  ![MONGODB_URI](https://user-images.githubusercontent.com/14861253/170861097-88a6dc84-ed25-4290-9057-e5d3215aa461.png)
#### Cambiar el nombre de la base de datos antes de la creación de esta
- cambiar la línia en /project3-back/db/index.js por el nombre de la base de datos que queráis<br>
  - "mongodb://localhost/project-management-server"; //siendo project-management-server el nombre de la base de datos que os creará una vez ejecutéis npm start, así que si queréis una web de películas, poned "project-movies-server" o si tenéis un nombre estilo "netflix" pensado, agregarlo aquí antes del npm start.
  - OJO!, esto ha de ser antes de lanzar el siguiente paso
#### Lanza el backend
- npm start

#### Agregar archivo .env con:
- TOKEN_SECRET = super-secret-password
- MONGODB_URI=mongodb+srv://user:password.@redone.w7gjz.mongodb.net/?retryWrites=true&w=majority 

--- -->

### API Documentation

We will start our project by first documenting all of the routes and data models for our API. Following best practices we will use _verbs_ to specify the type of operation being done and _nouns_ when naming endpoints.

#### Routes

##### Profile routes

| HTTP verb | URL                        | Request body | Action                          |
| --------- | -------------------------- | ------------ | ------------------------------- |
| GET       | `/api/profile`             | JSON         | Returns the user profile by Id  |
| POST      | `/api/profile`             | JSON         | Update profile                  |

##### Pruebas routes

| HTTP verb | URL                  | Request body | Action                      |
| --------- | -------------------- | ------------ | --------------------------  |
| POST      | `/`                  | JSON         | Create prueba               |
| GET       | `/`                  | JSON         | Find all pruebas            |
| POST      | `/add-pruebas`       | JSON         | Push pruebas to user        |
| GET       | `/api/carrito`       | JSON         | Print all pruebas user have |
| POST      | `/api/carrito`       | JSON         | Deletes the specified prueba|
| PUT       | `/api/carrito`       | JSON         | Set user pruebas empty      |

##### Auth routes

| HTTP verb | URL            | Request Headers                 | Request Body              |
| --------- | -------------- | ------------------------------- | ------------------------- |
| POST      | `/auth/signup` | --                              | { email, password, name } |
| POST      | `/auth/login`  | --                              | { email, password }       |
| GET       | `/auth/verify` | Authorization: Bearer \< JWT \> | --                        |



<hr>

#### Models


##### Pruebas Model

```js
{
    title: String,
    description: String,
    price: Number
  }
```

##### User Model

```js
{
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dni: { type: String, unique: true, required: true },
  telefono: { type: String, unique: true, required: true },
  country: { type: String, default: ""},
  address1: { type: String, default: ""},
  address2: { type: String, default: ""},
  city: { type: String, default: ""},
  province: { type: String, default: ""},
  zipCode: { type: String, default: ""},
  pruebas: [{ type: Schema.Types.ObjectId, ref: "Pruebas" }]
}
```

