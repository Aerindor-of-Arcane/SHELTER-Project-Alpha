# SHELTER-Project-Alpha

## Description
This project demonstrates a basic MVC (Model-View-Controller) architecture for a web application. The backend uses Node.js with Express, Sequelize ORM, and PostgreSQL for data storage. The frontend is built with React to visualize the data. The application includes features such as user authentication, dynamic data handling, and integration of mock data for demonstration purposes.

---

## Features
- **Backend**
  - MVC structure for separation of concerns.
  - User authentication using hashed passwords with bcrypt.
  - Dynamic model loading for scalability.
  - Integration with PostgreSQL via Sequelize.
  - Mock data representing device data (e.g., timestamp and resistance values).

- **Frontend**
  - Built with React.
  - Fetches data from the backend using Axios.
  - Displays device data dynamically.
  - Includes a login page with authentication.

---

## Installation

### Prerequisites
- Node.js and npm installed.
- PostgreSQL installed and running.
- Sequelize CLI installed globally (`npm install -g sequelize-cli`).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Backend Setup**:
   - Navigate to the `server` folder:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure the database:
     - Edit `config/config.json` to match your PostgreSQL configuration.
   - Run migrations:
     ```bash
     npx sequelize-cli db:migrate
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the `client` folder:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

---

## API Endpoints

### Authentication
- `POST /api/auth/login` - Logs in a user.
- `POST /api/auth/register` - Registers a new user.

### Device Data
- `GET /api/data` - Fetches device data.

---

## Technologies Used
- **Backend**: Node.js, Express, Sequelize, PostgreSQL
- **Frontend**: React, Axios, CSS
- **Authentication**: bcrypt

---

## Example Configuration File (config/config.json)
```json
{
  "development": {
    "username": "your-username",
    "password": "your-password",
    "database": "your-database",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

---

## Future Enhancements
- Implement role-based access control.
- Add unit and integration tests.
- Improve UI with more data visualizations.
- Extend API to handle real-time data using WebSockets from the potentiometer.
- Enhance the stylization

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

## License
This project is licensed under the MIT License.

