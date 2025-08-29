# Ethnomatika Backend

This directory contains the Node.js/Express backend for the Ethnomatika project.

## Running the server

1.  **Install dependencies:**
    Open a terminal in this `backend` directory and run:
    ```
    npm install
    ```

2.  **Start the server:**
    After the installation is complete, run the following command to start the server:
    ```
    node server.js
    ```

The server will start on `http://localhost:3001`.

## API Endpoints

*   `GET /api/heritage`: Returns a list of all heritage exhibits.
*   `GET /api/heritage?ethnic=<id>`: Returns a list of heritage exhibits filtered by the specified ethnic group ID (e.g., `dusun`, `iban`).
