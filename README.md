
# Real-Time Chat App

This is a real-time chat application built using NestJS, MongoDB, and Socket.IO.

## Features

- Real-time messaging using Socket.IO
- MongoDB for storing chat data
- NestJS for backend development

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/chat-app.git
   ```

2. Install dependencies:

   ```bash
   cd chat-app
   npm install
   ```

3. Set up MongoDB:

   - Make sure MongoDB is installed and running on your system.
   - Configure MongoDB connection in `app.module.ts`.

4. Start the server:

   ```bash
   npm run start
   ```

## Usage

- Visit `http://localhost:3000` in your browser to access the chat application.
- Enter your username and start chatting with other users in real-time.

## API Endpoints

- `/chat` - Endpoint for sending and receiving chat messages.

## Dependencies

- Node.js
- NestJS
- MongoDB
- Socket.IO
- TypeORM

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
