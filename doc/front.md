# React Project Documentation

## Overview
This project provides a web interface for administrators to view and manage achievements registered in the system. It interacts with the REST API backend to perform operations.

## Getting Started
To run the project locally, follow these steps:

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository to your local machine:
git clone <repository_url>

2. Navigate to the project directory:
cd <project_directory>

3. Install dependencies using npm or yarn:
npm install
or
yarn install

### Running the Project
Once the dependencies are installed, you can start the development server:

npm start
or
yarn start

The project will be available at `http://localhost:3000` in your web browser.

## Project Structure
The project structure is as follows:

/src
|-- components
|-- LogrosList.js # Component for displaying achievements and updating progress
|-- LogrosForm.js # Component for creating achievements
|-- App.js # Main component rendering LogrosList and LogrosForm
|-- index.js # Entry point of the application

## Components

### LogrosList
This component displays a list of achievements for a player and allows updating progress.

### LogrosForm
This component provides a form for creating new achievements.

## Dependencies
The project uses the following dependencies:
- axios: for making HTTP requests to the backend API.
- react: JavaScript library for building user interfaces.
- react-dom: provides DOM-specific methods for React.
- react-scripts: scripts and configuration used by Create React App.

## Error Handling
Error handling is implemented for HTTP requests to the backend API. Error messages are logged to the console for debugging purposes.

