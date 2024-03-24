# WiseChatBot

## Introduction

WiseChatBot is a simple, yet powerful chat application built on Node.js and leveraging Socket.IO for real-time communication. It features an intuitive user interface and employs the Wolfram Alpha API for generating intelligent responses. This application demonstrates the capabilities of modern web technologies in creating interactive and responsive chat applications.

## Features

- **Real-Time Messaging**: Engage in live chat sessions without refreshing the page.
- **Intelligent Responses**: Utilizes Wolfram Alpha API to provide smart answers to queries.
- **Responsive Design**: Ensures a seamless experience across different devices and screen sizes.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm (Node Package Manager)
- An active internet connection for API calls

## Installation

To get the project up and running on your local machine, follow these steps:

   1. **Clone the Repository**

   ```bash
   git clone https://github.com/CodingIndeed/WiseChatBot.git
   cd WiseChatBot
   ```
   1. Install Dependencies

   ```bash
   npm install
   ```
   2. Setup Environment Variables

   Create a .env file in the project root and add your Wolfram Alpha API key:

   ```bash
   WOLFRAM_APP_ID=your_api_key_here
   ```
   Replace your_api_key_here with your actual Wolfram Alpha API key.

## Running the Application

   1. Start the Server

   ```
   npm start
   ```
   This command will launch the server. By default, it listens on port 3000.

   2. Access the Application
   Open a web browser and navigate to http://localhost:3000 to start using the application.

## Contributions

Contributions to this project are welcome! If you have improvements or bug fixes, please feel free to fork the repository and submit a pull request. Your contributions can help make this project even better.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more information.

