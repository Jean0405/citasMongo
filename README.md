<div style="background-color: #00FF74; color: black; text-align:center;">
  <h1 style="padding-top: 5px;">TALLER CITAS CON MONGODB</h1>
</div>

En este proyecto Backend se crean endpoints con los cuales podemos realizar consultas a bases de datos de MONGO, a continuación la explicación de cada endpoint.

## Installation

1. Clona este repositorio en tu computadora, usa el siguiente comando:

```bash
git clone https://github.com/Jean0405/citasMongo.git
```

2. Asegurate de tener Node.js instalado en tu computadora. De no ser así, descargalo e instala [Node js](https://nodejs.org/es/download)

3. Instala las dependecias necesarias de forma automatica con el siguiente comando, el cual tomara el archivo **package.json** y lo tomara de guía para dichas instalaciones.

```bash
  npm install
```

4. ejecuta el archivo database/db.mongodb

5. ejecuta npm run dev

### [BASE DE DATOS]

Al clonar, podrás ejecutar del archivo **databases/db.mongodb** para uso correcto de los datos de prueba

### [VARIABLES DE ENTORNO]

#### ⚠️ _Recuerda implementar tus propias variables de entorno_ ⚠️

- Aunque puedes usar este PORT y HOST para las pruebas

```env
PORT=3300
HOST=127.25.25.27

DB={"user":"", "password":"", "database":""}

PRIVATE_KEY=""
```
## A TENER EN CUENTA

En el proyecto habrá algunos endpoints que estarán restringidos a los usuarios, y solo podrán ingresar doctores con el rol y permiso solicitado por el endpoint.

* **_¿CÓMO SABEMOS QUE ENDPOINTS ESTÁN RESTRINGIDOS?_**

Aquellos restringidos tendrán un **MIDDLEWARE** llamado `verifyToken(argumento)`  en su endpoint con el *PERMISO* solicitado siendo enviado como **argumento** ya que ese endpoint pertenecera a un conjunto.
```javascript
v1Routes.use("/doctors", verifyToken("mid_level"), v1Doctors);
```
Además esos endpoint estarán marcados en esta documentación con el siguiente emoji 🪪.

* **LIMITE DE PETICIONES**

*Max es 5 peticiones en menos de 30 segundos*

* **MAX DE INTENTOS AL LOG IN**

*Max es 5 peticiones en menos de 30 segundos*

## USO Y CONSUMO DE LOS ENDPOINTS

#### 🟢 ENDPOINT LOGIN

Este endpoint permite realizar un log in de los **DOCTORES**, el cual si existe en la DB creara un **TOKEN** con los permisos de dicho doctor.

`http://127.25.25.27:3300/v1/login`

**_BODY EJEMPLO_**

```json
{
  "emailDoctor": "rodriguez@example.com",
  "passwordDoctor": "rodriguez123"
}
```

#### 🟢 ENDPOINTS PACIENTES/USUARIOS

- **GET**: `http://127.25.25.27:3300/v1/users` -> listar pacientes/usuarios alfabeticamente

- **GET**: `http://127.25.25.27:3300/v1/users/:userID` -> listar paciente/usuario por su ID

- **POST**: `http://127.25.25.27:3300/v1/users` -> Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente.

**_BODY EJEMPLO_**
```json
{
    ID: 1005184201,
    names: {
      name: "Juan",
      surname: "Pérez",
    },
    age: 20,
    phone: "1234567890",
    address: "Calle B",
    email: "juan@gmail.com",
    genre: {
      nameGenre: "masculino",
      abbreviation: "M",
    },
  },
```

*Si no es mayor de edad, deberá ingresar un acudiente*
```json
{
    ID: 1005184201,
    names: {
      name: "Juan",
      surname: "Pérez",
    },
    age: 17,
    phone: "1234567890",
    address: "Calle B",
    email: "juan@gmail.com",
    genre: {
      nameGenre: "masculino",
      abbreviation: "M",
    },
    attendant: {
      ID: 1234567890,
      name: "Ana",
      phone: "9876543210",
      address: "Avenida ABC",
    },
  },
```

#### 🟢 ENDPOINTS CITAS

- **GET:** `http://127.25.25.27:3300/v1/quotes` -> listar citas alfabeticamente

- **GET:** `http://127.25.25.27:3300/v1/quotes/next_quote/:userID` -> listar la proxima cita de un paciente por su ID

- 🪪 **GET:** `http://127.25.25.27:3300/v1/quotes/doctor/:doctorID` -> Encontrar todos los pacientes que tienen citas con un médico específico

- **GET:** `http://127.25.25.27:3300/v1/quotes/date/:date` -> Listar las citas para un día especifico (por ejemplo, **'2023-10-10'**)

- 🪪 **GET:** `http://127.25.25.27:3300/v1/quotes/statistics/doctor=:doctorID&date=:date` -> Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **ID 1097094415 en '2023-10-10'**)

- **GET:** `http://127.25.25.27:3300/v1/quotes/genre/:genre` -> Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

- 🪪 **GET:** `http://127.25.25.27:3300/v1/quotes/rejected/starDate=:startDate&endDate=:endDate` -> Mostrar todas las citas que fueron rechazadas *ENTRE DOS FECHAS*.


#### 🟢 ENDPOINTS DOCTORES
*TODOS LOS ENDPOINTS DE DOCTORES REQUIEREN PERMISOS*

- 🪪 **GET:** `http://127.25.25.27:3300/v1/doctors/specialty/:specialty` -> listar doctores por especialidad (por ejemplo, **'Cardiología'**)

- 🪪 **GET:** `http://127.25.25.27:3300/v1/doctors` -> Obtener los médicos y sus consultorios


## AUTOR

Keanon Jeanpierre Angarita Olarte

[Jean0405](https://github.com/Jean0405)