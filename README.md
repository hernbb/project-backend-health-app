## Deploy

#### Front
[Front e-Commerce Health App](https://health-front-app.herokuapp.com/)
#### Backend
[Backend e-Commerce Health App](https://health-backend-app.herokuapp.com/api)

---
## Code

#### Front

[Front Health e-Commerce App ](https://github.com/hernbb/project-front-health-app)

---
### Instructions

#### Instala dependencias
- npm i
- npm run dev

### API Documentation

We will start our project by first documenting all of the routes and data models for our API. Following best practices we will use _verbs_ to specify the type of operation being done and _nouns_ when naming endpoints.

---

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
---
### Creators
### [Hernando Bifaretti](https://github.com/hernbb)     🐸
### [Kaylash Teixidor](https://github.com/Kaaay77) 😜
