# Proyecto API & Client

Este proyecto utiliza **React.js** y **NestJS**, junto con **Postman** y **SQLite3**. La colección de Postman está anclada directamente en la carpeta raíz del proyecto.

## 📂 Estructura del Proyecto

El proyecto está dividido en dos carpetas principales:

```
📦 Proyecto
├── 📂 Client (Frontend)
│   ├── 📂 src
│   │   ├── 📂 pages
│   │   │   ├── SearchStudent.js
│   │   │   ├── Students.js
│   │   │   ├── CreateStudent.js
│   │   ├── 📂 services
│   │   │   ├── Api.js
│   │   ├── App.js
├── 📂 Api (Backend)
│   ├── 📂 src
│   │   ├── 📂 auth
│   │   │   ├── api-key.guard.ts
│   │   ├── 📂 students
│   │   │   ├── 📂 dto
│   │   │   │   ├── create-student.dto.ts
│   │   │   │   ├── update-student.dto.ts
│   │   │   ├── 📂 entities
│   │   │   │   ├── student.entity.ts
```

### 📌 Descripción de las carpetas

#### 📁 Client (Frontend)

- **`src/pages/`**: Contiene las páginas principales del frontend:
  - `Students.js`: Interfaz para mostrar alumnos existentes.
  - `SearchStudent.js`: Interfaz para consultar alumnos.
  - `CreateStudent.js`: Interfaz para crear un nuevo alumno.
- **`src/services/Api.js`**: Archivo que maneja la conexión entre el frontend y el backend.
- **`App.js`**: Configuración de rutas y reutilización de componentes.

#### 📁 Api (Backend)

- **`src/auth/`**: Contiene `api-key.guard.ts` para autenticación con API Key.
- **`src/students/`**:
  - 📂 `dto/` (Data Transfer Objects):
    - `create-student.dto.ts` → Define la estructura para la creación de alumnos.
    - `update-student.dto.ts` → Define la estructura para actualizar alumnos.
  - 📂 `entities/`:
    - `student.entity.ts` → Define la estructura de la base de datos.

## 🛠 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
```

### 2️⃣ Instalación de Dependencias

Ejecuta los siguientes comandos en ambas carpetas (`Client` y `Api`):

```bash
npm install
```

### 3️⃣ Iniciar el Proyecto

#### En **Windows**

```bash
# Iniciar el backend (NestJS)
npm run start:dev

# Iniciar el frontend (React.js)
npm start
```

🚀 ¡Listo! Ahora puedes acceder a la aplicación desde tu navegador.
